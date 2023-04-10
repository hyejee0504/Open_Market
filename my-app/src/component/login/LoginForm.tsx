import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {
  fetchPostLogin,
  getLoginStatus,
  getLoginError,
  getLoginUserType,
} from "../../features/loginSlice";
import * as S from "./LoginFormStyle";
import { CommonBtn } from '../common/button/Button';
import ChangeUsertypeBtn from '../common/changeusertypebtn/ChangeUsertypeBtn';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hook/hooks';


const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const Loginform = styled.form`
  width: 550px;
  height: 328px;
  border: 1px solid var(--color-grey);
  border-radius: 10px;
  padding: 35px;
`

export default function LoginForm() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();



    const userType = useAppSelector(getLoginUserType);
    const loginStatus = useAppSelector(getLoginStatus);
    const loginError = useAppSelector(getLoginError)

    const initialValues = {
        username : "",
        password : "",
    }

    //유저 정보 상태
  const [userFormValue, setUserFormValue] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");



    //input 값 변경 함수
    const onchange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setUserFormValue({...userFormValue, [name] : value})
    }

    //로그인 폼 제출
    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {

      const {username, password} = userFormValue;
      const userData = {username, password, login_type: userType};
      dispatch(fetchPostLogin(userData));
    }

  return (
    <LoginFormWrapper>
      <ChangeUsertypeBtn 
      type="login" usertype={userType}/>
      <Loginform onSubmit={onsubmit}>
          <S.LoginInput
          type='text'
          name='username'
          placeholder='아이디'
          onChange={onchange}
          value={userFormValue.username}
          required
          />
          <S.LoginInput
          type='password'
          name='password'
          placeholder='비밀번호'
          onChange={onchange}
          value={userFormValue.password}
          required
          />
          <CommonBtn type='submit' marginTop="72px">로그인</CommonBtn>
  
      </Loginform>
    </LoginFormWrapper>
  )
}
