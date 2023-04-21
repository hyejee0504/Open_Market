import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { getProductID } from '../../../features/productsSlice';
import { useAppSelector } from '../../../hook/hooks';
import * as S from "./ProductDetailStyle";
import { CommonBtn } from '../../../component/common/button/ButtonStyle';
import AmountBtn from '../../../component/common/amountbutton/AmountBtn';




export default function ProductDetail() {
  const { state} = useLocation();
  const [productID, setProductID] = useState(0);
  const [selectedCount, setSelectedCount] = useState(1);

  const productDetail = useAppSelector((state) => getProductID(state, Number(productID)));

  useEffect(() => {
    setProductID(state);
  }, [state])

  const getProductCount = (res: number) => {
    setSelectedCount(res);
  };
   
  return (
    <>


      {productDetail &&
        <S.ProductWrapper>
          <S.ImgWrapper>
            <S.ProductImg src={productDetail.image} alt="상품 이미지" />
          </S.ImgWrapper>
         
          <S.DetailWrapper>
            <S.InfoWrapper>
              <S.ProductStoreName>{productDetail.store_name}</S.ProductStoreName>
              <S.ProductName>{productDetail.product_name}</S.ProductName>
              <S.ProductPrice>{productDetail.price.toLocaleString()}</S.ProductPrice>
            </S.InfoWrapper>
            <S.ShipInfoWrapper>
              <S.Shipping>{productDetail.shipping_method === "PARCEL" ? "직접배송" : "택배배송" 
              } / {productDetail.shipping_fee === 0 ? "무료배송" : `배송비 ${productDetail.shipping_fee.toLocaleString()} 원`}</S.Shipping>
              <S.ProductStock> * 재고 : {productDetail.stock} 개</S.ProductStock>
            </S.ShipInfoWrapper>
            <AmountBtn getCount={getProductCount} stock={productDetail.stock} />
            <S.TotalPriceTxt>총 상품 금액</S.TotalPriceTxt>
  
            <CommonBtn width='
416px'>바로 구매</CommonBtn>
            <CommonBtn width='
200px'color="darkGrey">장바구니</CommonBtn>
          </S.DetailWrapper>
          

        </S.ProductWrapper>
      }
    </>
    
  )
}
