import React, {useState} from 'react';
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


function Header({sellercenter, loginstatus,...props }: HeaderProps) {


  const userType = useAppSelector(getLoginUserType);

  const [searchContent, setSearchContent] = useState("");

  //검색창 변경 함수
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  }

  //검색창 검색 버튼 함수
  const handleSearch = () => {
    if(searchContent !== ""){

    }
  }

  

  return (
    <S.HeaderWrapper>
      
      <S.SearchWrapper>
      <SVGIcon id='logo-hodu' width="124px" height="38px"/>
        <S.SearchInput
        type='text'
        onChange={onChangeSearch}
        placeholder='상품을 검색해보세요!'
        value={searchContent}
        />
        <S.SearchBtn type='button' onClick={handleSearch}/>
      </S.SearchWrapper>
      <S.UserWrapper>
        {userType === "BUYER" ?
        <S.BuyerWrapper>
          <S.IconWrapper>
            <SVGIcon id='icon-shopping-cart' width="25px" height= "25px" alt='장바구니아이콘'/>
            <S.IconTxt>장바구니</S.IconTxt>
          </S.IconWrapper>
          <S.IconWrapper>
            <SVGIcon id='icon-user' width="25px" height= "25px" alt='유저아이콘'/>
            <S.IconTxt>마이페이지</S.IconTxt>
          </S.IconWrapper>
        </S.BuyerWrapper>
        :
        <>
          <S.IconWrapper>
            <SVGIcon id='icon-user' width="25px" height= "25px" alt='유저아이콘'/>
            <S.IconTxt>마이페이지</S.IconTxt>
          </S.IconWrapper>
          <S.SellerCenterBtn>
            <SVGIcon id='icon-shopping-bag' width="32px" height= "32px" marginRight="8px" alt='쇼핑백아이콘'/>
            <p>판매자 센터</p>
          </S.SellerCenterBtn>
        </>
        }
      </S.UserWrapper>




    </S.HeaderWrapper>
  )
}

function SellerCenterHeader() {

  const userType = useAppSelector(getLoginUserType);


  return (
    <S.HeaderWrapper>



    </S.HeaderWrapper>
  )
}

export {Header, SellerCenterHeader}
