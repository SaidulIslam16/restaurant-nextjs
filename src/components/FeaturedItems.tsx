import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function FeaturedItems() {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single item */}
        {featuredProducts.map(item=>(
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] md:h-[90vh]'>
          {/* Image Container */}
          {
            item.img&&
          <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300'>
            <Image src={item.img} alt='' fill className='object-contain'/>
          </div>
          }
          {/* Text Container */}
          <div className='flex-1 flex flex-col items-center text-center justify-center gap-4 '>
            <h1 className='text-xl md:text-2xl font-bold uppercase'>{item.title}</h1>
            <p className='p-2 md:p-4'>{item.desc}</p>
            <h3 className='text-xl uppercase font-bold'>${item.price}</h3>
            <button className='bg-red-500 text-white p-2 rounded-md w-fit'>Add to Cart</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
