import React, {useRef} from 'react';
import * as S from "./JoinInputStyle";
import { CommonBtn } from '../../common/button/ButtonStyle';
import { SVGIcon } from '../../icon/SVGIcon';
import { PhoneSelectInput } from './PhoneSelectInput';

//JoinInput에 들어가는 props의 자료형을 정함.
interface CommonInputProps{
    label: string;
    type: string;
    name: string;
    icon?: string;
    width?: string;
    value?: string;
    onClick?: (value: string) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    onButton?: boolean;
}

function CommonInput ({ onClick, onChange, onButton, error, value, icon,...props }: CommonInputProps) {

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  //버튼이 있는 input에서 클릭 이벤트 함수
  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onClick?.(inputRef.current.value);
  };

  return (
    <S.CommonInput>
        <S.LabelText htmlFor={props.name}>{props.label}</S.LabelText>
        <S.Input
        {...props}
        id={props.name}
        onChange={onChange}
        value={value}
        icon={icon}
        autoComplete='off'
        ref={inputRef}
        />
        {onButton && (
            <CommonBtn onClick={handleBtnClick} disabled={!onButton} width='122px'>
                {props.name === "username" ? "중복확인" : "인증"}
            </CommonBtn>
        )}
        {value !== "" && error !== "" ? <S.ErrorMessage>{error}</S.ErrorMessage> : null}
    </S.CommonInput>

  )
}

//회원가집 중 PhoneInput에 들어가는 props의 자료형을 정함.
interface PhoneInputProps{
  value1: string;
  value2: string;
  value3: string;
  onClick?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

function PhoneInput({onChange, value1, value2, value3, error} : PhoneInputProps){
  const selectItems = ["010", "011", "016", "017", "018", "019"];

  return (
    <div>
      <label htmlFor="phone">휴대폰번호</label>
      <div>
        <PhoneSelectInput
          selectItems={selectItems}
          checkItem={value1}
          onChange={onChange}
        />
        <input 
        name="phone2"
        type="text"
        onChange={onChange}
        value={value2}
        />
        <input 
        name="phone3"
        type="text"
        onChange={onChange}
        value={value3}
        />
      </div>
      {error !== "" ? <S.ErrorMessage>{error}</S.ErrorMessage> : null}
    </div>
  )


}



export {CommonInput, PhoneInput, }
/*
input태그에 필요한 것: label, name, type, 버튼이 있는지(onclick), icon이 있는지, 가로가 틀리면 가로길이, onchange, error, value

interface로 props에 대한 자료형을 만든다.

import * as S from "./스타일.ts는 거기 파일을 다 가져옴


*/
