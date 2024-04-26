'use client'
import { useState } from 'react'
import run from '../public/run.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Actividad {
  id: number
  image: string
  title: string
}

const CarrouselExplore: React.FC = () => {
  const router = useRouter()
  const [startIndex, setStartIndex] = useState<number>(0)
  const [showPrevButton, setShowPrevButton] = useState<boolean>(false)
  const actividades: Actividad[] = [
    { id: 1, image: run.src, title: 'Trekking' },
    { id: 2, image: run.src, title: 'Correr' },
    { id: 3, image: run.src, title: 'Ciclismo' },
    { id: 4, image: run.src, title: 'Escalada en roca' },
    { id: 5, image: run.src, title: 'ASDADS' },
    { id: 6, image: run.src, title: 'ActivASDSADSADdad ' },
    { id: 7, image: run.src, title: 'Actividad ' },
    { id: 8, image: run.src, title: 'Actividad 8' },
    { id: 9, image: run.src, title: 'Actividad 9' },
    { id: 10, image: run.src, title: 'Actividad 10' },
  ]
  const handleClickNext = () => {
        const nextIndex = startIndex + 3 < actividades.length ? startIndex + 3 : 0;
        setStartIndex(nextIndex);
        setShowPrevButton(true);
      }
    
      const handleClickPrev = () => {
        const prevIndex =
          startIndex - 3 >= 0 ? startIndex - 3 : actividades.length - 3;
        setStartIndex(prevIndex);
        setShowPrevButton(prevIndex !== 0);
      }
    

  const handleClickRouter = (name: string) => {
    router.push(`/activities/${name}`)
  }
  return (
    <>
      <div className=' mb-5 mt-1'>
        <h1 className='text-center font-aeonik  text-2xl'>
          Explorar actividades
        </h1>
      </div>

      <section className='flex flex-col bg-soft-green  content-center'>
        <div className='mx-auto bg-soft-green'>
          <div className='relative overflow-hidden '>
            <div
              className='m-w-[680px] w-[680px] flex flex-row p-10 justify-center '
              // style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }} // Uncomment and adjust
              // style={{ transform: `translateX(-${startIndex * 33.33}%)` }}
            >
              {actividades
                .slice(startIndex, startIndex + 3)
                .map((actividad) => (
                  <a
                    href={`/activities/${actividad.title}`}
                    key={actividad.id}
                    onClick={() => {handleClickRouter(actividad.title)}}
                    className='w-[200px] max-md:w-[160px]  max-w-[200px]  max-md:max-w-[160px] max-md:h[100px] h-[200px] flex justify-center items-center   '
                  >
                    <div className='m-10 h-[240px] max-md:h-[160px] max-h-[240px] max-md:max-h-[160px]   flex flex-col justify-center items-center '>
                      <Image
                        src={actividad.image}
                        alt={actividad.title}
                        className='rounded-full   w-24 max-md:w-20 h-24 max-md:h-20 cursor-pointer mb-2'
                        width={50}
                        height={50}
                      />
                      <div className='text-center text-white h-8 font-semibold'>
                        <h2>{actividad.title}</h2>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
            {showPrevButton && (
              <button
                className=' text-white absolute top-1/2 transform -translate-y-10  left-18 '
                onClick={handleClickPrev}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={40}
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z'></path>
                </svg>
              </button>
            )}
            <button
              className='absolute top-1/2 text-white transform -translate-y-10  right-0'
              onClick={handleClickNext}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={40}
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z'></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CarrouselExplore