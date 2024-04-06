'use client'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

import { FcGoogle } from 'react-icons/fc'

import logoNoText from '@/public/logoNoText.svg'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <main className='flex h-full  w-full my-2 '>
      <div className=' p-10 h-3/4  w-full '>
        <figure className='text-center font-aeonik font-bold text-3xl'>
          <Image
            src={logoNoText}
            alt='Logo de Aventura Compartida'
            width={150}
            priority={true}
            className='m-auto'
          />
          <figcaption>Accede a tu cuenta</figcaption>
        </figure>
        <form className='space-y-4 max-w-lg m-auto' action='#'>
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
                className='mx-2 text-sm font-medium text-slate-800'
              >
                Recordarme
              </label>
            </div>
            <a
              href='#'
              className='text-sm text-blue-700 hover:underline dark:text-blue-500'
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-500 hover:bg-white border-2 hover:border-blue-500 hover:text-blue-500 font-medium rounded-lg px-5 py-2.5 text-center text-lg'
          >
            Acceder
          </button>
          <button
            onClick={() => signIn()}
            type='submit'
            className='w-full text-red-500 font-medium rounded-lg text-lg px-5 py-2.5 text-center border-2 border-red-500 hover:bg-white  flex justify-center gap-5 items-center
              '
          >
            <i className=' text-xl'>
              <FcGoogle />
            </i>
            <p>Iniciar con Google</p>
          </button>
          <div className='text-sm font-medium text-gray-700 '>
            ¿No tienes cuenta?
            <Link
              href='/register'
              className='text-blue-700 hover:underline dark:text-blue-500 mx-2'
            >
              Registrarme
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default LoginPage
