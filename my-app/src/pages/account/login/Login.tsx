import React from 'react'
import LoginForm from '../../../component/login/LoginForm';
import styled from 'styled-components';
import { SVGIcon } from '../../../component/icon/SVGIcon';


const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  margin-top: 70px;
`

export default function Login() {
  return (
    <LoginWrapper>
      <SVGIcon id='logo-hodu' width="238px" height="80px" />
      <LoginForm/>
    </LoginWrapper>
  )
}
