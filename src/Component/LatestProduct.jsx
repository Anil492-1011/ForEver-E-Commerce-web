import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import ProductItem from './ProductItem';

const LatestProduct = () => {
    const {products}= useContext(AppContext);
    const [latestProduct, setLatestProduct]= useState([]);
    
    useEffect(() => {
       setLatestProduct(products.slice(0,10));
    },[]);
  return (
    <div className='my-12 px-4 md:px-8 lg:px-16'>
        
        <h2 className='prata-regular text-3xl text-center prata-bold my-8'> <span className='prata-regular  text-gray-500'>Latest</span> Collection</h2>
        <p className='text-center w-3/4 m-auto text-xs sm:text-sm md:textbase test-gray-600 my-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>     
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y'>
            {
                latestProduct.map((product, index)=>(
                    <ProductItem key={index} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestProduct
