'use client'
import Image from 'next/image'
import header from '@/public/headerActivities.jpg'
import PhotoCard from '@/components/PhotoCard'
import { useEffect, useState } from 'react'
import { Place } from '@/types/place'
import { getPlaceById } from '@/utils/http.utils'

const PhotosPage = ({ params }: { params: { id: string } }) => {
  const [description, setDescription] = useState<Place>()

  useEffect(() => {
    const getData = async () => {
      const data = await getPlaceById(params.id)
      setDescription(data.data)
      return
    }

    getData()
  }, [params.id])
  console.log(description)

  return (
    <section className='w-full'>
      <div className='w-full relative'>
        <div className='bg-[#302F2F] w-full m-0 h-[513px] absolute opacity-50 z-10' />
        <Image
          className='h-[513px] relative z-0 w-full'
          objectFit='cover'
          width={400}
          height={400}
          src={`${description?.image ? description?.image : header.src}`}
          alt='Header Photos'
        />
        <div className='absolute z-10 bottom-14'>
          <p className='ml-[54px] text-white font-[400] text-[23px]'>
            Fotos de {description?.name}
          </p>
          <p className='ml-[54px] text-white font-[400] text-[23px]'>
            Fotos ({description?.city.image.length})
          </p>
        </div>
      </div>
      <div className='py-12 mx-[24px] border-b-[2px] border-b-[#BDBDBD] h-[20px]'></div>
      <div className='grid grid-cols-3 max-md:grid-cols-2 gap-3 p-4 mx-6 max-sm:flex max-sm:flex-wrap justify-center'>
        {description?.city.image.slice(0, 6).map((img, key) => {
          return <PhotoCard img={img} key={key} />
        })}
      </div>
      {description?.city && description?.city.image.length > 6 && (
        <div className='flex justify-center'>
          <button className='rounded-[50px] bg-[#497574] h-[50px] w-[202px] font-[600] text-white my-7'>
            Ver mas fotos
          </button>
        </div>
      )}
    </section>
  )
}

export default PhotosPage
