import React, {useState} from 'react';
import {CommonInput,  PhoneInput} from "../joininput/JoinInput"
import checkOnIcon from "../../../asset/icon-check-on.svg";
import checkOffIcon from "../../../asset/icon-check-off.svg";



export default function JoinInputForm() {
  //정보 객체 생성
  const initialValues = {
    username: "",
    password: "",
    checkPassword: "",
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    email1: "",
    email2: "",
    checkBox: false,
  };

  //에러 메세지 객체 생성
  const initialError = {
    username: "",
    password: "",
    checkPassword: "",
    name: "",
    phone: "",
    email: "",
    registrationNumber: "",
  };

  //아이디 중복 확인 버튼
  const [onUsernameBtn, setOnUsernameBtn] = useState(true);

  //유저 정보 상태
  const [userFormValue, setUserFormValue] = useState(initialValues);

  //에러 메세지 상태
  const [errorMessage, setErrorMessage] = useState(initialError);

  


  //아이디 변경 함수
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
  

  }

  //패스워드 변경 함수
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const message = "비밀번호는 영문, 숫자 조합 8-20자리를 입력해주세요.";
    const passwordRegExp = "^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$";
    
    if(value.match(passwordRegExp)){
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, [name] : ""});
    }else{
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, [name] : message});
    }
  }

  //패스워드 재확인 변경 함수
  const onChangeCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const message = "* 비밀번호가 일치하지 않습니다.";
    
    if(value.length > 0 && value === userFormValue.password){
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, [name] : ""});
    }else{
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, [name] : message});
    }
  }

  //이름 변경 함수
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 이름은 한글 혹은 영어로 10자리까지 가능합니다.";
    const nameRegExp = "^[ㄱ-ㅎ가-힣a-zA-Z]{1,10}$";

    if(value.match(nameRegExp)){
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, [name] : ""});
    }else{
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, [name] : message});
    } 
  }

  //핸드폰 변경 함수
  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    

    
  }


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    }

  return (
    <form onSubmit={onSubmit}>
      <CommonInput
      label='아이디'
      type='text'
      name='username'
      onButton={onUsernameBtn}
      width='346px'
      onChange={onChangeUsername}
      value={userFormValue.username}
      />
      <CommonInput
      label='비밀번호'
      type='password'
      name='password'
      onChange={onChangePassword}
      error={errorMessage.password}
      icon={userFormValue.password.length > 0 && errorMessage.password === "" ? checkOnIcon : checkOffIcon}
      value={userFormValue.password}
      />
      <CommonInput
      label='비밀번호 재확인'
      type='password'
      name='checkPassword'
      onChange={onChangeCheckPassword}
      error={errorMessage.checkPassword}
      icon={userFormValue.checkPassword.length > 0 && errorMessage.checkPassword === "" ? checkOnIcon : checkOffIcon}
      value={userFormValue.checkPassword}
      />
      <CommonInput
      label='이름'
      type='text'
      name='name'
      onChange={onChangeName}
      error={errorMessage.name}
      value={userFormValue.name}
      />
      <PhoneInput
      onChange={onChangePhoneNumber}
      value1={userFormValue.phone1}
      value2={userFormValue.phone2}
      value3={userFormValue.phone3}
      error={errorMessage.phone}
      />
    </form>
  )
}
