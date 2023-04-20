import styled from "styled-components";

interface ToggleBtnProps {
    usertype?: string,
    value: string,
}

export const ToggleBtnWrapper = styled.div`
    display: flex;
`

export const ToggleBtn = styled.button<ToggleBtnProps>`
    display: inline-block;
    position: relative;
    width: 275px;
    height: 60px;
    border: 1px solid var(--color-grey);
    border-radius: 10px 10px 0 0;
    border-bottom: 0;
    background-color: ${({value}) => (value === "off" ? "var(--color-brightGrey)" : "var(--color-white)")};
    
    &:after{
        content: "abc";
        display: inline-block;
        position: absolute;
        color: transparent;
        display: inline-block;
        width: 274px;
        height: 20px;
        background: ${({value}) => (value === "off" ? "transparent" : "var(--color-white)")};
        position: absolute;
        top: 50px;
        left: ${({usertype}) => (usertype === "SELLER" ? "-0.5px" : "-0.5px")};
    
        z-index: ${({value}) => (value === "off" ? "-100" : "50")};
        border-left: ${({usertype, value}) => (usertype === "BUYER" && value === "on" ? "1px solid var(--color-grey)" : "")};
        border-right: ${({usertype, value}) => (usertype === "SELLER" && value === "on" ? "1px solid var(--color-grey)" : "")};
    }


`