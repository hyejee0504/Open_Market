import React from 'react';
import { Product } from '../../../features/productsSlice';
import { useNavigate, Link } from "react-router-dom";
import * as S from "./ProductCardStyle";
import { SVGIcon } from '../../icon/SVGIcon';

export default function ProductCard({product} : {product: Product}) {
    const navigate = useNavigate();


    const handleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("카트에 담기");
    }
    
  return (
    <S.ProductCardWrapper onClick={() => navigate(`products/${product.product_id}`)}>
          <S.Thumbnailimg url={product.image}>
            <div>
                <S.CartBtn type='button' onClick={handleCart}>
                    <SVGIcon id='icon-shopping-cart-2' width= "60px" height="60px" />
                </S.CartBtn>
            </div>
          </S.Thumbnailimg>
          <S.ProductCardTxtWrapper>
            <S.StoreNameTxt>{product.store_name}</S.StoreNameTxt>
            <S.ProductNameTxt>{product.product_name}</S.ProductNameTxt>
            <S.ProductPriceTxt>{product.price.toLocaleString()}</S.ProductPriceTxt>
          
          </S.ProductCardTxtWrapper>          
    </S.ProductCardWrapper>
  )
}
