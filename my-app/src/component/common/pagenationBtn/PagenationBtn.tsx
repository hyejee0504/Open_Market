import React, {useState, useEffect} from 'react';
import * as S from "./PagenationBtnStyle";
import { SVGIcon } from '../../icon/SVGIcon';


interface PagenationBtnProps{
  pageNumber: number;
  nowPage?: number;
  setPage: (currentPage: number) => void;
}

export default function PagenationBtn({pageNumber, setPage} : PagenationBtnProps ) {

  const [nowPage, setNowPage] = useState(1);

  const handlePageBtn = (index: number) => {
    setNowPage(index);
    setPage(index);
  };

  const onLeftArrow = nowPage !== 1;
  const onRightArrow = pageNumber !== nowPage;


  return (
    <S.PagenationBtnWrapper>
    <S.PrevBtn onClick={() => handlePageBtn(nowPage - 1)} disabled={!onLeftArrow}>
      Prev
    </S.PrevBtn>
    {Array.from({ length: pageNumber }).map((_, index) => (
      <S.PageNumberBtn
        key={index} 
        onClick={() => {
        setPage(index+1); 
        setNowPage(index+1);
      }} 
      on={nowPage === Number(index + 1) ? "on" : "off"}
      >
        {index+1}
      </S.PageNumberBtn>
    ))}
    <S.NextBtn onClick={() => handlePageBtn(nowPage + 1)} disabled={!onRightArrow}>Next</S.NextBtn>
    </S.PagenationBtnWrapper>
  )
}
