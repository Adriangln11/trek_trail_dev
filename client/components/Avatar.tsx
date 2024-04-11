import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import emptyUser from '@/public/emptyUser.svg'
import { useState } from 'react'

export const Avatar = () => {
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`hidden md:flex items-center ${
        status != 'authenticated' ? 'hidden' : ''
      }`}
    >
      <div className='relative'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='w-10 h-10 rounded-full cursor-pointer'
        >
          <Image
            src={session?.user?.image ?? emptyUser}
            alt='Imagen de perfil de usuario'
            width={40}
            height={40}
          />
        </button>
        <div
          className={`absolute bottom-100 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
            <div>{session?.user?.name}</div>
            <div className='font-medium truncate'>{session?.user?.email}</div>
          </div>
          <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='avatarButton'
          >
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Perfil
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Favoritos
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Notificaciones
              </a>
            </li>
          </ul>
          <div className='py-1'>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
