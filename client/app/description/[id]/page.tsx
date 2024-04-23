'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { CommentModal } from '@/components/CommentModal'
import DescriptionHeader from '@/components/DescriptionHeader'
import StarStats from '@/components/StarStats'
import { Place } from '@/types/place'
import { getPlaceDescription } from '@/utils/http.utils'
import CardComment from '@/components/CardComment'

const comments = [
  {
    userId: '1',
    text: 'Great experience!',
    date: '2020-01-15',
    stars: '5',
  },
  {
    userId: '2',
    text: 'The driver was late.',
    date: '2020-02-03',
    stars: '3',
  },
  {
    userId: '3',
    text: 'I had a pleasant ride.',
    date: '2020-03-22',
    stars: '4',
  },
  {
    userId: '4',
    text: 'The car was clean and comfortable.',
    date: '2020-04-10',
    stars: '5',
  },
  {
    userId: '5',
    text: 'The driver took a wrong turn.',
    date: '2020-05-18',
    stars: '2',
  },
  {
    userId: '6',
    text: 'The price was too high for the service.',
    date: '2020-06-29',
    stars: '1',
  },
  {
    userId: '7',
    text: 'I had to wait a long time for a ride.',
    date: '2020-07-07',
    stars: '2',
  },
  {
    userId: '8',
    text: 'The driver was friendly and helpful.',
    date: '2020-08-14',
    stars: '4',
  },
  {
    userId: '9',
    text: 'The app crashed during the ride.',
    date: '2020-09-25',
    stars: '2',
  },
  {
    userId: '10',
    text: 'I had a great conversation with the driver.',
    date: '2020-10-30',
    stars: '5',
  },
]

const DescriptionPage = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession()
  const [description, setDescription] = useState<Place>()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const data = await getPlaceDescription(params.id)
      setDescription(data.data)
      return
    }

    getData()
  }, [description])

  if (!description) return <h4>No hay informacion para mostrar</h4>
  return (
    <div className='w-full h-1/3 font-aeonik '>
      <DescriptionHeader />
      <section className='w-full  text-balance md:my-10 p-5'>
        <div>
          <h2 className='font-bold text-3xl md:text-4xl'>
            {description.name.toUpperCase()}
          </h2>

          <span className='text-xs text-soft-gray'>
            ★ {Math.floor(description.average).toFixed(1)}
          </span>
        </div>
        <h3 className='text-2xl my-10 font-semibold'>Descripción</h3>
        <p>{description.description}</p>
      </section>
      <section className='w-full p-5'>
        <div className='flex gap-10 justify-start border-b border-soft-gray pb-2'>
          <span>Fotos (234)</span>
          <span>Comentarios (253)</span>
        </div>
        <div className='my-5 flex flex-col md:flex-row items-center gap-20 border-b border-soft-gray p-10'>
          <StarStats />
          <div className='flex flex-col '>
            <span className='text-4xl font-bold flex mx-auto'>
              {Math.floor(description.average).toFixed(1)}{' '}
            </span>
            <span>Reseñas (253)</span>
          </div>
          <div>
            <div className='flex justify-center my-10'>
              <button
                onClick={() => setIsOpen(true)}
                className='bg-teal text-white font-medium rounded-full py-3 px-5 hover:bg-white hover:text-teal hover:border-teal border'
              >
                Escribir reseña
              </button>
              <CommentModal
                open={isOpen}
                close={() => setIsOpen(false)}
                onSucces={() => setIsOpen(false)}
                placeName={description.name.toUpperCase()}
                place={description}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full  p-5'>
        <CardComment placeId={description.id} />
      </section>
    </div>
  )
}
export default DescriptionPage
