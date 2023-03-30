import React, {useState} from 'react';
import {CommonInput,  PhoneInput, EmailInput} from "../joininput/JoinInput"
import { Link } from 'react-router-dom';
import checkOnIcon from "../../../asset/icon/icon-check-on.svg";
import checkOffIcon from "../../../asset/icon/icon-check-off.svg";
import {
  fetchPostUserName,
  fetchPostCompanyNum,
  fetchPostJoin,
  getNameStatus,
  getNameMessage,
  getCompanyStatus,
  getCompanyMessage,
  getJoinStatus,
  getJoinError,
  getJoinUserType,
  JoinDataForm,
  resetAll,
  resetName,
  resetCompanyNumber,
} from "../../../features/joinSlice"
import { useAppDispatch, useAppSelector } from '../../../hook/hooks';
import { AppDispatch } from '../../../store/store';
import { CommonBtn } from '../../common/button/ButtonStyle';
import { CheckBoxInput } from '../../common/checkbox/CheckBoxInput';



export default function JoinInputForm() {

  const dispatch = useAppDispatch();

  const userType = useAppSelector(getJoinUserType);

  const nameStatus = useAppSelector(getNameStatus);
  const companyStatus = useAppSelector(getCompanyStatus);
  const registerStatus = useAppSelector(getJoinStatus);
  const registerError = useAppSelector(getJoinError);

  const nameMessage = useAppSelector(getNameMessage);
  const companyMessage = useAppSelector(getCompanyMessage);

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
    companyRegistrationNumber: "",
  };

  const initialSellerValues = {
    companyRegistrationNumber: "",
    storeName: "",
  };

  //아이디 중복 확인 버튼
  const [onUsernameBtn, setOnUsernameBtn] = useState(false);

  //사업자 등록번호 인증 버튼
  const [onCompanyRegistrationBtn, setCompanyRegistrationBtn] = useState(false);

  //유저 정보 상태
  const [userFormValue, setUserFormValue] = useState(initialValues);

  //에러 메세지 상태
  const [errorMessage, setErrorMessage] = useState(initialError);

  //판매자 추가 정보
  const [sellerValues, setSellerValues] = useState(initialSellerValues);

  
  //아이디 중복확인 함수
  const checkUserNameVaild = (username: string) => {
    dispatch(fetchPostUserName(username));
  }
  


  //아이디 변경 함수
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(nameStatus !== "idle"){
      dispatch(resetName());
    }else{
      const {name, value} = e.target;
      const message = "* 아이디는 3-20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.";
      const usernameRegExp = "^[A-Za-z0-9]{3,20}$";

      if(value.match(usernameRegExp)){
        setUserFormValue({...userFormValue, [name] : value});
        setErrorMessage({...errorMessage, [name] : ""});
        setOnUsernameBtn(true);
      }else{
        setUserFormValue({...userFormValue, [name] : value});
        setErrorMessage({...errorMessage, [name] : message});
        setOnUsernameBtn(false);
      }
    }
  }

  //패스워드 변경 함수
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const message = "* 비밀번호는 영문, 숫자 조합 8-20자리를 입력해주세요.";
    const passwordRegExp = "^[A-Za-z0-9]{8,20}$";

    
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

  //핸드폰 버튼 함수 - phone1 값 변경
  const onClickPhone = (selected : string) => {
    setUserFormValue({...userFormValue, "phone1": selected });
  }

  //핸드폰 변경 함수
  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 휴대폰번호 형식을 확인해주세요.";
    const phoneRegExp = "^[0-9]{3,4}$";

    if(value.match(phoneRegExp)){
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, "phone" : ""});
    }else{
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, "phone" : message});
    } 
  }

  //이메일 변경 함수
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 이메일 형식을 확인해주세요.";
    const email1RegExp = "^[a-zA-Z0-9]*$";
    const email2RegExp = "([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]))(:[0-9]{1,5})?";


    const regExp = name === "email1" ? email1RegExp : email2RegExp;
    if(value.match(regExp)){
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, "email" : ""});
    }else{
      setUserFormValue({...userFormValue, [name] : value});
      setErrorMessage({...errorMessage, "email" : message});
    } 
  }

  //사업자 등록 번호 인증 
  const checkCompanyRegistrationNumber = (number: string) => {
    dispatch(fetchPostCompanyNum(number));
  }

  //사업자 등록 번호 변경 함수
  const onChangeCompanyRegistrationNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(companyStatus !== "idle"){
      dispatch(resetCompanyNumber());
    }else{
      const {name, value} = e.target;
      const message = "* 사업자 등록 번호는 숫자 10자로 입력해주세요.";
      const companyNumRegExp = "^[0-9]{1,10}$";

      setSellerValues({...sellerValues, [name] : value});
      if(value.match(companyNumRegExp)){
        if((value.length > 0 && value.length < 10) || value.length > 10){
          setErrorMessage({...errorMessage, [name] : message});
          setCompanyRegistrationBtn(false);
        }else{
          setErrorMessage({...errorMessage, [name] : ""});
          setCompanyRegistrationBtn(true);
        }
      }else{
        setErrorMessage({...errorMessage, [name] : message});
        setCompanyRegistrationBtn(false);
      }
    }
  }

  //스토어 이름 변경
  const onChangeStoreName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSellerValues({...sellerValues, "storeName" : e.target.value})
  }

  //체크 박스 확인
  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormValue({...userFormValue, "checkBox" : e.target.checked})   
  }



  //회원가입 제출하기
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
      onClick={checkUserNameVaild}
      error={nameMessage || errorMessage.username}
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
      onClick={onClickPhone}
      value1={userFormValue.phone1}
      value2={userFormValue.phone2}
      value3={userFormValue.phone3}
      error={errorMessage.phone}
      />
      <EmailInput
        onChange={onChangeEmail}
        value1={userFormValue.email1}
        value2={userFormValue.email2}
        error={errorMessage.email}
      />
      <>
        <CommonInput
          label="사업자 등록번호"
          type="text"
          name="companyRegistrationNumber"
          width="346px"
          onChange={onChangeCompanyRegistrationNumber}
          onClick={checkCompanyRegistrationNumber}
          onButton={onCompanyRegistrationBtn}
          error={companyMessage || errorMessage.companyRegistrationNumber}
          value={sellerValues.companyRegistrationNumber}
        />
        <CommonInput
          label="스토어 이름"
          type="text"
          name="storeName"
          onChange={onChangeStoreName}
          value={sellerValues.storeName}
        />
      </>
      <div style={{display: "flex", alignItems: "flex-end"}}>
        <CheckBoxInput onChange={onChangeCheckbox} checked={userFormValue.checkBox} children={undefined}/> 
        <span style={{color : "var(--color-darkGrey)", lineHeight : "5px"}}>
          호두샵의 
          <Link to="/" style={{fontWeight : "700", textDecoration: "underline"}}>이용약관</Link> 및 
          <Link to="/" style={{fontWeight : "700", textDecoration: "underline"}}>개인정보처리방침</Link>
          에 대한 내용을 확인하였고 동의합니다.</span>
      </div>
      
      <CommonBtn type='submit' style={{marginTop: "10px"}}>가입하기</CommonBtn>
    </form>
  )
}
