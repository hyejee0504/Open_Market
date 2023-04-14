import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../component/home/productcard/ProductCard';
import styled from "styled-components";
import { fetchGetSearchProducts, getSearchProducts} from '../../features/productsSlice';
import { useAppSelector, useAppDispatch } from '../../hook/hooks';

const ProductsLists = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 70px;
    padding: 80px 200px;
`

export default function Search() {
    const { state} = useLocation();
    const dispatch = useAppDispatch();

    const searchProducts = useAppSelector(getSearchProducts);

    useEffect (() => {
        dispatch(fetchGetSearchProducts(state));
    },[dispatch, state]);
    
  return (
    <ProductsLists>
    {searchProducts?.map((product, index) => (
        <ProductCard key={index} product={product} /> )
    )}
    </ProductsLists>
    
  )
}
