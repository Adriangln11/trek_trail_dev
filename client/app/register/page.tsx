'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FormEvent, useState } from 'react'
// @ts-ignore
import { useCountries } from 'use-react-countries' //Tira error porque tiene tipo "any" inferido
import { AxiosError } from 'axios'
import { FcGoogle } from 'react-icons/fc'
import { registerUser } from '@/utils/http.utils'
import logoNoText from '@/public/logoNoText.svg'
import bgImageLogin from '@/public/bgImageLogin.svg'
import { useRouter } from 'next/navigation'
import {} from 'next-auth'

const RegisterPage = () => {
  const router = useRouter()
  const { countries } = useCountries()
  const [errors, setErrors] = useState<{ path: string; msg: string }[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await registerUser(e)
    if (res instanceof AxiosError) {
      const err = res.response?.data.errors
      setErrors(err)
    }
    router.push('/')
  }
  return (
    <div className='relative flex h-full  w-full md:p-5 font-aeonik '>
      <div className='absolute inset-x-0 inset-y-0 -z-10 '>
        <Image
          src={bgImageLogin}
          alt='Imagen de fondo'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className=' p-10 h-3/4  w-full md:w-1/2 xl:w-1/3 mx-auto  rounded-xl bg-light-gray'>
        <figure className='text-center font-bold text-3xl'>
          <Image
            src={logoNoText}
            alt='Logo de Aventura Compartida'
            width={150}
            priority={true}
            className='m-auto'
          />
          <figcaption>Crea tu cuenta</figcaption>
        </figure>
        <form
          className='space-y-4 max-w-lg mx-auto my-5'
          onSubmit={handleSubmit}
        >
          <div className='md:flex gap-3'>
            <div className='md:w-1/2'>
              <label
                htmlFor='first_name'
                className='block mb-2 text-sm font-medium text-dark  '
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
                {errors &&
                  errors.map((e) => {
                    if (e.path == 'first_name') {
                      return e.msg
                    }
                  })}
              </small>
            </div>
            <div className='md:w-1/2'>
              <label
                htmlFor='last_name'
                className='block mb-2 text-sm font-medium text-dark  '
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
                {errors &&
                  errors.map((e) => {
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
              className='block mb-2 text-sm font-medium text-dark  '
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
              {errors &&
                errors.map((e) => {
                  if (e.path == 'email') {
                    return e.msg
                  }
                })}
            </small>
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-dark '
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
              {errors &&
                errors.map((e) => {
                  if (e.path == 'password') {
                    return e.msg
                  }
                })}
            </small>
          </div>

          <div>
            <label
              htmlFor='country'
              className='block mb-2 text-sm font-medium text-dark '
            >
              País
            </label>
            <select
              name='country'
              className='bg-gray-50 outline outline-1  outline-light text-gray-900 text-sm rounded-lg focus:outline-2 block w-full p-3 '
            >
              <optgroup>
                {countries.map(({ name }: any) => {
                  return (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  )
                })}
              </optgroup>
            </select>
            <small className='text-red-500 font-semibold'>
              {errors &&
                errors.map((e) => {
                  if (e.path == 'country') {
                    return e.msg
                  }
                })}
            </small>
          </div>

          <button className='w-full text-white bg-teal hover:-translate-y-1 transition-transform border-2   font-bold rounded-full px-5 py-3 text-center text-lg'>
            Crear cuenta
          </button>
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            type='button'
            className=' border-dark/70 w-full font-semibold rounded-full text-lg text-dark/70 px-5 py-3 text-center border-2 bg-light-gray hover:-translate-y-1 transition-transform  flex justify-center gap-5 items-center'
          >
            <p className='relative flex items-center'>
              {' '}
              <i className='absolute -left-10 text-2xl'>
                <FcGoogle />
              </i>
              Iniciar con Google
            </p>
          </button>
          <div className='text-sm text-center font-normal text-dark  '>
            Ya tienes cuenta?
            <Link href='/login' className='text-semibold underline  mx-2'>
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
