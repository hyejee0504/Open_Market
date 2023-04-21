import styled from "styled-components";

const ProductWrapper = styled.section`
    display: grid;
  grid-template-columns: 1fr 1fr;
    gap: 50px;
`
const ImgWrapper = styled.div`
    width: 100%;
    max-height: 600px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

const DetailWrapper = styled.div`
    width: 100%;
`

const InfoWrapper = styled.div`
    margin-bottom: 138px;
`

const ProductImg = styled.img`

`
const ProductStoreName = styled.a`
    font-size: 18px;
    line-height: 23px;
    color: var(--color-darkGrey);
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
`

const ProductName = styled.strong`
    display: block;
    margin: 16px auto 20px;
    font-size: 36px;
    line-height: 45px;
`

const ProductPrice = styled.p`
    font-size: 36px;
    line-height: 45px;
    font-weight: 700;
    &::after{
        content: "원";
        font-size: 18px;
        line-height: 23px;
        margin-left: 5px;
    }
  
`

const ShipInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 3px solid var(--color-grey);
`

const Shipping = styled.p`
    font-size: 16px;
    color: var(--color-darkGrey);
`

const ProductStock = styled.p`
    font-size: 16px;
    color: var(--color-red);
`

const TotalPriceTxt = styled.p`

`

export {ProductStoreName, ProductName, ProductPrice, ProductImg, Shipping, ProductStock, TotalPriceTxt, ImgWrapper, ProductWrapper, DetailWrapper, InfoWrapper, ShipInfoWrapper}