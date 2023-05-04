import React, {useState} from 'react';
import * as S from "./DetailTabStyle";

export default function DetailTab() {
    const buttonArr = ["제품상세", "리뷰", "Q&A", "반품/교환정보"];
    const [detailTxt, setDetailTxt] = useState("제품상세");
  return (
    <S.TabWrapper>
        <S.TabBtnWrapper>
            {buttonArr.map((value, index) => {
                return <S.TabBtnList key={index+Math.random()} onClick={()=> {setDetailTxt(value)}} on={detailTxt === value ? true : false}> <S.TabBtn>{value}</S.TabBtn></S.TabBtnList>
            })}
        </S.TabBtnWrapper>
        <S.TabDetail>
            {detailTxt}
        </S.TabDetail>
       
    </S.TabWrapper>
  )
}
