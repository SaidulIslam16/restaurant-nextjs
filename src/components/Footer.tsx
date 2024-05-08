import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between lg:p-10 p-5'>
      <Link href='/' className='uppercase font-bold text-xl text-red-500'>Aperitivo</Link>
      <p>2024 All Right Researsed</p>
    </div>
  )
}
