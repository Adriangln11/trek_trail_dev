'use client'

import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/logo.svg'
import Modal from './Modal'
import Provider from '@/app/Providers'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='p-3 flex border-b justify-around '>
      <div className='w-'>
        <Image src={logo} alt='Aventura Compartida Logo' width={100} />
      </div>
      <div className='hidden md:flex'>
        <ul className='flex gap-3  font-semibold text-teal'>
          <li className='inline-flex items-center hover:text-green-700'>
            <a href='/'>Inicio</a>
          </li>
          <li className='inline-flex items-center hover:text-green-700'>
            <a href='/explore'>Explorar</a>
          </li>
          <li className='inline-flex items-center hover:text-green-700'>
            <a href='/post'>Compartir</a>
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <button
          onClick={() => setIsOpen(true)}
          className='bg-teal text-white font-semibold rounded-full p-3 hover:bg-white hover:text-teal hover:border-teal border'
        >
          Iniciar sesion
        </button>
        <Provider>
          <Modal open={isOpen} close={() => setIsOpen(false)} />
        </Provider>
      </div>
    </nav>
  )
}

export default Navbar
