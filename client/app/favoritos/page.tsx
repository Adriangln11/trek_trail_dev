'use client'
import React, { useState } from 'react'

import run from '../public/run.jpg'
// import place from '../public/place.jpeg'
import person from '../public/person.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import axios from 'axios'
import MainHeader from '@/components/MainHeader'
import { getUserById } from '@/utils/http.utils'
import { Favs } from '@/types/favs'

const Favoritos = () => {
  const { data: session } = useSession()
  const [favs, setFavs] = useState<Favs[]>([])

  useEffect(() => {
    const getFavs = async () => {
      const userId = session?.user?.id ? session.user.id : ''
      const token = session?.user?.token ? session.user.token : ''
      if (!token) return
      try {
        const res: any = await getUserById(userId, token)
        if (!res.status) {
          return
        }
        setFavs(res.data.favorites)
      } catch (e) {
        console.error(e)
      }
    }
    getFavs()
  }, [session])

  const recortarTexto = (texto: string, longitudMaxima: number) => {
    if (texto.length > longitudMaxima) {
      return texto.substring(0, longitudMaxima) + '...'
    } else {
      return texto
    }
  }
  return (
    <>
      <div>
        <MainHeader />
        <div className=' mb-5 p-4  ml-2 mt-1'>
          <h1 className=' font-aeonik  text-2xl'>Tus rutas Favoritas</h1>
        </div>
        <section className='  p-4 m-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          {favs.map((fav, key) => (
            <a href={`/description/${fav._id}`} key={key} className=' m-2 '>
              <div className='bg-soft-silver rounded-lg border-gray-200 shadow h-full'>
                <div className='relative'>
                  <figure>
                    <Image
                      className='w-full rounded-t-lg'
                      width={300}
                      height={300}
                      src={fav.image}
                      alt='imagen de lugar'
                    />
                    <button>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-white  absolute top-1 right-1'
                        width={40}
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z'></path>
                      </svg>
                    </button>
                  </figure>
                </div>
                <div className='p-2'>
                  <div>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-black'>
                      {fav.name.charAt(0).toUpperCase() +
                        fav.name.slice(1).toLowerCase()}
                    </h5>
                  </div>
                  <p className='mb-3 font-normal overflow-hidden text-black'>
                    {recortarTexto(fav.description, 100)}
                  </p>
                </div>
                <div className='flex justify-between'>
                  <div className='flex justify-center rounded bg-white p-1 m-2'>
                    <svg
                      width={15}
                      className='text-soft-green m-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z'></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>
        <hr />
      </div>
    </>
  )
}

export default Favoritos
