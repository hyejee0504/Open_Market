import React, {useState} from 'react';
import * as S from "./LoginFormStyle";
import { CommonBtn } from '../common/button/Button';
import ChangeUsertypeBtn from '../changeusertypebtn/ChangeUsertypeBtn';

export default function LoginForm() {

    const initialValues = {
        username : "",
        password : "",
    }

    //유저 정보 상태
  const [userFormValue, setUserFormValue] = useState(initialValues);



    //input 값 변경 함수
    const onchange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setUserFormValue({...userFormValue, [name] : value})

    }

    //로그인 폼 제출
    const onsubmit = () => {

    }

  return (
    <>
      <ChangeUsertypeBtn 
      type="login" usertype='SELLER'/>
      <form onSubmit={onsubmit}>
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
          <CommonBtn type='submit'>로그인</CommonBtn>
  
      </form>
    </>
  )
}
