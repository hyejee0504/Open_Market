import React, { useState, useRef, useEffect } from 'react';
import sample1 from "../../../asset/carouselimg/sample1.png";
import sample2 from "../../../asset/carouselimg/sample2.png";
import sample3 from "../../../asset/carouselimg/sample3.png";
import * as S from "./CarouselStyle";
import PageBtn from './PageBtn';



export const useInterval = (callback, delay) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current && savedCallback.current !== undefined) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default function Carousel() {
  const TOTAL_SLIDES = 2;
  const [slideIndex, setSlideIndex] = useState(0);
  const thumbnail = [sample1, sample2, sample3];


  

  // 캐러셀 자동 슬라이드
  useInterval(() => {
    if (slideIndex === 2) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }, 3500);

  // 오른쪽 버튼 클릭 시 오른쪽으로 슬라이드 이동
  const nextSlide = () => {
    if (slideIndex !== TOTAL_SLIDES) {
      setSlideIndex(slideIndex + 1);
    }
  };
  
  // 왼쪽 버튼 클릭 시 왼쪽으로 슬라이드 이동
  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  // 하단 버튼
  const movePage = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
    <S.CarouselWrapper>
      {thumbnail.map((item, index) => (
        <S.Carousel
          key={index}
          className={slideIndex === index ? 'active' : ""}
          style={
            slideIndex === 3
              ? { transform: 'translateX(0px)' }
              : { transform: `translateX(-${slideIndex}00%)` }
          }
        >
          <S.Carouselimg
            src={item}
            alt=""
          />
        </S.Carousel>
      ))}
       </S.CarouselWrapper>

      {slideIndex !== 0 && (
        <PageBtn moveSlide={prevSlide} direction="prev" />
      )}
      {slideIndex !== TOTAL_SLIDES && (
        <PageBtn moveSlide={nextSlide} direction="next" />
      )}

      <S.IconWrap>
        {Array.from({ length: 3 }).map((item, index) => (
          <S.PageIcon
            key={index}
            onClick={() => movePage(index)}
            className={slideIndex === index ? 'icon active' : 'icon'}
          />
        ))}
      </S.IconWrap>
      </>
   
  );
};

