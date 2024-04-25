'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '../public/logo.svg'
import HamburgerModal from './HamburgerModal'
import Avatar from './Avatar'
import { useSession } from 'next-auth/react'

export const Navbar = () => {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='py-3 px-5 flex border-b-2 justify-between font-aeonik'>
      <div className='flex gap-10'>
        <Link href='/' className='w-'>
          <Image src={logo} alt='Aventura Compartida Logo' width={100} />
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex gap-3  font-medium'>
            <li className='inline-flex items-center hover:text-light-green '>
              <Link
                href='/'
                className={` ${pathname == '/' ? 'text-light-green' : ''}`}
              >
                Inicio
              </Link>
            </li>
            <li className='inline-flex items-center hover:text-light-green'>
              <Link
                href='/profile'
                className={` ${
                  pathname == '/profile' ? 'text-light-green' : ''
                }`}
              >
                Perfil
              </Link>
            </li>
            <li className='inline-flex items-center hover:text-light-green'>
              <Link
                href='/post'
                className={` ${pathname == '/post' ? 'text-light-green' : ''}`}
              >
                Compartir
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {session?.user ? (
        <div className='flex gap-5 items-center'>
          <Link
            href='/reviews'
            className='bg-light-green text-white font-medium rounded-full py-3 px-5 hover:bg-white hover:text-light-green hover:border-light-green border hidden md:block'
          >
            Añadir ruta
          </Link>
          <Avatar />
        </div>
      ) : (
        <div>
          <div
            className={`${
              pathname == '/login' ||
              pathname == '/register' ||
              pathname == '/login/recovery'
                ? 'hidden'
                : 'flex items-center'
            }`}
          >
            <Link
              href='/login'
              className='bg-light-green text-white font-medium rounded-full py-3 px-5 hover:bg-white hover:text-light-green hover:border-light-green border hidden md:block'
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      )}
      <button
        className=' md:hidden text-light-green'
        onClick={() => setIsOpen(true)}
      >
        <HiMenu className=' text-5xl' />
      </button>
      <HamburgerModal open={isOpen} close={() => setIsOpen(false)} />
    </nav>
  )
}

export default Navbar
