import styled from "styled-components";

interface CommonBtnProps{
    icon?: string;
    width?: string;
    color?: string;
    disabled?: boolean;


}

const CommonBtn = styled.button<CommonBtnProps>`
    display: inline-block;
    width: ${({width}) => (width ? width : "480px")};
    background-color: var(--color-main);
    color: var(--color-white);
    height: 54px;
    border-radius: 5px;
    &:disabled{
        background-color: var(--color-grey);
        cursor: default;
    }
`;

export {CommonBtn}