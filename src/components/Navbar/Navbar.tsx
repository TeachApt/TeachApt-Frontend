import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='w-full bg-white'>
        <div className='mx-auto px-16 py-6 flex items-center justify-between'>
            <div>
                <Image src="/Logo.png" alt="Logo" width={150} height={40} />
            </div>

            <nav className='hidden md:flex gap-12 text-black font-lg text-xl'>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </nav>
            
        </div>
    </header>
    
  )
}
