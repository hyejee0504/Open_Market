import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hook/hooks';
import { getLoginUserType } from '../../../features/loginSlice';
import { SVGIcon } from '../../icon/SVGIcon';
import * as S from "../header/HeaderStyle"

interface HeaderProps {
  usertype?: string;
  sellercenter?: string;
  loginstatus?: string;
}

const HeaderWrapper = styled.div`
  
`

function Header({sellercenter, loginstatus,...props }: HeaderProps) {


  const userType = useAppSelector(getLoginUserType);


  return (
    <HeaderWrapper>
      <SVGIcon id='logo-hodu' width="124px" height="38px"/>
      <S.SearchInput>
        
      </S.SearchInput>


    </HeaderWrapper>
  )
}

function SellerCenterHeader() {

  const userType = useAppSelector(getLoginUserType);


  return (
    <HeaderWrapper>



    </HeaderWrapper>
  )
}

export {Header, SellerCenterHeader}
