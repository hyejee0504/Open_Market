import React from 'react';
import * as S from "./ChangeUsertypeBtnStyle";

interface ChangeUsertypeBtnProps {
  type: string;
  usertype: string | undefined;

}

export default function ChangeUsertypeBtn({usertype, type, ...props} : ChangeUsertypeBtnProps) {
  return (
    <>
      <S.ToggleBtn 
        value={usertype === "BUYER" ? "on" : "off"}
      
        
  
      >
        {type === "login" ? "구매회원 로그인" : "구매회원가입"  }
      </S.ToggleBtn >
      <S.ToggleBtn 
        value={usertype !== "BUYER" ? "on" : "off"}
        usertype={usertype}
  
      >
        {type === "login" ? "판매회원 로그인" : "판매회원가입"  }
      </S.ToggleBtn >
    </>
  )
}
