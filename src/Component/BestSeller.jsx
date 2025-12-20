import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductItem from './ProductItem';
 

const BestSeller = () => {
  const { products } = useContext(AppContext);

  const bestSellers = products?.filter((product) => product.bestseller === true).slice(0, 5);

  console.log("Best Sellers:", bestSellers); // Debugging line
  return (
    <div className='my-12 px-4 md:px-8 lg:px-16'>
      <h2 className='prata-regular text-3xl text-center my-8'>
        <span className='text-gray-500'>Best</span> Seller
      </h2>

      <p className='text-center w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 my-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {bestSellers.map((product, index) => (
          <ProductItem   key={index} product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
