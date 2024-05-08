import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

export default function Navbar() {

  const user = false;

  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-10'>
      {/* Left Link */}
      <div className='hidden md:flex justify-between gap-8 items-center flex-1 md:justify-start'>
        <Link href='/'>HomePage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>
      {/* Logo */}
        <Link href='/' className='font-bold text-xl flex-1 text-center'>Aperitivo</Link>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* Right Link */}
      <div className='hidden md:flex justify-between gap-8 items-center flex-1 md:justify-end'>
        <div className='bg-orange-500 flex text-white p-1 rounded-md cursor-pointer md:absolute top-2 r-2 lg:static'>
          <Image src='/phone.png' alt='' height={12} width={18}/>
          <span>1253 6693</span>
        </div>
        {!user?<Link href='/'>Login</Link>:
        <Link href='/menu'>Orders</Link>}
        <Link href='/cart'><CartIcon/></Link>
      </div>
    </div>
  )
}
