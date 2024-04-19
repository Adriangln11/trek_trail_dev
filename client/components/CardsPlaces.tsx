'use client'
import React, { useState } from 'react'

import run from '../public/run.jpg'
import place from '../public/place.jpeg'
import person from '../public/person.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import axios from 'axios'

interface Places {
  id: string
  lugar: string
  descripcion: string
  imageAutor: string
  autor: string
  image: string
  calificacion: number
}
interface token {
  token: string
}
const CardsPlaces: React.FC = () => {
  const [places, setPlaces] = useState<Places[]>([])
  const { data: session, status } = useSession()

  useEffect(() => {
    if (!session) return
    const token: string = session?.user?.token
    const fetchPlaces = async () => {
      try {
        if (session && session.user && token) {
          const response = await axios.get(
            'https://no-country-back.onrender.com/api/places',
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
          )
          setPlaces(response.data)
        } else {
          throw new Error('No session token available')
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchPlaces()
  }, [session])
  return (
    <>
      <div className=' mb-5 p-4  ml-2 mt-1'>
        <h1 className=' font-aeonik  text-2xl'>Nuestras rutas destacadas</h1>
      </div>
      <section className='  p-4 m-2 grid md:grid-cols-3 gap-3'>
        {places.map((place) => (
          <div className=' ' key={place.id}>
            <div className=' bg-soft-silver mt-10 rounded-lg border-gray-200 shadow '>
              <div>
                <button className='relative'>
                  <div>
                    <img
                      className='size-full rounded-t-lg'
                      width={200}
                      height={200}
                      src={place.image}
                      alt='imagen de lugar'
                    />
                    <a href=''>
                      <svg
                        className='text-white  absolute top-1 right-1'
                        width={40}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z'></path>
                      </svg>
                    </a>
                  </div>
                </button>
              </div>
              <div className='p-2'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-black'>
                    {place.lugar}
                  </h5>
                </a>
              </div>
              <div className='flex justify-between'>
                <div className='flex m-2  '>
                  <img
                    className=' rounded-full text-center  '
                    width={20}
                    height={20}
                    src={place.imageAutor}
                    alt='imagen de lugar'
                  />
                  <p className=' ml-1 mt-1 overflow-hidden text-center text-black '>
                    {place.autor}
                  </p>
                </div>

                <div className='flex justify-center rounded bg-white p-1 m-2'>
                  <svg
                    width={15}
                    className='text-soft-green m-1 '
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z'></path>
                  </svg>
                  <p
                    className='  font-normal 
          text-black mr-3'
                  >
                    {place.calificacion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <hr />
    </>
  )
}

export default CardsPlaces
