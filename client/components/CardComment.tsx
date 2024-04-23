import Image from 'next/image'
import { CiMenuKebab } from 'react-icons/ci'
import emptyUser from '@/public/emptyUser.svg'
import { getAllReviews } from '@/utils/http.utils'
import { useEffect, useState } from 'react'
import { Trip } from '@/types/trip'
import { GetTrip } from '@/types/getTrip'

const CardComment = ({ placeId }: { placeId: string }) => {
  const [reviews, setReviews] = useState<GetTrip[]>([])

  useEffect(() => {
    const getComments = async () => {
      const res = await getAllReviews()
      const data: GetTrip[] = res.data
      // @ts-ignore
      const filtered = data.filter((trip) => trip.placeId._id == placeId)
      setReviews(filtered)
    }
    getComments()
  }, [])
  if (reviews.length == 0)
    return <div className='w-full text-center '>No hay comentarios</div>
  return (
    <>
      {reviews?.map((trip: GetTrip) => {
        return (
          <article className='border-b border-soft-gray p-5' key={trip.id}>
            <div className='flex justify-between'>
              <div className='flex gap-5'>
                <figure>
                  <div className='flex flex-col items-center'>
                    <Image
                      src={emptyUser}
                      alt='Imagen de perfil del usuario que creo el comentario'
                      objectFit='cover'
                    />
                    <figcaption className='text-teal'>
                      {trip.stars.toFixed(1)} ★
                    </figcaption>
                  </div>
                </figure>
                <div className='flex flex-col'>
                  <span className='font-semibold'>{trip.userId}</span>
                  <small className='text-xs text-soft-gray'>
                    {new Date(trip.date).toLocaleDateString()}
                  </small>{' '}
                </div>
              </div>
              <div className='px-4'>
                <button>
                  <i>
                    <CiMenuKebab />
                  </i>
                </button>
              </div>
            </div>
            <div className='w-full flex gap-10 justify-start my-3'>
              <button className='p-1 w-20  bg-[#D9D9D9] rounded-md'>
                Paseo
              </button>
              <button className='p-1  w-20 bg-[#D9D9D9] rounded-md'>
                Correr
              </button>
            </div>
            <div>
              <p>{trip.description}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}
export default CardComment
