import React from 'react';
import * as S from "./ArrowModalStyle";
import { logout } from '../../../features/loginSlice';
import { useAppDispatch } from '../../../hook/hooks';
import { useNavigate } from 'react-router-dom';


interface ArrowModalProps{
    on?: boolean;
}
export default function ArrowModal({on}: ArrowModalProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  return (
    <S.ArrowList on={on}>
        <li>
            <S.ArrowBtn>마이페이지</S.ArrowBtn>
        </li>
        <li>
            <S.ArrowBtn onClick={handleLogout}>로그아웃</S.ArrowBtn>
        </li>
    </S.ArrowList>
   
  )
}
