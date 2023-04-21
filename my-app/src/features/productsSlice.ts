import { RootState } from "../store/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://openmarket.weniv.co.kr";

export interface Product {
    "product_id": number,
	"product_name": string,
	"seller": number,
    "store_name": string,
    "image": string,
    "price": number,
    "shipping_method": string, //string, 선택
    "shipping_fee": number,
    "stock": number,
    "products_info": string,
}

interface ProductsState {
    status: string;
    error: string;
    products: Product[];
    pageNumber: number;

    searchStatus: string;
    searchError: string;
    searchProducts: Product[];
}


const initialState: ProductsState = {
    status: "idle",
    error: "",
    products:[],
    pageNumber:1,

    searchStatus: "idle",
    searchError:  "",
    searchProducts: [],
}


//cretateAsyncThunk(액션명, 콜백함수-비동기로직)
//전체 상품 가져오기
export const fetchGetProducts = createAsyncThunk(
    "products/fetchGetProducts",
    async (page: number) => {
    
        // const url = `${BASE_URL}/products/`;
        const url = `${BASE_URL}/products/?page=${page}`;
        const result = await axios.get(url);
        return result.data;

    });

export const fetchGetSearchProducts = createAsyncThunk(
    "products/fetchGetSearchProducts",
    async (search: string) => {
        const url = `${BASE_URL}/products/?search=${search}`;
        const result = await axios.get(url);
        return result.data;
    }
)

//state 저장
export const productsSlice = createSlice({
        name: "products",
        initialState,
        reducers: {},
        //redux thunk 관리 
        extraReducers: (builder) => {
            //전체 상품 불러오기
            builder.addCase(fetchGetProducts.pending, (state = initialState) => {
                state.status = "loading";
            });
            builder.addCase(fetchGetProducts.fulfilled, (state = initialState, action) => {
                state.status = "succeeded";
                state.error = "";
                state.products = action.payload.results;
                state.pageNumber = Math.floor(Number(Number(action.payload.count) / 15)) + 1;
                
            });
            builder.addCase(fetchGetProducts.rejected, (state = initialState, action) => {
                state.status = "failed";
                state.error = action.error.message || "Something is wrong";
                state.products = [];
            });
            //검색한 상품 불러오기
            builder.addCase(fetchGetSearchProducts.pending, (state = initialState) => {
                state.searchStatus = "loading";
            });
            builder.addCase(fetchGetSearchProducts.fulfilled, (state = initialState, action) => {
                state.searchStatus = "succeeded";
                state.searchError = "";
                state.searchProducts = action.payload.results;
                
            });
            builder.addCase(fetchGetSearchProducts.rejected, (state = initialState, action) => {
                state.searchStatus = "failed";
                state.searchError = action.error.message || "Something is wrong";
                state.searchProducts = [];
            });
        }  
})

//이렇게 해두면, 컴포넌트에서 함수 명만 가지고 해당 데이터를 부를 수 있다.
//리턴:state.reducer이름.state값
export const getAllProducts = (state: RootState) => state.products.products;
export const getProductsStatus = (state: RootState) => state.products.status;
export const getPageNumber = (state: RootState) => state.products.pageNumber;

export const getSearchProducts = (state: RootState) => state.products.searchProducts;
export const getSearchStatus = (state: RootState) => state.products.searchStatus;

export const getProductID = (state: RootState, productID: number) => {
    return state.products.products.find((product) => product.product_id === productID);
}





export default productsSlice.reducer;
