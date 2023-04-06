import React from 'react';
import * as S from "./ChangeUsertypeBtnStyle";
import {setJoinUserType} from "../../../features/joinSlice"

interface ChangeUsertypeBtnProps {
  type: string;
  usertype: string | undefined;

}

export default function ChangeUsertypeBtn({usertype, type, ...props} : ChangeUsertypeBtnProps) {

  const handleToggleBtn = (usertype : string , type : string) => {

      if(type === "login"){
        
      }else{
        setJoinUserType(usertype);
      }
  }

  return (
    <S.ToggleBtnWrapper>
      <S.ToggleBtn 
        value={usertype === "BUYER" ? "on" : "off"}
        usertype={usertype}
        onClick={() => handleToggleBtn("BUYER", type)}
      >
        {type === "login" ? "구매회원 로그인" : "구매회원가입"  }
      </S.ToggleBtn >

      <S.ToggleBtn 
        value={usertype !== "BUYER" ? "on" : "off"}
        usertype={usertype}
        onClick={() => handleToggleBtn("SELLER", type)}
      >
        {type === "login" ? "판매회원 로그인" : "판매회원가입"  }
      </S.ToggleBtn >
    </S.ToggleBtnWrapper>
  )
}
