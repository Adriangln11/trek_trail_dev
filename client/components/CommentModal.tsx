import { EventHandler, MouseEventHandler, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import StarsRating from './StarsRating'
import UploadImage from './UploadImage'
import { useSession } from 'next-auth/react'
import { createTripPost } from '@/utils/http.utils'
import { Trip } from '@/types/trip'
import { useRouter } from 'next/router'
import { Place } from '@/types/place'

interface ModalProps {
  open?: boolean
  close?: MouseEventHandler
  onSucces?: () => void
  placeName: string
  place: Place
}
export const CommentModal = ({
  open,
  close,
  onSucces,
  placeName,
  place,
}: {
  open: boolean
  close: MouseEventHandler
  onSucces: () => void
  placeName: string
  place: Place
}) => {
  const { data: session } = useSession()
  const [stars, setStars] = useState(0)
  const [text, setText] = useState('')
  const [titulo, setTitulo] = useState('')
  const [error, setError] = useState<string>()

  const handleRate = (value: number) => {
    setStars(value)
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const date = new Date().toISOString()
    const userId = session?.user.id ? session.user.id : ''
    const description = text
    const name = titulo
    const activity = 'Paseo'
    const placeId = place.id
    const data: Trip = {
      userId,
      date,
      name,
      description,
      activity,
      stars,
      photo: '',
      placeId,
    }
    try {
      const token = session?.user.token
      if (!token) return setError('Inicia sesión para publicar')
      const res: any = await createTripPost(data, token)
      const ok = res.data.ok && res.data.ok
      if (ok) return onSucces()
    } catch (e) {
      setError(
        'Error al publicar, verifica la información o si ya calificaste el contenido'
      )
    }
  }

  if (!open) return null

  return (
    <div className='fixed top-0 right-0 bottom-0 z-50 w-full items-center place-content-center backdrop-brightness-50 flex p-3 font-aeonik text-sm'>
      <div tabIndex={-1} className='w-full h-auto'>
        <form
          onSubmit={handleSubmit}
          className=' lg:w-1/2 flex flex-col gap-2 m-auto bg-light-gray p-5 rounded-xl '
        >
          <div>
            <button
              onClick={close}
              type='button'
              className='end-2.5 text-dark  hover:text-red-700 rounded-lg text-5xl w-8 h-8 ms-auto inline-flex justify-center items-center '
            >
              <RiCloseFill />
              <span className='sr-only'>Cerrar modal</span>
            </button>
          </div>
          <div className='flex gap-2 justify-center'>
            <h3 className='text-lg '>{placeName}</h3>
            <div className='text-xs py-2'>(Crear reseña)</div>
          </div>
          <div>
            <span>Puntaje (*)</span>
            <StarsRating onRate={handleRate} />
          </div>

          <div>
            <span>Titulo (*)</span>
            <div className='w-full flex'>
              <input
                onChange={(e) => setTitulo(e.target.value)}
                name='name'
                className='w-full rounded-md outline outline-1 outline-light text-gray-900 focus:outline-2 p-3'
              />
            </div>
          </div>
          <div>
            <span>Reseña (*)</span>
            <div className='w-full flex'>
              <textarea
                onChange={(e) => setText(e.target.value)}
                name='description'
                className='w-full rounded-md outline outline-1 outline-light text-gray-900 focus:outline-2 p-3'
                rows={4}
              />
            </div>
          </div>
          <div>
            <span>Subir foto</span>
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
              <button
                onClick={close}
                className='p-3 rounded-full w-40 bg-[#A8A8A8] text-white'
              >
                Cancelar
              </button>
              <button
                type='submit'
                className='p-3 rounded-full w-40 bg-teal text-white'
              >
                Publicar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
