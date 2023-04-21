import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import * as S from "./ModalStyle";
import { closeModal, checkModalText } from '../../../features/modalSlice';
import { SVGIcon } from '../../icon/SVGIcon';
import { CommonBtn } from '../button/ButtonStyle';
import { useAppDispatch, useAppSelector } from '../../../hook/hooks';

interface ModalProps{
    children: React.ReactNode;
    onClickYesBtn: () => void;
}


function Modal({children, onClickYesBtn} : ModalProps) {

    const dispatch = useAppDispatch();
    const backgroundRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const BtnText = useAppSelector(checkModalText);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "unset";
        };
      }, []);

    const onClickBackground = (e : React.MouseEvent<HTMLElement>) => {
        if(backgroundRef.current === e.target){
            dispatch(closeModal());
        }
    }

    const handleYesBtn = () => {
        onClickYesBtn();
        dispatch(closeModal());
      };


  return ReactDOM.createPortal(
    <S.ModalBackground ref={backgroundRef} onClick={onClickBackground}>
        <S.ModalWrapper>
            <S.CloseBtn type="button" onClick={() => dispatch(closeModal())}>
              <SVGIcon id='icon-delete' />
            </S.CloseBtn>
            <S.ModalText>{children}</S.ModalText>
            <S.ModalBtnWrapper>
                <CommonBtn
                 width="100px"
                 onClick={() => dispatch(closeModal())}
                 >
                    {BtnText.no}
                </CommonBtn>
                <CommonBtn
                width="100px"
                onClick={handleYesBtn}
                >
                    {BtnText.yes}
                </CommonBtn>
            </S.ModalBtnWrapper>
        </S.ModalWrapper>
    </S.ModalBackground>,
    document.getElementById("portal")!
  );
}

export default Modal;