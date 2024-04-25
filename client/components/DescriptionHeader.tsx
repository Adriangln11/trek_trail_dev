import Image from 'next/image'

import {
  IoCameraOutline,
  IoHeartOutline,
  IoShareSocialOutline,
} from 'react-icons/io5'
import { MdOutlineMessage } from 'react-icons/md'
import imageDescription from '@/public/imageDescription.svg'
import Link from 'next/link'

const DescriptionHeader = ({ placeId }: { placeId:  string  }) => {
  return (
    <header className='w-full'>
      <figure className='w-full'>
        <Image
          src={imageDescription}
          alt='Imagen del lugar seleccionado'
          className='w-full brightness-75'
          objectFit='cover'
        />
      </figure>
      <div className='w-full bg-teal text-white  py-8 md:py-14 relative'>
        <div className='w-full absolute md:-top-1/3   flex  justify-around'>
          <Link href={`/description/${placeId}/photos`}>
            <figure className='text-center  flex gap-5 flex-col justify-center items-center md:text-2xl '>
              <i className='rounded-full bg-white text-teal w-8 h-8 md:w-16 md:h-16  flex items-center justify-center'>
                <IoCameraOutline className='w-16 ' />
              </i>
              <span className='hidden md:flex'>Fotos (234)</span>
            </figure>
          </Link>
          <figure className='text-center  flex gap-5 flex-col justify-center items-center md:text-2xl '>
            <i className='rounded-full bg-white text-teal   w-8 h-8 md:w-16 md:h-16  flex items-center justify-center'>
              <MdOutlineMessage className='w-16 ' />
            </i>
            <span className='hidden md:flex'>Comentarios (253)</span>
          </figure>
          <figure className='text-center  flex gap-5 flex-col justify-center items-center md:text-2xl '>
            <i className='rounded-full bg-white text-teal   w-8 h-8 md:w-16 md:h-16  flex items-center justify-center'>
              <IoHeartOutline className='w-16 ' />
            </i>
            <span className='hidden md:flex'>Favoritos</span>
          </figure>
          <figure className='text-center  flex gap-5 flex-col justify-center items-center md:text-2xl '>
            <i className='rounded-full bg-white text-teal   w-8 h-8 md:w-16 md:h-16  flex items-center justify-center'>
              <IoShareSocialOutline className='w-16 ' />
            </i>
            <span className='hidden md:flex'>Compartir</span>
          </figure>
        </div>
      </div>
    </header>
  )
}

export default DescriptionHeader
