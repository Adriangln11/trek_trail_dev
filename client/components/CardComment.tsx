import Image from 'next/image'
import emptyUser from '@/public/emptyUser.svg'
import { getAllReviews } from '@/utils/http.utils'
import { useEffect, useState } from 'react'
import { Trip } from '@/types/trip'
import { GetTrip } from '@/types/getTrip'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import CommentButton from './CommentButton'

const CardComment = ({ placeId }: { placeId: string }) => {
  const { data: session } = useSession()
  const userId = session?.user?.id
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
  }, [placeId])
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
                  <span className='font-semibold'>
                    {userId == trip.userId._id
                      ? 'Tú'
                      : `${trip.userId.first_name} ${trip.userId.last_name}`}
                  </span>
                  <small className='text-xs text-soft-gray'>
                    {new Date(trip.date).toLocaleDateString()}
                  </small>{' '}
                </div>
              </div>
              <div className='px-4'>
                {userId == trip.userId._id ? <CommentButton /> : ''}
              </div>
            </div>
            <div className='w-full flex gap-10 justify-start my-3'>
              <Link
                href='/activities/ciclismo'
                className='p-1 w-20  bg-[#D9D9D9] rounded-md text-center'
              >
                Paseo
              </Link>
              <Link
                href='/activities/ciclismo'
                className='p-1  w-20 bg-[#D9D9D9] rounded-md text-center'
              >
                Correr
              </Link>
              <Link
                href='/activities/ciclismo'
                className='p-1  w-20 bg-[#D9D9D9] rounded-md text-center'
              >
                Ciclismo
              </Link>
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
