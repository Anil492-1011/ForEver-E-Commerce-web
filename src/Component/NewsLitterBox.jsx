import React from 'react'

const NewsLitterBox = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-center">
        Subscribe now & get 20% off
      </h1>

      <p className="text-center max-w-2xl text-xs sm:text-sm md:text-base text-gray-600 mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

     <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type='email' placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required></input>
        <button type='sumbit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
     </form>
      
   
    </div>
  )
}

export default NewsLitterBox
