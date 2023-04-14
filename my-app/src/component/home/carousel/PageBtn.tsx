import React from 'react';
import { SVGIcon } from '../../icon/SVGIcon';

interface PageBtnProps{
    direction:string,
    moveSlide: () => void,
}


export default function PageBtn({ direction, moveSlide }: PageBtnProps) {
    return (
        <button type="button" onClick={moveSlide}>
          {direction === 'next' && 
          <button type='button'>
            <SVGIcon id='icon-swiper-2' width="50px" height="50px"/>
            </button>}
          {direction === 'prev' && <button type='button'>
            <SVGIcon id='icon-swiper-1' width="50px" height="50px"/>
            </button>
            }
        </button>
      );
}
