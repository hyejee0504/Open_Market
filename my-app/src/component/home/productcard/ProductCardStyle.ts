import styled from "styled-components";
const ProductCardWrapper = styled.li`
    &:hover{
        cursor: pointer;
    }
`
const Thumbnailimg = styled.div<{url:string}>`
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid var(--color-grey);
    border-radius: 10px;
    background: ${({url}) => (`url(${url})no-repeat`)};
    background-size: cover;
    div{
        display: none;
    }
    &:hover{
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.2);
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        div{
            display: block;
            display: flex;
            width: 100%;
            height: 100%;
            z-index:49;
            align-items: center;
            justify-content: center;
            align-content: center
            
        }
    }
`

const CartBtn = styled.button`
    z-index:50;
    background-color: var(--color-white);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transform: scale(1.1);
      }

`
const ProductCardTxtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`
const StoreNameTxt = styled.p`
    color: var(--color-darkGrey);
    font-size: 16px;
    line-height: 22px;
`

const ProductNameTxt = styled.h3`
    font-size: 18px;
    line-height: 22px;
`

const ProductPriceTxt = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    &::after{
        content: "원";
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-left: 3px;
    }
`

export{Thumbnailimg, StoreNameTxt, ProductNameTxt, ProductPriceTxt, ProductCardTxtWrapper, ProductCardWrapper, CartBtn}