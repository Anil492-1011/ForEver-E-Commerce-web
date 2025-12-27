import React, { useContext } from "react";
import Heading from "../Component/Heading";
import { AppContext } from "../Context/AppContext";


const Order = () => {
  const {products} =useContext(AppContext)
  return (
    <div className="border-t pt-6">
      <div className="text-2xl">
        <Heading text1="MY" text2="ORDER" />
      </div>
      <div className=" ">
        { products.slice(1,4).map((item , index)=>(
          <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} className="w-16 sm:w-20"></img>
                <div >
                  <p className="sm:text-base font-medium">{item.name}</p>
                </div>
                <div className=" items-center mt-1 text-base text-gray-700">
                  <p>{item.price}</p>
                  <p>quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-1">Date <span></span></p>
                <p className="mt-1">Payment: <span className="text-gray-400">COD</span></p>
                  
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Order;
