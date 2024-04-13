'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import imageReview1 from '@/public/imageReview1.svg'
import imageReview2 from '@/public/imageReview2.svg'
import imageReview3 from '@/public/imageReview3.svg'

const Reviews = () => {
  const { data: session } = useSession()
  return (
    <div className='font-aeonik'>
      <div className=' flex flex-col items-center mb-10 '>
        <h3 className='text-3xl md:text-5xl font-bold my-10 px-3 text-balance text-center'>
          ¿Listo para la próxima aventura?
        </h3>
        <p className='text-center text-pretty w-3/4 md:w-1/2 text-lg'>
          !Compartela con nosotros y etiquetanos con{' '}
          <strong>#ExploraConTrekTrails</strong> en todas tus redes sociales!
          Queremos ver tus momentos mas épicos al aire libre y compartirlos con
          nuestra comunidad de exploradores.
        </p>
      </div>
      <div className='w-full flex gap-5 justify-center p-5 '>
        <figure className='flex justify-center relative'>
          <Image
            src={imageReview1}
            alt='Paisaje de viaje compartido por la comunidad'
            className='brightness-75'
          />
          <figcaption className='absolute bottom-0 left-0 text-white text-semibold text-xs md:text-lg p-2'>
            #ExploraConTrekTrails
          </figcaption>
        </figure>
        <figure className='flex justify-center relative'>
          <Image
            src={imageReview2}
            alt='Paisaje de viaje compartido por la comunidad'
            className='brightness-75'
          />
          <figcaption className='absolute bottom-0 left-0 text-white text-semibold text-xs md:text-lg p-2'>
            #ExploraConTrekTrails
          </figcaption>
        </figure>
        <figure className='flex justify-center relative'>
          <Image
            src={imageReview3}
            alt='Paisaje de viaje compartido por la comunidad'
            className='brightness-75'
          />
          <figcaption className='absolute bottom-0 left-0 text-white text-semibold text-xs md:text-lg p-2'>
            #ExploraConTrekTrails
          </figcaption>
        </figure>
      </div>

      <div className='flex justify-center my-10'>
        <p className='text-center text-pretty w-3/4 mb-10 text-lg'>
          !No te olvides de mencionarnos para que podamos seguir tus pasos y
          celebrar contigo cada paso del camino!
        </p>
      </div>
      {session?.user ? (
        <div></div>
      ) : (
        <div className='flex justify-center my-10'>
          <Link
            href='/login'
            className='bg-light-green text-white font-medium rounded-full py-3 px-5 hover:bg-white hover:text-light-green hover:border-light-green border  '
          >
            Iniciar sesión
          </Link>
        </div>
      )}
    </div>
  )
}
export default Reviews
