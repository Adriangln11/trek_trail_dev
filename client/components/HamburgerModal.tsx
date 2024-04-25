import Link from 'next/link'
import Image from 'next/image'
import { EventHandler, MouseEventHandler, useEffect, useRef } from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { RiTwitterXFill, RiCloseFill } from 'react-icons/ri'
import logo from '@/public/logo.svg'
import { signOut, useSession } from 'next-auth/react'
import Links from './Links'

interface ModalProps {
  open?: boolean
  close?: MouseEventHandler
}

export const HamburgerModal = ({
  open,
  close,
}: {
  open: boolean
  close: MouseEventHandler
}) => {
  const { data: session } = useSession()

  const modalRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (e: MouseEvent): void => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      // @ts-ignore
      close(e)
    }
  }
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      className='fixed top-0 right-0 bottom-0 z-50  w-3/4 backdrop-blur-md flex  rounded-lg bg-white/50'
    >
      <div className='w-full flex p-5 justify-between'>
        <div>
          <button
            onClick={close}
            type='button'
            className='end-2.5 text-white bg-gray-500 hover:bg-gray-200 hover:text-red-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center '
          >
            <RiCloseFill />
            <span className='sr-only'>Cerrar modal</span>
          </button>
        </div>
        <div className='w-3/4 flex flex-col items-end'>
          <figure>
            <Image
              src={logo}
              alt='Logo de Aventura Compartida'
              width={100}
              priority={true}
              className='mb-5'
            />
          </figure>
          <div>
            <div className=''>
              <ul className='flex flex-col  divide-y-2 font-semibold items-center text-black'>
                <li className='inline-flex items-center hover:text-light-green py-3'>
                  <Link href='/' className='' onClick={close}>
                    Inicio
                  </Link>
                </li>
                <li className='inline-flex items-center hover:text-light-green py-3'>
                  <Link href='/explore' onClick={close}>
                    Explorar
                  </Link>
                </li>
                <li className='inline-flex items-center hover:text-light-green py-3'>
                  <Link href='/post' onClick={close}>
                    Compartir
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-10'>
            {session?.user ? (
              <div>
                {' '}
                <Link
                  href='/profile'
                  className=' font-semibold hover:text-light-green'
                >
                  Perfil
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  onClick={close}
                  href='/login'
                  className=' font-semibold hover:text-light-green'
                >
                  Iniciar sesion
                </Link>
              </div>
            )}
          </div>

          <div className='mt-auto flex flex-col justify-end'>
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className=' font-semibold hover:text-red-500 text-end'
              >
                Salir
              </button>
            ) : (
              ''
            )}

            <Links />
          </div>
          <div className='text-gray-500 font-bold text-center text-sm'>
            @Trek Trails
          </div>
        </div>
      </div>
    </div>
  )
}

export default HamburgerModal
