import { configureStore } from "@reduxjs/toolkit";
import joinReducer from "../features/joinSlice";
import loginReducer from "../features/loginSlice"
import productsReducer from "../features/productsSlice";
import modalReducer from "../features/modalSlice";


const store = configureStore({
    reducer : {
        login: loginReducer,
        join: joinReducer,
        // seller: sellerReducer,
        products: productsReducer,
        modal: modalReducer,

    }
});

export default store;

//state와 dispatch타입을 st ore에서 추론해서 export함 - 타입스크립트를 사용
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
