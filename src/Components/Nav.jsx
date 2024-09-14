import React, { useState } from 'react'
import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../Constants'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToogle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className='padding-x py-6 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} 
                alt="Logo"
                width={200}
                height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item,index) => (
                    <li key={index}>
                        <a href={item.href} 
                        className='font-medium font-montserrat leading-none text-slate-gray hover:text-slate-700'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} 
                alt="hamburger" 
                width={25}
                height={25}
                onClick={handleToogle}
                />
            </div>
        </nav>
        <div className={`absolute top-20 left-0 w-full bg-white transition-transform duration-700 ${isOpen ? 'translate-x-0 opacity-100 ' : '-translate-x-full opacity-0'}`}>
                <ul className="flex flex-col gap-4 p-6 items-center">
                    {navLinks.map((item, index) => (
                        <li key={index} className="text-left">
                            <a
                                href={item.href}
                                className="font-medium font-montserrat text-slate-gray hover:text-slate-700"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    </header>
  )
}

export default Nav
