import { RootState } from "../store/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://openmarket.weniv.co.kr";

export interface LoginDataForm {
    username: string;
    password: string;
    login_type?: string;
}

interface LoginState {
    joinStatus: string;

    error: string;
    userType: string;

    nameStatus: string;
    nameMessage: string;
    companyNumberStatus: string;
    companyMessage: string;
}


const initialState: LoginState = {
    joinStatus: "idle", //유휴상태
  
    error: "",
    userType: "BUYER",
  
    nameStatus: "idle",
    nameMessage: "",
    companyNumberStatus: "idle",
    companyMessage: "",
  }

//로그인 요청
export const fetchPostLogin = createAsyncThunk(
    "login/fetchPostLogin",
    async ({userData} : {userData : LoginDataForm}, { rejectWithValue }) => 
    {
        const url = `${BASE_URL}/accounts/login/`;
        
        try {
            const data = userData;
            const result = await axios.post(url, data);
            console.log(result.data);

            if(result.data){
                //토큰 로컬스토리지에 저장
                sessionStorage.setItem("token", JSON.stringify(result.data))
            }

            return result.data;} 
        catch (error: any) {
            console.log(error.response.data.FAIL_Message);
            return rejectWithValue(error.response.data.FAIL_Message);
      }
    }
  );

  //로그아웃
  export const logout = createAsyncThunk(
    "login/logout", async () => {
        sessionStorage.clear();
    }
  )

export const loginSlice = createSlice({
    name: "loginSlice",
        initialState,
        reducers: {
          
        },
        extraReducers: (builder) => {
            //로그인
            builder.addCase(fetchPostLogin.pending, (state = initialState) => {
                state.joinStatus = "loading";
            });
            builder.addCase(fetchPostLogin.fulfilled, (state = initialState) => {
                state.joinStatus = "succeeded";
            });
            builder.addCase(fetchPostLogin.rejected, (state = initialState, action) => {
                state.joinStatus = "failed";
                if (action.payload) {
                  state.error = Object.values(action.payload as any)
          .map((message: any) => message.join().toString())
          .join("\n");
                  } else {
                    state.error = action.error.message || "Something is wrong in Join:<";
                  }

            });



        }  
})