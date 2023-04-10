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
    width: 275px;
    height: 60px;
    border: 1px solid var(--color-grey);
    border-radius: 10px 10px 0 0;
    border-bottom: 0;
    background: ${({value}) => (value === "off" ? "var(--color-brightGrey)" : "var(--color-white)")};
    
    /* &:after{
        content: "abc";
        color: transparent;
        display: inline-block;
        width: ${({value}) => (value === "off" ? "0" : "275px")};
        height: ${({value}) => (value === "off" ? "0" : "20px")};
        background: ${({value}) => (value === "off" ? "transparent" : "var(--color-grey)")};
        position: absolute;
        /* top: ${({value}) => (value === "off" ? "0" : "60px")}; */
        /* left: ${({value, usertype}) => (value === "on" && usertype === "SELLER" ? "275px" : "0px")}; */
    } */


`