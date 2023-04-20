
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
`

const NextBtn = styled.button`
`

export {PageNumberBtn, PrevBtn, NextBtn}