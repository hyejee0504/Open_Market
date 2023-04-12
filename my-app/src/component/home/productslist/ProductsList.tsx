import React, { useEffect, useState } from 'react';
import * as S from "./ProductsListStyle"
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";
import {getAllProducts, fetchGetProducts} from "../../../features/productsSlice";
import PagenationBtn from '../../common/pagenationBtn/PagenationBtn';
import ProductCard from '../productcard/ProductCard';



export default function ProductsList() {

    const dispatch = useAppDispatch();

    const products = useAppSelector(getAllProducts);
    // const pageNumber = useAppSelector(getPageNumber);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchGetProducts(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    
    


  return (
        <>
            <S.ProductsLists>
                {products?.map((product) => (
                    <ProductCard key={product.product_id} product={product} /> )
                )}
    
                
    
            </S.ProductsLists>
            <PagenationBtn></PagenationBtn>
        </>
  )
}
