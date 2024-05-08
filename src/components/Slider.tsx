"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Fulfill your comfort food cravings.",
    image: '/slide1.png'
  },
  {
    id: 2,
    title: "Feel the joy of mouthwatering food.",
    image: '/slide2.png'
  },
  {
    id: 3,
    title: "Fast and yummy. Good for your tummy.",
    image: '/slide3.jpg'
  }
]

export default function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    const interval = setInterval(
      ()=>setCurrentSlide((prev)=>(prev === data.length-1? 0: prev+1)),
      4000
    );
    return ()=> clearInterval(interval);
  },
  [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row'>
      
      {/* Text Container */}

      <div className='flex-1 flex flex-col justify-center items-center gap-8 text-red-500 bg-fuchsia-50 p-5'>
        <h1 className='text-4xl uppercase text-center font-bold md:text-6xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white px-4 py-2 rounded-xl'>Order Now</button>
      </div>

      {/* Image Container */}

      <div className='flex-1 relative w-full'>
        <Image src={data[currentSlide].image} alt='slider image' fill className='object-cover'/>
      </div>

    </div>
  )
}
