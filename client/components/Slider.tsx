'use client'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  {
    id: 1,
    color: 'bg-red-500',
    url: 'https://media.istockphoto.com/id/1363398400/es/foto/mujer-viajera-en-europa-alhambra-en-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=SU199iKyZSOGIbOBxkzvOhjl44n4YRGf54ILDPfo7W0=',
  },
  {
    id: 2,
    color: 'bg-green-500',
    url: 'https://media.istockphoto.com/id/1782353648/es/foto/feliz-pareja-casada-tom%C3%A1ndose-una-selfie-frente-a-la-ciudad-de-verona-v%C3%A9neto-dos-turistas.jpg?s=612x612&w=0&k=20&c=xuYVhzecruJu5_z8-XgMeczzOEk96ABLMy5XYVUpCt4=',
  },
  {
    id: 3,
    color: 'bg-yellow',
    url: 'https://media.istockphoto.com/id/1464818101/es/foto/mujer-con-maleta-rosa-y-pasaporte-con-tarjeta-de-embarque-de-pie-en-la-escalera-de-pasajeros.jpg?s=612x612&w=0&k=20&c=2pg0820Vem1-nIU2DgEFmuA9lAnXPUTyQ9-qu8gpZpE=',
  },
]

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex =
        currentImage === images.length - 1 ? 0 : currentImage + 1
      setCurrentImage(nextIndex)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [currentImage])

  const handleNextSlide = () => {
    let newSlide = currentImage === images.length - 1 ? 0 : currentImage + 1
    setCurrentImage(newSlide)
  }

  const handlePrevSlide = () => {
    let newSlide = currentImage === 0 ? images.length - 1 : currentImage - 1
    setCurrentImage(newSlide)
  }

  return (
    <div className='w-full'>
      <div className='relative'>
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className='absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20'
        />
        <div className='w-full h-[60vh] flex overflow-hidden relative m-auto'>
          {images.map((image, index) => {
            if (index === currentImage) {
              return (
                <Image
                  src={image.url}
                  alt='Imagen de un destino recomendado'
                  key={image.id}
                  className={`brightness-50 rounded-lg ${image.color}`}
                  layout='fill'
                  loading='lazy'
                />
              )
            }
          })}
        </div>
        <AiOutlineRight
          onClick={handleNextSlide}
          className='absolute right-0 m-auto text-5xl inset-y-0 cursor-pointer text-gray-400 z-20'
        />
      </div>

      <div className='relative flex justify-center p-2'>
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentImage
                  ? 'h-4 w-4 bg-teal rounded-full mx-2 mb-2 cursor-pointer'
                  : 'h-4 w-4 bg-light rounded-full mx-2 mb-2 cursor-pointer'
              }
              key={index}
              onClick={() => {
                setCurrentImage(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slider
