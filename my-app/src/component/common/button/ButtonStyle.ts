import styled from "styled-components";

interface CommonBtnProps{
    icon?: string;
    width?: string;
    color?: string;



}

const CommonBtn = styled.button<CommonBtnProps>`
    width: ${({width}) => (width ? width : "100%")};
`;

export {CommonBtn}