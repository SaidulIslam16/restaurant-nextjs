import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CartIcon() {
  return (
    <div className='flex items-center gap-2'>
        <div className='relative w-5 h-5'>
            <Image src='/cart.png' alt='' fill/>
        </div>
        <span>
            Cart (3)
        </span>
    </div>
  )
}
