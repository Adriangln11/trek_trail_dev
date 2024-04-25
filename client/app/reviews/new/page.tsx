'use client'

import { useState } from 'react'
import UploadImage from '../../../components/UploadImage'
import { useSession } from 'next-auth/react'
import { getCities, postCity } from '@/utils/http.utils'
// @ts-ignore
import { useCountries } from 'use-react-countries' //Tira error porque tiene tipo "any" inferido
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GetCity } from '@/types/getCity'

const NewReviewPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const { countries } = useCountries()
  const [error, setError] = useState<string>()
  const [cityName, setCityName] = useState('')
  const [cityLocation, setCityLocation] = useState('')
  const [cityCountry, setCityCountry] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const token = session?.user?.token
    if (!token) return setError('Ingresa sesion para poder publicar')
    const data = {
      name: cityName,
      location: cityLocation,
      country: cityCountry,
      image: undefined,
    }

    try {
      const res: any = await postCity(data, token)
      if (!res.status) {
        return setError('Error al continuar, verifica la información')
      }
      const cities: any = await getCities()
      const cityId = cities.data.find(
        (city: GetCity) => city.name == cityName
      )._id
      router.push(`/reviews/new/${cityId}`)
    } catch (e) {
      console.log(e)
      setError('Error al publicar, verifica la información o inicia sesion')
    }
  }

  return (
    <div className=' w-full items-center place-content-center  flex p-3 font-aeonik text-sm'>
      <div className='w-full '>
        <div className='flex gap-2 justify-center'>
          <h3 className='text-xl md:text-3xl font-bold'>
            Crea una nueva reseña
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className='w-full md:w-2/3  gap-2 my-5 mx-auto p-1   '
        >
          <div className='flex flex-col md:flex-row w-full gap-3'>
            <div className='w-full'>
              <span>Ciudad (*)</span>
              <div className='w-full flex'>
                <input
                  onChange={(e) => setCityName(e.target.value)}
                  name='city_name'
                  className='w-full rounded-md outline outline-1 outline-light text-gray-900 focus:outline-2 p-3'
                  placeholder='París'
                />
              </div>
            </div>
            <div className='w-full'>
              <span>Locación (*)</span>
              <div className='w-full flex'>
                <input
                  onChange={(e) => setCityLocation(e.target.value)}
                  name='city_location'
                  className='w-full rounded-md outline outline-1 outline-light text-gray-900 focus:outline-2 p-3'
                  placeholder='Europa'
                />
              </div>
            </div>
          </div>
          <div>
            <span>País (*)</span>
            <select
              onChange={(e) => setCityCountry(e.target.value)}
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
          </div>

          <div>
            <span>Subir foto (Opcional)</span>
            <div className='w-full flex'>
              <UploadImage />
            </div>
          </div>
          {error && (
            <div className='w-full flex text-center text-[#B33A3A]'>
              {error}
            </div>
          )}
          <div>
            <div className='flex gap-10 justify-end py-5'>
              <Link
                href='/reviews'
                className='p-3 rounded-full w-40 bg-[#A8A8A8] text-white text-center'
              >
                Cancelar
              </Link>
              <button
                type='submit'
                className='p-3 rounded-full w-40 bg-teal text-white'
              >
                Siguiente
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default NewReviewPage
