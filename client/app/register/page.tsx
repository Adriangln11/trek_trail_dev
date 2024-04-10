'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

import logoNoText from '@/public/logoNoText.svg'
import { registerUser } from '@/utils/http.utils'
import { FormEvent, useState } from 'react'
import { AxiosError } from 'axios'

const RegisterPage = () => {
  const [errors, setErrors] = useState<{ path: string; msg: string }[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await registerUser(e)
    if (res instanceof AxiosError) {
      const err = res.response?.data.errors
      setErrors(err)
    }
  }
  return (
    <div className='flex h-full  w-full my-2 '>
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
        <form
          className='space-y-4 max-w-lg mx-auto my-5'
          onSubmit={handleSubmit}
        >
          <div className='md:flex gap-3'>
            <div className='md:w-1/2'>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-slate-800 '
              >
                Nombres
              </label>
              <input
                type='text'
                name='first_name'
                id='first_name'
                className='bg-gray-50 outline outline-1  outline-light text-gray-900 text-sm rounded-lg focus:outline-2 block w-full p-3 '
                placeholder='Joe'
                required
              />
              <small className='text-red-500 font-semibold'>
                {errors.map((e) => {
                  if (e.path == 'first_name') {
                    return e.msg
                  }
                })}
              </small>
            </div>
            <div className='md:w-1/2'>
              <label
                htmlFor='last_name'
                className='block mb-2 text-sm font-medium text-slate-800 '
              >
                Apellidos
              </label>
              <input
                type='text'
                name='last_name'
                id='last_name'
                className='bg-gray-50 outline outline-1  outline-light text-gray-900 text-sm rounded-lg focus:outline-2 block w-full p-3 '
                placeholder='Doe'
                required
              />
              <small className='text-red-500 font-semibold'>
                {errors.map((e) => {
                  if (e.path == 'last_name') {
                    return e.msg
                  }
                })}
              </small>
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
              className='bg-gray-50 outline outline-1  outline-light text-gray-900 text-sm rounded-lg focus:outline-2 block w-full p-3 '
              placeholder='name@company.com'
              required
            />
            <small className='text-red-500 font-semibold'>
              {errors.map((e) => {
                if (e.path == 'email') {
                  return e.msg
                }
              })}
            </small>
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
              className='bg-gray-50 outline outline-1  outline-light text-gray-900 text-sm rounded-lg focus:outline-2 block w-full p-3  '
              required
            />
            <small className='text-red-500 font-semibold'>
              {errors.map((e) => {
                if (e.path == 'password') {
                  return e.msg
                }
              })}
            </small>
          </div>

          <div>
            <label
              htmlFor='country'
              className='block mb-2 text-sm font-medium text-slate-800'
            >
              País
            </label>
            <select
              name='country'
              id=''
              className='bg-gray-50 outline outline-1  outline-light text-gray-900 text-sm rounded-lg focus:outline-2 block w-full p-3 '
            >
              <optgroup>
                <option value='colombia'>Colombia</option>
                <option value='venezuela'>Venezuela</option>
                <option value='agentina'>Argentina</option>
                <option value='mexico'>Mexico</option>
              </optgroup>
            </select>
            <small className='text-red-500 font-semibold'>
              {errors.map((e) => {
                if (e.path == 'country') {
                  return e.msg
                }
              })}
            </small>
          </div>
          <small className='text-red-500 font-semibold'>
            {errors.map((e) => {
              if (e.path == 'email') {
                return e.msg
              }
            })}
          </small>
          <button className='w-full text-white bg-light-green hover:-translate-y-1 transition-transform border-2   font-medium rounded-full px-5 py-3 text-center text-lg'>
            Crear cuenta
          </button>
          <button
            onClick={() => signIn(undefined, { callbackUrl: '/' })}
            type='button'
            className='w-full font-medium rounded-full text-lg px-5 py-3 text-center border-2 bg-soft-gray hover:-translate-y-1 transition-transform  flex justify-center gap-5 items-center'
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
    </div>
  )
}

export default RegisterPage
