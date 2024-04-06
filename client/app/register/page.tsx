'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

import logoNoText from '@/public/logoNoText.svg'

const RegisterPage = () => {
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
          <figcaption>Registrate</figcaption>
        </figure>
        <form className='space-y-4 max-w-lg mx-auto my-5' action='#'>
          <div className='md:flex gap-3'>
            <div className='md:w-1/2'>
              <label
                htmlFor='firstName'
                className='block mb-2 text-sm font-medium text-slate-800 '
              >
                Nombres
              </label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                className='bg-gray-50 outline outline-1 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-2 block w-full p-2.5'
                placeholder='Joe'
                required
              />
            </div>
            <div className='md:w-1/2'>
              <label
                htmlFor='lastName'
                className='block mb-2 text-sm font-medium text-slate-800 '
              >
                Apellidos
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                className='bg-gray-50 outline outline-1 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-2 block w-full p-2.5'
                placeholder='Doe'
                required
              />
            </div>
          </div>
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

          <button
            type='submit'
            className='w-full text-white bg-blue-500 hover:bg-white border-2 hover:border-blue-500 hover:text-blue-500 font-medium rounded-lg px-5 py-2.5 text-center text-lg'
          >
            Crear cuenta
          </button>
          <button
            onClick={() => signIn()}
            type='button'
            className='w-full text-red-500 font-medium rounded-lg text-lg px-5 py-2.5 text-center border-2 border-red-500 hover:bg-white  flex justify-center gap-5 items-center
              '
          >
            <i className=' text-xl'>
              <FcGoogle />
            </i>
            <p>Iniciar con Google</p>
          </button>
          <div className='text-sm font-medium text-gray-700 '>
            Ya tienes cuenta?
            <Link
              href='/login'
              className='text-blue-700 hover:underline dark:text-blue-500 mx-2'
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage
