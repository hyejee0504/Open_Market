import React,  {useState} from 'react';
import * as S from "./CheckBoxInputStyle";
import { SVGIcon } from '../../icon/SVGIcon';

interface CheckBoxInputProps{
    children: React.ReactNode;
    color?: string;
    checked: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckBoxInput({checked, onChange} : CheckBoxInputProps) {

  
  return (
    <S.CheckBoxContainer>
        <S.CheckBox
            checked={checked}
            onChange={onChange}/>
        {/* <S.Box checked={checked}>
            <S.CheckBoxIcon checked={checked} />
            <S.CheckBoxIconFill checked={checked}/>
        </S.Box> */}
            
    </S.CheckBoxContainer>
    
  )
}

export {CheckBoxInput}