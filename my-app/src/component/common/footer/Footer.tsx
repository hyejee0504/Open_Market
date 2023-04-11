import React from 'react';
import * as S from "./FooterStyle";
import { Link } from 'react-router-dom';
import { SVGIcon } from '../../icon/SVGIcon';


export default function Footer() {
  return (
    <S.FooterWrapper>
        <S.TopWrapper>
            <S.FooterList>
                <li>
                    <Link to={""}>호두샵소개</Link>
                </li>
                <li>
                    <Link to={""}>이용약관</Link>
                </li>
                <li>
                    <Link to={""}>개인정보처리방침</Link>
                </li>
                <li>
                    <Link to={""}>전자금융거래약관</Link>
                </li>
                <li>
                    <Link to={""}>청소년보호정책</Link>
                </li>
                <li>
                    <Link to={""}>제휴문의</Link>
                </li>
            </S.FooterList>
            <S.ShareList>
                <li>
                    <Link to={""}><SVGIcon id='icon-insta' alt='인스타그램아이콘' width="32px" height="32px"/></Link> 
                </li>
                <li>
                    <Link to={""}><SVGIcon id='icon-yt' alt='유투브아이콘' width="32px" height="32px"/></Link>
                </li>
                <li>
                    <Link to={""}><SVGIcon id='icon-fb' alt='페이스북아이콘' width="32px" height="32px"/></Link>
                </li>
            </S.ShareList>
        </S.TopWrapper>
        <S.DownWrapper>
            <S.CompanyName>(주) HODU SHOP</S.CompanyName>
            <S.CompanyTxt>인천광역시 부평구 마장로</S.CompanyTxt>
            <S.CompanyTxt>사업자 번호 : 000-0000-0000|통신판매업</S.CompanyTxt>
            <S.CompanyTxt>대표 : 한혜지</S.CompanyTxt>
        </S.DownWrapper>
    </S.FooterWrapper>
  )
}
