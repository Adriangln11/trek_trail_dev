'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FcMenu } from 'react-icons/fc'
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
    <nav className='p-3 flex border-b-2 justify-between font-aeonik'>
      <div className='flex gap-10'>
        <Link href='/' className='w-'>
          <Image src={logo} alt='Aventura Compartida Logo' width={100} />
        </Link>
        <div className='hidden md:flex'>
          <ul className='flex gap-3  font-semibold'>
            <li className='inline-flex items-center hover:text-teal '>
              <Link
                href='/'
                className={` ${pathname == '/' ? 'text-teal' : ''}`}
              >
                Inicio
              </Link>
            </li>
            <li className='inline-flex items-center hover:text-teal'>
              <Link
                href='/explore'
                className={` ${pathname == '/explore' ? 'text-teal' : ''}`}
              >
                Explorar
              </Link>
            </li>
            <li className='inline-flex items-center hover:text-teal'>
              <Link
                href='/post'
                className={` ${pathname == '/post' ? 'text-teal' : ''}`}
              >
                Compartir
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {session?.user ? (
        <Avatar />
      ) : (
        <div>
          <div
            className={`${
              pathname == '/login' || pathname == '/register'
                ? 'hidden'
                : 'flex items-center'
            }`}
          >
            <Link
              href='/login'
              className='bg-teal text-white font-semibold rounded-lg p-3 hover:bg-white hover:text-teal hover:border-teal border hidden md:block'
            >
              Iniciar sesion
            </Link>
          </div>
        </div>
      )}
      <button className=' md:hidden' onClick={() => setIsOpen(true)}>
        <FcMenu className=' text-5xl' />
      </button>
      <HamburgerModal open={isOpen} close={() => setIsOpen(false)} />
    </nav>
  )
}

export default Navbar
