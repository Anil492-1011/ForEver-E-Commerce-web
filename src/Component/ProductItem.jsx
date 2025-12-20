import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ product}) => {

    const {currency}=useContext(AppContext);

  return (
   
        <Link to={`/product/${product.id}`} className='text-gray-500 cursor-pointer'>
        <div className='overflow-hidden'>
            <img src={product.image[0]} alt={product.name} className='hover:scale-110 transition ease-in-out '/>
        </div>
         
           <p className='pt-3 pb-1 text-sm'>{product.name}</p>
              <p className='text-sm font-medium'>{currency} {product.price}</p>
         </Link>
   
  )
}

export default ProductItem
