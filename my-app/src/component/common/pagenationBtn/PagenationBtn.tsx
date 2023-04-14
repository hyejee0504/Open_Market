import React, {useState} from 'react';
import * as S from "./PagenationBtnStyle"

interface PagenationBtnProps{
  pageNumber: number;
  nowPage?: number;
  setPage: (currentPage: number) => void;
}

export default function PagenationBtn({pageNumber, setPage} : PagenationBtnProps ) {

  const [nowPage, setNowPage] = useState(1);


  return (
    <>
    {Array.from({ length: pageNumber }).map((item, index) => (
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
    </>
  )
}
