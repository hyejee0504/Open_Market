import styled from "styled-components";
import searchImg from "../../../asset/icon/search.png"

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 320px;
    gap: 420px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`

const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    gap: 30px;
`

const SearchInput = styled.input`
    width: 400px;
    height: 46px;
    border: 2px solid var(--color-main);
    border-radius: 50px;
    padding-left: 20px;
    position: relative;
`

const SearchBtn = styled.button`
position: absolute;
right: 20px;
top: 8px;
width: 28px;
height: 28px;
background: url(${searchImg}) no-repeat center;
`

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    

`

const IconTxt = styled.p`
    color: var(--color-darkGrey);
    font-size: 12px;

`

const IconWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    &:hover{
        cursor: pointer;
    }
`

const SellerCenterBtn = styled.button`
margin-left: 30px;
width: 165px;
height: 55px;
background: var(--color-main);
color: var(--color-white);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`

const BuyerWrapper = styled.div`
    display: flex;
    gap: 25px;
`

export {SearchInput, SearchBtn, SearchWrapper, UserWrapper, IconTxt, IconWrapper, SellerCenterBtn, HeaderWrapper, BuyerWrapper}