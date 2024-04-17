'use client'
import React from 'react'


import run from '../public/run.jpg'
import place from '../public/place.jpeg'
import person from '../public/person.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import axios from 'axios';


interface Places {
  id: string
  lugar: string
  descripcion: string
  imageAutor: string
  autor: string
  image: string
  calificacion: number
}
interface token{
  token: string
}
const CardsPlaces: React.FC = () => {

  const { data: session, status } = useSession()


  const Places: Places[] = [
    {
      id: crypto.randomUUID().toString(),
      lugar: 'Parque oeste',
      descripcion:
        'Excursión emocionante por las montañas, con vistas impresionantes y aire fresco.',
      autor: 'María López',
      imageAutor: person.src,
      image: place.src,
      calificacion: 4.8,
    },
  
  ]

const token:string =session?.user?.token;

useEffect(() => {
  const fetchPlaces = async () => {
    try {
      if (session && session.user && token) {
        const response = await axios.get("https://no-country-back.onrender.com/api/trip", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data);
      } else {
        throw new Error('No session token available');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  fetchPlaces();
}, [session]);
  return (
    <>
      <div className=' mb-5 p-4  ml-2 mt-1'>
        <h1 className=' font-aeonik  text-2xl'>Nuestras rutas destacadas</h1>
      </div>
      <section className='  p-4 m-2 grid md:grid-cols-3 gap-3'>
        {Places.map((place) => (
          <div key={place.id} className=' '>
            <div className=' bg-soft-silver rounded-lg border-gray-200 shadow '>
              <div>
                <a href='#'>
                  <Image
                    className='size-full rounded-t -lg  '
                    width={200}
                    height={200}
                    src={place.image}
                    alt='imagen de lugar'
                  />
                </a>
              </div>
              <div className='p-2'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-black'>
                    {place.lugar}
                  </h5>
                </a>
                <p className='mb-3 font-normal overflow-hidden text-black '>
                  {place.descripcion}
                </p>
              </div>
              <div className='flex justify-between'>
                <div className='flex m-2  '>
                  <Image
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
