import React from 'react'

const Heading = ({text1, text2}) => {
  return (
     <div className="px-25 my-15 w-full mb-10">
        <div className="inline-flex items-center gap-2">
          <p className="text-2xl text-gray-500">
           {text1} <span className="text-gray-800 font-semibold">{text2}</span>
          </p>
          <span className="w-8 sm:w-12 h-[2px] bg-gray-700"></span>
        </div>
      </div>

  )
}

export default Heading