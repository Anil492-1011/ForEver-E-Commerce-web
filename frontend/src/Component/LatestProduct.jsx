import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';


const LatestProduct = () => {
    
    const [latestProduct, setLatestProduct]= useState([]);
    const [limit, setLimit]= useState(10);



    const fetchLatestProduct = async ()=>{
        console.log("${import.meta.env.URL",import.meta.env.URL);

        try{
            const response =await axios.get(`${import.meta.env.VITE_CLIENT_URL}/api/product/list?limit=${limit}`)
             console.log( "latest product response", response);
            if(response.data?.success){
                const Data =response.data.products
                setLatestProduct(Data);
            }

        }catch(error){
            console.error("error when fetch latest Product", error);

        }
    }
    
    useMemo(() => {
        fetchLatestProduct();
      
    },[]);
  return (
    <div className='my-12 px-4 md:px-8 lg:px-16'>
        
        <h2 className='prata-regular text-3xl text-center prata-bold my-8'> <span className='prata-regular  text-gray-500'>Latest</span> Collection</h2>
        <p className='text-center w-3/4 m-auto text-xs sm:text-sm md:textbase text-gray-600 my-8'>Discover our newest arrivals, crafted with premium quality and modern designs.
Each piece is carefully selected to match the latest trends while ensuring comfort, durability, and style for every occasion.</p>     
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y'>
            {
                latestProduct.map((product, index)=>(
                    <ProductItem key={index} id={product._id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestProduct
