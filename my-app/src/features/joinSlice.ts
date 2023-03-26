import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://openmarket.weniv.co.kr";

//회원가입 데이터 타입
interface JoinState {
    username: string;
    password: string;
    password2: string;
    phone_number: string;
    name: string;
    email?: string;
    company_registration_number?: string;
    store_name?: string;
}

// const initialState: JoinState = {
//     value: 0
//   }

//아이디 유효성 검증
export const fetchPostUserName = createAsyncThunk(
    "join/fetchPostUserName",
    async (username: string, { rejectWithValue }) => {
      try {
        const data = { username };
        const result = await axios.post(`${BASE_URL}/accounts/signup/valid/username/`, data);
        console.log(result.data);
        return result.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.FAIL_Message);
      }
    }
  );

//사업자 등록 번호 검증
export const fetchPostCompanyNum = createAsyncThunk(
    "join/fetchPostCompanyNum",
    async (company_registration_number: number, { rejectWithValue }) => {
      try {
        const data = { company_registration_number };
        const result = await axios.post(`${BASE_URL}/accounts/signup/valid/`, data);
        console.log(result.data);
        return result.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.FAIL_Message);
      }
    }
  );

  //회원가입 유효성 검증
  export const fetchPostJoin = createAsyncThunk(
    "join/fetchPostJoin",
    async ({userType, userData} : {userType : string; userData : JoinState}, { rejectWithValue }) => 
    {
        const url = 
        userType === "BUYER" ? `${BASE_URL}/accounts/signup/` : `${BASE_URL}/accounts/signup_seller/`;

      try {
        const data = userData;
        const result = await axios.post(url, data);
        console.log(result.data);
        return result.data;
      } catch (error: any) {
        return rejectWithValue(error.response);
      }
    }
  );



