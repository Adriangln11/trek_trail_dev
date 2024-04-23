'use client'
import React, { useEffect, useState } from 'react'
import place2 from '@/public/place2.jpeg'
import { useRouter } from 'next/navigation'
import CardsPlaces1 from '@/public/cardPlace.jpg'
import CardsPlaces2 from '@/public/cardPlace2.jpeg'
import CardsPlaces3 from '@/public/cardPlace3.jpeg'
import Image from 'next/image'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface Place {
  _id: string
  name: string
  city: string // Referencia a la ciudad a la que pertenece
  description: string
  image: string
  trip?: string[] // Puede ser una lista de IDs de viajes asociados con el lugar
  stars?: number[] // Puede ser una lista de estrellas o calificaciones
}

interface Imagen {
  url: any
}

interface City {
  _id: string
  name: string
  country: string // País donde se encuentra la ciudad
  image: string[] // Lista de imágenes asociadas a la ciudad
  places: Place[] // Lista de lugares asociados a la ciudad
}

interface cityId {
  cityId: string
}

const PlaceSpecific = ({ params }: { params: { id: string } }) => {
  const { data: session, status } = useSession()
  const [cities, setCities] = useState<City[]>([])
  const [subCity, setSubCity] = useState<Place[]>([])
  const [images, setImages] = useState<string[]>([])

  const token: string | undefined = session?.user?.token
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
        const response = await axios.get(
          `https://no-country-back.onrender.com/api/city/${params.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        setImages([response.data.image])

        setCities([response.data])
        setSubCity(response.data.places)
      } catch (error) {
        console.error(
          'Hubo un problema con la operación de obtención de datos:',
          error
        )
      }
    }

    fetchCity()
  }, [token])

  return (
    <>
      <section className=''>
        <div className='w-full h-80 overflow-hidden'>
          <img
            src={place2.src}
            className='w-full h-full object-cover object-center'
            alt='bg images'
          />
        </div>

        <div>
          <div className=''>
            {images.map((imagen, i) => (
              <div
                className='grid md:grid-cols-3  md:p-5 mt-4 justify-items-center'
                key={i}
              >
                <div key={i} className='relative overflow-hidden rounded-md'>
                  <Image
                    src={imagen[0]}
                    width={265}
                    height={150}
                    className='h-full m-3 rounded-md object-cover'
                    alt='Imagen'
                  />
                </div>
                <div key={i} className='relative overflow-hidden rounded-md'>
                  <Image
                    src={imagen[1]}
                    width={265}
                    height={150}
                    className='h-full m-3 rounded-md object-cover'
                    alt='Imagen'
                  />
                </div>
                <div key={i} className='relative overflow-hidden rounded-md'>
                  <Image
                    src={imagen[2]}
                    width={265}
                    height={150}
                    className='h-full m-3 rounded-md object-cover'
                    alt='Imagen'
                  />
                </div>
              </div>
            ))}
          </div>

          <div></div>

          {cities.map((lugar, index) => (
            <div key={index} className='m-3 p-1 font-aeonik'>
              <h2 className='font-bold '>Las mejores rutas de {lugar.name}</h2>
            </div>
          ))}
          <hr className='p-0 bg-gray-600 ' />

          <div className='flex flex-col '>
            {subCity.map((lugares, i) => (
              <div key={i} className='m-3 p-1 font-aeonik'>
                <div className=' flex  flex-col md:flex-row p-2 '>
                  <Image
                    src={lugares.image}
                    width={205}
                    height={150}
                    className='h-full m-3 rounded-md object-cover'
                    alt='Imagen'
                  />

                  <div className='flex  flex-col justify-center   '>
                    <div className='flex flex-row'>
                      <h2 className='font-bold '>
                        {' '}
                        {lugares.name.charAt(0).toUpperCase() +
                          lugares.name.slice(1).toLowerCase()}
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
                      {/* <p className="  font-normal    text-black mr-3">{lugares.clasificacion} (744)</p> */}
                    </div>

                    <p>{lugares.description}</p>
                    <div className='flex'>
                      <button className='font-bold'>
                        <Link href={`/description/${lugares._id}`}>
                          Ver más
                        </Link>
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
    </>
  )
}

export default PlaceSpecific
