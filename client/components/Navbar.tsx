'use client'

import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/logo.png'
import Modal from './Modal'
import Provider from '@/app/Providers'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='p-3 flex border-b justify-around'>
      <div className='w-'>
        <Image src={logo} alt='Aventura Compartida Logo' width={100} />
      </div>
      <div className='hidden md:flex'>
        <ul className='flex gap-3 text-zinc-950 font-semibold '>
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
          className='bg-green-500 text-white font-semibold rounded-lg p-2 hover:bg-white hover:text-green-700 hover:border-green-700 border'
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
