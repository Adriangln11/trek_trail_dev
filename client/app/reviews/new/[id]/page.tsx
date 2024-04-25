'use client'

import { useState } from 'react'
import UploadImage from '@/components/UploadImage'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { postPlace } from '@/utils/http.utils'

const NewReviewPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const [error, setError] = useState<string>()
  const [placeName, setPlaceName] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = { name: placeName, city: params.id, image: '' }
    try {
      const res: any = await postPlace(data)

      if (!res.status) {
        return setError('Error al continuar, verifica la información')
      }
      const placeId = res.data._id
      router.push(`/description/${placeId}`)
    } catch (e) {
      console.log(e)
      setError('Error al continuar, verifica la información')
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
              <span>Nombre del lugar (*)</span>
              <div className='w-full flex'>
                <input
                  onChange={(e) => setPlaceName(e.target.value)}
                  name='place_name'
                  className='w-full rounded-md outline outline-1 outline-light text-gray-900 focus:outline-2 p-3'
                  placeholder='Campo de Marte'
                />
              </div>
            </div>
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
