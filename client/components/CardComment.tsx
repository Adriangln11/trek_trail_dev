import Image from 'next/image'
import { CiMenuKebab } from 'react-icons/ci'
import emptyUser from '@/public/emptyUser.svg'
import { getAllComments } from '@/utils/http.utils'
import { useEffect, useState } from 'react'

const CardComment = ({ placeId }: { placeId: string }) => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const getComments = async () => {
      const res = await getAllComments()
      const data: Comment[] = res.data
      const filtered = data.filter(
        (comment) => comment.tripId.placeId == placeId
      )
      setComments(filtered)
    }
    getComments()
  }, [])
  if (comments.length == 0)
    return <div className='w-full text-center '>No hay comentarios</div>

  return (
    <>
      {comments?.map((comment: Comment) => {
        return (
          <article className='border-b border-soft-gray p-5' key={comment.id}>
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
                      {comment.tripId.stars} ★
                    </figcaption>
                  </div>
                </figure>
                <div className='flex flex-col'>
                  <span className='font-semibold'>{comment.userId}</span>
                  <small className='text-xs text-soft-gray'>
                    {new Date(comment.date).toLocaleDateString()}
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
              <p>{comment.text}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}
export default CardComment
