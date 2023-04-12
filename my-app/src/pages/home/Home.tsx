import React from 'react'
import Carousel from '../../component/home/carousel/Carousel';
import ProductsList from '../../component/home/productslist/ProductsList';

export default function Home() {
  return (
      <main>
        <Carousel />
        <ProductsList/>
      </main>
  )
}
