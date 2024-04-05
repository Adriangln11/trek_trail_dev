import { MouseEventHandler } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import logo from '../public/logo.svg'

interface ModalProps {
  open?: boolean
  close?: MouseEventHandler
}

export const Modal = ({
  open,
  close,
}: {
  open: boolean
  close: MouseEventHandler
}) => {
  const { data: session } = useSession()
  if (!open) return null
  return (
    <div
      tabIndex={-1}
      className=' fixed z-50 p-5 inset-y-0 inset-x-0 overflow-y-hidden backdrop-blur-sm flex justify-center items-center '
    >
      <div className=''>
        <button
          onClick={close}
          type='button'
          className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-red-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center my-2'
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Cerrar modal</span>
        </button>
        <div className='p-16 bg-slate-100 border-2 border-slate-300 rounded-lg w-full'>
          <figure>
            <Image
              src={logo}
              alt='Logo de Aventura Compartida'
              width={100}
              priority={true}
              className='m-auto'
            />
          </figure>
          <form className='space-y-4 max-w-lg' action='#'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-slate-800 '
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 outline outline-1 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-2 block w-full p-2.5'
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-slate-800'
              >
                Contraseña
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 outline outline-1 outline-blue-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-2 block w-full p-2.5 '
                required
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50  focus:ring-blue-300 '
                    required
                  />
                </div>
                <label
                  htmlFor='remember'
                  className='ms-2 text-sm font-medium text-slate-800'
                >
                  Recordarme
                </label>
              </div>
              <a
                href='#'
                className='text-sm text-blue-700 hover:underline dark:text-blue-500'
              >
                Olvidaste tu contraseña?
              </a>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-500 hover:bg-white border-2 hover:border-blue-500 hover:text-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => signIn()}
              type='submit'
              className='w-full text-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 border-red-500 hover:bg-white  flex justify-center relative
              '
            >
              <i className='absolute left-4 top-1/2 -translate-y-1/2'>
                <FcGoogle />
              </i>
              Iniciar sesión con Google
            </button>
            <div className='text-sm font-medium text-gray-700 '>
              No tienes cuenta?{' '}
              <a
                href='#'
                className='text-blue-700 hover:underline dark:text-blue-500'
              >
                Crear cuenta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
