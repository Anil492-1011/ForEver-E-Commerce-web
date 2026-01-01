import React, { useMemo } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';
import { useState } from 'react';

const BestSeller = () => {


  const [bestSellers, setBestSellers] = useState([]);
 
  const fetchBestSellers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_CLIENT_URL}/api/product/list`);
      if (response.data?.success) {
        const allProducts = response.data.products;
        const bestSellerProducts = allProducts.filter((product) => product.bestseller === true).slice(0, 5);
        setBestSellers(bestSellerProducts);
      }
    }
    catch (error){
      console.error("error when fetch Best Seller Product", error);

    }
  };
  useMemo(() => {
    fetchBestSellers();
  }, []); 


 
  return (
    <div className='my-12 px-4 md:px-8 lg:px-16'>
      <h2 className='prata-regular text-3xl text-center my-8'>
        <span className='text-gray-500'>Best</span> Seller
      </h2>

      <p className='text-center w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 my-8'>
        Explore our most loved products, trusted and chosen by customers for their superior quality and timeless appeal.
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {
          bestSellers.map((product, index) => (
            <ProductItem  key={index} id={product._id} product={product}/>
          ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
