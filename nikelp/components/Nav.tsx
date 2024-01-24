import React from 'react'
import Image from "next/image";
import { navLinks } from '@/constants';
import headerLogo from '@/public/images/header-logo.svg';
import  hamburger  from '@/public/icons/hamburger.svg'

const nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex items-center justify-between max-container'>
            <a href="/">
                <img 
                    src={headerLogo} 
                    alt="Logo"
                    height={130}
                    width={30} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                    <a href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray">
                        {item.label}
                    </a>
                    </li>
                
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                    <img
                     src={hamburger} 
                     alt="hamburger" 
                     height={25}
                     width={25}/>
                </div>

        </nav>
    </header>
  )
}

export default nav