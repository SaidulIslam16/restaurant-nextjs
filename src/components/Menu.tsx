"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

export default function Menu() {

    const [open, setOpen] = useState(false);

    const links = [
        {id: 1, title: "HomePage", url:"/" },
        {id: 2, title: "Menu", url:"/menu" },
        {id: 3, title: "Working Hours", url:"/" },
        {id: 4, title: "Contact", url:"/" },
    ]

    const user = false;
  return (
    <div className='cursor-pointer'>
        {!open? 
        <Image 
            src="/open.png" 
            alt='' height={20} 
            width={20} 
            onClick={()=>setOpen(true)}/>
        :
        <Image 
            src="/close.png" 
                alt='' 
                height={20} 
                width={20} 
                onClick={()=>setOpen(false)}/>
        }
        {open&&<div className='bg-red-500 absolute text-white left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 w-full z-10'>
            {
                links.map(link=><Link href={link.url} key={link.id} onClick={()=>setOpen(false)}>{link.title}</Link>)
            }
            {
              !user? <Link href='/login' onClick={()=>setOpen(false)}>Login</Link>:
                <Link href='/orders' onClick={()=>setOpen(false)}>Orders</Link>
            }
            <Link href='/cart' onClick={()=>setOpen(false)}>
                <CartIcon/>
            </Link>
            
        </div>}
    </div>
  )
}
