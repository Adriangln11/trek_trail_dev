'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FcMenu } from 'react-icons/fc'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '../public/logo.svg'
import HamburgerModal from './HamburgerModal'

export const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='p-3 flex border-b justify-between '>
      <div className='flex gap-10'>
        <Link href='/' className='w-'>
          <Image src={logo} alt='Aventura Compartida Logo' width={100} />
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex gap-3  font-semibold text-teal'>
            <li className='inline-flex items-center hover:text-green-500 '>
              <Link
                href='/'
                className={` ${pathname == '/' ? 'text-green-500' : ''}`}
              >
                Inicio
              </Link>
            </li>
            <li className='inline-flex items-center hover:text-green-500'>
              <Link href='/explore'>Explorar</Link>
            </li>
            <li className='inline-flex items-center hover:text-green-500'>
              <Link href='/post'>Compartir</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          pathname == '/login' || pathname == '/register'
            ? 'hidden'
            : 'flex items-center'
        }`}
      >
        <Link
          href='/login'
          className='bg-teal text-white font-semibold rounded-full p-4 hover:bg-white hover:text-teal hover:border-teal border hidden md:block'
        >
          Iniciar sesion
        </Link>
      </div>
      <button className=' md:hidden' onClick={() => setIsOpen(true)}>
        <FcMenu className=' text-5xl' />
      </button>
      <HamburgerModal open={isOpen} close={() => setIsOpen(false)} />
    </nav>
  )
}

export default Navbar
