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
}


const initialState: ProductsState = {
    status: "idle",
    error: "",
    products:[],
    pageNumber:1,
}


//cretateAsyncThunk(액션명, 콜백함수-비동기로직)
//전체 상품 가져오기
export const fetchGetProducts = createAsyncThunk(
    "products/fetchGetProducts",
    async (page: number) => {
    
        const url = `${BASE_URL}/products/?page=${page}`;
        const result = await axios.get(url);
        return result.data;

    });

//state 저장
export const productsSlice = createSlice({
        name: "products",
        initialState,
        reducers: {},
        //redux thunk 관리 
        extraReducers: (builder) => {
            builder.addCase(fetchGetProducts.pending, (state = initialState) => {
                state.status = "loading";
            });
            builder.addCase(fetchGetProducts.fulfilled, (state = initialState, action) => {
                state.status = "succeeded";
                state.error = "";
                state.products = action.payload.results;
                state.pageNumber = Math.floor(Number(action.payload.count) / 24) + 1;
                
            });
            builder.addCase(fetchGetProducts.rejected, (state = initialState, action) => {
                state.status = "failed";
                state.error = action.error.message || "Something is wrong";
                state.products = [];
            });
        }  
})

//이렇게 해두면, 컴포넌트에서 함수 명만 가지고 해당 데이터를 부를 수 있다.
//리턴:state.reducer이름.state값
export const getAllProducts = (state: RootState) => state.products.products;
export const getProductsStatus = (state: RootState) => state.products.status;
export const getPageNumber = (state: RootState) => state.products.pageNumber;





export default productsSlice.reducer;
