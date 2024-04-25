'use client'
import React, { useEffect, useState } from 'react'
import place from '@/public/place.jpeg'
import place1 from '@/public/place1.jpeg'
import place2 from '@/public/place2.jpeg'

import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { getCities } from '@/utils/http.utils'
import { GetCity } from '@/types/getCity'
import { Place } from '@/types/place'

const PlaceSpecific = ({ params }: { params: { name: string } }) => {
  const [city, setCity] = useState<GetCity>()
  const [places, setPlaces] = useState<Place[]>([])

  // const id :string = session?.user.id

  // const cityValue = localStorage.getItem("cityId");

  // if (cityValue) {
  //   console.log('City value:', cityValue); // Si existe, muestra el valor.
  // } else {
  //   console.log('No se encontró valor para la clave:', cityId); // Si no existe, indica que no se encontró.
  // }
  // // const parsedCityId = cityValue ? JSON.parse(cityValue) : null;

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res: any = await getCities()

        const filtered = res.data.filter((city: any) => {
          return city.name.toLowerCase() == params.name
        })
        setCity(filtered[0])
        setPlaces(filtered[0].places)
      } catch (error) {
        console.error(
          'Hubo un problema con la operación de obtención de datos:',
          error
        )
      }
    }

    fetchCity()
  }, [])

  if (!city)
    return (
      <div>
        <h2>No hay resultados</h2>
      </div>
    )
  return (
    <section className='w-full'>
      <div className='w-full h-80 overflow-hidden'>
        <img
          src={place2.src}
          className='w-full h-full object-cover object-center'
          alt='bg images'
        />
      </div>

      <div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  md:p-5 mt-4 justify-items-center'>
            <div className='relative overflow-hidden rounded-md'>
              <Image
                src={places[0]?.image ? places[0].image : place}
                width={265}
                height={150}
                className='h-full m-3 rounded-md object-cover'
                alt='Imagen'
              />
            </div>
            <div className='relative overflow-hidden rounded-md'>
              <Image
                src={places[1]?.image ? places[1].image : place1}
                width={265}
                height={150}
                className='h-full m-3 rounded-md object-cover'
                alt='Imagen'
              />
            </div>
            <div className='relative overflow-hidden rounded-md'>
              <Image
                src={places[2]?.image ? places[2].image : place2}
                width={265}
                height={150}
                className='h-full m-3 rounded-md object-cover'
                alt='Imagen'
              />
            </div>
          </div>
        </div>

        <div className='m-3 p-1 font-aeonik'>
          <h2 className='font-bold '>Las mejores rutas de {city.name}</h2>
        </div>

        <hr className='p-0 bg-gray-600 ' />

        <div className='flex flex-col '>
          {places.map((place: any, i: any) => (
            <div key={i} className='m-3 p-1 font-aeonik'>
              <div className=' flex  flex-col md:flex-row p-2 '>
                <Image
                  src={place.image}
                  width={205}
                  height={150}
                  className='h-full m-3 rounded-md object-cover'
                  alt='Imagen'
                />

                <div className='flex  flex-col justify-center   '>
                  <div className='flex flex-row'>
                    <h2 className='font-bold '>
                      {' '}
                      {place.name.charAt(0).toUpperCase() +
                        place.name.slice(1).toLowerCase()}
                    </h2>
                    <svg
                      width={15}
                      className='text-soft-green m-1 '
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z'></path>
                    </svg>
                  </div>

                  <p>{place.description}</p>
                  <div className='flex'>
                    <button className='font-bold'>
                      <Link href={`/description/${place._id}`}>Ver más</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center m-4 mb-8'>
        <button className=' text-white rounded-full font-bold bg-soft-green p-3'>
          Ver más rutas{' '}
        </button>
      </div>
    </section>
  )
}

export default PlaceSpecific
