import styled from "styled-components";

const FooterWrapper = styled.div`
 
    background: var(--color-brightGrey);
    padding: 50px 320px;
   

`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-grey);
`
const DownWrapper = styled.div`
    margin-top: 30px;

`

const FooterList = styled.ul`
    display: flex;
    gap: 14px;
    height: 14px;
    li{
        display: inline-block;
        border-left: 2px solid var(--color-black);
        padding-left: 15px;
        font-size: 14px;
        &:hover{
            color: var(--color-darkGrey);
            text-decoration: underline;
        }
    }
`

const ShareList = styled.ul`
    display: flex;
    gap: 15px;
`

const CompanyName = styled.h2`
    color: var(--color-darkGrey);
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
`

const CompanyTxt = styled.p`
    color: var(--color-darkGrey);
    font-size: 14px;
    line-height: 24px;
`

export {FooterWrapper, TopWrapper, DownWrapper, FooterList, ShareList, CompanyName, CompanyTxt}