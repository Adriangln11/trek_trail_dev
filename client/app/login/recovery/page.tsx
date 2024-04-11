'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import logoNoText from '@/public/logoNoText.svg'
import bgImageLogin from '@/public/bgImageLogin.svg'
import { FormEvent, useState } from 'react'
import { loginUser } from '@/utils/http.utils'
import { AxiosError } from 'axios'

const LoginPage = () => {
  const [errors, setErrors] = useState<{ path: string; msg: string }[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await loginUser(e)
    if (res instanceof AxiosError) {
      const err = res.response?.data.errors
      console.log(res)
      setErrors(err)
    }
  }

  return (
    <div className='relative flex h-full  w-full md:p-5 font-aeonik '>
      <div className='absolute inset-x-0 inset-y-0 -z-10'>
        <Image
          src={bgImageLogin}
          alt='Imagen de fondo'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='p-10 h-3/4  w-full md:w-1/2 xl:w-1/3 mx-auto  rounded-xl bg-soft-gray '>
        <figure className='text-center font-bold text-3xl'>
          <Image
            src={logoNoText}
            alt='Logo de Aventura Compartida'
            width={150}
            priority={true}
            className='m-auto'
          />
          <figcaption>Recuperar contraseña</figcaption>
        </figure>
        <form
          className='space-y-4 max-w-lg my-5 mx-auto'
          onSubmit={handleSubmit}
        >
          <div className='text-xs text-center m-auto'>
            <p>
              Por favor, introduce tu dirección de correo electronico asociada a
              tu cuenta para restablecer tu contraseña.
            </p>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-dark '
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-gray-50 outline outline-1 outline-light text-gray-900 text-sm rounded-lg  focus:outline-2 block w-full p-3'
              placeholder='name@company.com'
              required
            />
            {/* <small className='text-red-500 font-semibold'>
              {errors.map((e) => {
                if (e.path == 'email') {
                  return e.msg
                }
              })}
            </small> */}
          </div>

          <div className='flex flex-col gap-4'>
            <button
              onSubmit={() => signIn('credentials')}
              type='submit'
              className='w-full text-white bg-teal hover:-translate-y-1 transition-transform border-2   font-bold rounded-full px-5 py-3 text-center text-lg'
            >
              Enviar correo
            </button>

            <button
              onClick={() => signIn(undefined, { callbackUrl: '/' })}
              type='submit'
              className=' border-dark/70 w-full font-semibold rounded-full text-lg text-dark/70 px-5 py-3 text-center border-2 bg-soft-gray hover:-translate-y-1 transition-transform  flex justify-center gap-5 items-center
                '
            >
              Ir a inicio de sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
