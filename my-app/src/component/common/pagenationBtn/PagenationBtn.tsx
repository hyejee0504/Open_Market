import React, {useState, useEffect} from 'react';
import * as S from "./PagenationBtnStyle"

interface PagenationBtnProps{
  pageNumber: number;
  nowPage?: number;
  setPage: (currentPage: number) => void;
}

export default function PagenationBtn({pageNumber, setPage} : PagenationBtnProps ) {

  const [nowPage, setNowPage] = useState(1);

  const [pageAllNumber, setPageAllNumber] = useState(1);
  const [nowPageNumber, setNowPageNumber] = useState(0);

  useEffect(() => {
    if(pageNumber > 5){
      setPageAllNumber(Math.floor(pageNumber/5)+1);
    }
  }, [pageNumber])

  const handlePrevPage = () => {
    if(nowPageNumber === 0){
      setNowPageNumber(0);
    }else{
      setNowPageNumber(prev => prev-1);
    }
  }

  const handleNextPage = () => {
    if(nowPageNumber/5 === pageAllNumber-1){
      setNowPageNumber(nowPageNumber);
    }else{
      setNowPageNumber(prev => prev+5);
    }
  }


  return (
    <>
    <S.PrevBtn onClick={handlePrevPage}>Prev</S.PrevBtn>
    {Array.from({ length: 5 }).map((item, index) => (
      <S.PageNumberBtn
      key={index} 
      onClick={() => {
        setPage(index+1); 
        setNowPage(index+1);
      }} 
      on={nowPage === Number(index + 1) ? "on" : "off"}
      >
        {index+1+nowPageNumber}
      </S.PageNumberBtn>
    ))}
    <S.NextBtn onClick={handleNextPage}>Next</S.NextBtn>
    </>
  )
}
