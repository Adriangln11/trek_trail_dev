'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import logoNoText from '@/public/logoNoText.svg'
import bgImageLogin from '@/public/bgImageLogin.svg'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('123123')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrors([])

    const responseNextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(','))
      return
    }

    router.push('/')
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
      <div className='p-10 h-3/4  w-full md:w-1/2 xl:w-1/3 mx-auto  rounded-xl bg-light-gray '>
        <figure className='text-center font-bold text-3xl'>
          <Image
            src={logoNoText}
            alt='Logo de Aventura Compartida'
            width={150}
            priority={true}
            className='m-auto'
          />
          <figcaption>Accede a tu cuenta</figcaption>
        </figure>
        <form
          className='space-y-4 max-w-lg my-5 mx-auto'
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-dark '
            >
              Email
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
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
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-slate-800'
            >
              Contraseña
            </label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              name='password'
              id='password'
              placeholder='••••••••'
              className='bg-gray-50 outline outline-1  outline-light text-gray-900 text-sm rounded-lg focus:outline-2 block w-full p-3 '
              required
            />
            {/* <small className='text-red-500 font-semibold'>
              {errors.map((e) => {
                if (e.path == 'password') {
                  return e.msg
                }
              })}
            </small> */}
          </div>
          <div className='flex justify-end'>
            <Link
              href='/login/recovery'
              className='text-sm font-normal text-dark/70 underline'
            >
              Olvidé mi contraseña
            </Link>
          </div>
          {errors.length > 0 && (
            <div className='alert alert-danger mt-2'>
              <ul className='mb-0'>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <div className='flex flex-col gap-2'>
            <button
              onSubmit={() => signIn('credentials')}
              type='submit'
              className='w-full text-white bg-teal hover:-translate-y-1 transition-transform border-2   font-bold rounded-full px-5 py-3 text-center text-lg'
            >
              Acceder
            </button>
            <div className='flex justify-center divide-y-2'>
              <span className='text-dark'>o</span>
            </div>
            <button
              onClick={() => signIn('google', { callbackUrl: '/' })}
              type='submit'
              className=' border-dark/70 w-full font-semibold rounded-full text-lg text-dark/70 px-5 py-3 text-center border-2 bg-light-gray hover:-translate-y-1 transition-transform  flex justify-center gap-5 items-center
                '
            >
              <p className='relative flex items-center'>
                {' '}
                <i className='absolute -left-10 text-2xl'>
                  <FcGoogle />
                </i>
                Iniciar con Google
              </p>
            </button>
          </div>
          <div className='text-sm text-center font-normal text-dark '>
            ¿No tienes cuenta?
            <Link href='/register' className=' text-semibold underline  mx-2'>
              Registrarme
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
