import { MouseEventHandler, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import StarsRating from './StarsRating'
import UploadImage from './UploadImage'

interface ModalProps {
  open?: boolean
  close?: MouseEventHandler
}
export const CommentModal = ({
  open,
  close,
}: {
  open: boolean
  close: MouseEventHandler
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed top-0 right-0 bottom-0 z-50 w-full items-center place-content-center backdrop-brightness-50 flex p-3 font-aeonik text-sm'>
      <div tabIndex={-1} className='w-full h-auto'>
        <div className=' md:w-2/3 lg:w-1/2 flex flex-col gap-5 m-auto bg-light-gray p-5 md:p-10 rounded-lg '>
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
          <div className='flex gap-1 justify-center'>
            <h3 className='text-lg '>Titulo del destino</h3>
            <div className='text-xs py-2'>(Crear comentario)</div>
          </div>
          <div>
            <span>Puntaje (*)</span>
            <StarsRating />
          </div>
          <div>
            <span>Actividades (*)</span>
            PENDIENTE DE HACER
          </div>
          <div>
            <span>Reseña (*)</span>
            <div className='w-full flex'>
              <textarea className='w-full ' rows={4} />
            </div>
          </div>
          <div>
            <span>Subir foto</span>
            <div className='w-full flex'>
              <UploadImage />
            </div>
          </div>
          <div>
            <div className='flex gap-10 justify-end py-5'>
              <button className='p-3 rounded-full w-40 bg-[#A8A8A8] text-white'>
                Cancelar
              </button>
              <button className='p-3 rounded-full w-40 bg-teal text-white'>
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
