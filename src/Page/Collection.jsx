import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductItem from '../Component/ProductItem'

const Collection = () => {
    const { products } = useContext(AppContext);
  return (
   <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y'>
            {
                products.map((product, index)=>(
                    <ProductItem key={index} id={product.id} product={product}/>
                ))
            }
        </div>
  )
}

export default Collection
