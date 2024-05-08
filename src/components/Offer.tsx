import Image from 'next/image'
import React from 'react'
import CounDown from './CounDown'

export default function Offer() {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* Text Container */}
      <div className='flex-1 text-white flex flex-col justify-center items-center text-center gap-5 px-5'>
        <h1 className='text-4xl font-bold md:text-6xl'>
          Delicious Burger & French Fry
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, explicabo.</p>
        <CounDown/>
        <button className='bg-red-500 px-5 py-2 rounded-md'>Order Now</button>
      </div>
      {/* Image Container */}
      <div className='relative flex-1 w-full md:h-full'>
        <Image src='/offerProduct.png' alt='offer product' fill className='object-contain'/>
      </div>
    </div>
  )
}
