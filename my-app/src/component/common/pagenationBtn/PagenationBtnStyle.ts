
import styled from "styled-components";

const PageNumberBtn = styled.button<{on:string}>`
    background-color: ${({on}) => (on === "on" ? "rgb(176, 104, 249, 0.4)" : "rgba(100, 100, 100, 0.1)")};
    width: 50px;
    height: 50px;
    font-size: 20px;
    border-radius: 50%;
    margin: 10px;
`
const PrevBtn = styled.button`
    width: 50px;
    height: 50px;
    &:hover{
        background-color: rgb(176, 104, 249, 0.4);
        border-radius: 50%;
        &:disabled {
            background-color: rgba(100, 100, 100, 0);
  }
    }
    &:disabled {
    cursor: default;
  }
`

const NextBtn = styled.button`
`

const PagenationBtnWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
`

export {PageNumberBtn, PrevBtn, NextBtn, PagenationBtnWrapper}