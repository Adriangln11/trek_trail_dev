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
 
  return (
    <div className={`${open ? 'fixed' :'hidden'}  top-0 right-0 bottom-0 z-50 w-full items-center place-content-center backdrop-brightness-50 flex p-3 font-aeonik text-sm`}>
      <div tabIndex={-1} className='w-full h-auto'>
        <div className='h-3/5 w-[80%] max-md:w-2/3 max-lg:w-1/2 flex flex-col gap-3 m-auto bg-light-gray  max-md:p-10 px-10 py-8 rounded-lg '>
          <div className='absolute top-7 '>
            <button
              onClick={close}
              type='button'
              className='end-2.5 text-dark  hover:text-red-700 rounded-lg text-5xl w-8 h-8 ms-auto inline-flex justify-center items-center '
            >
              <RiCloseFill />
              <span className='sr-only'>Cerrar modal</span>
            </button>
          </div>
          <div className='flex gap-1 justify-center mb-2'>
            <h3 className='font-medium text-3xl'>Crear publicación</h3>
          </div>
          <div className='font-medium text-xl mb-2'>
            <span>Puntaje (*)</span>
            <StarsRating />
          </div>
          <div className='font-medium text-xl'>
            <span>Reseña (*)</span>
            <div className='w-full flex mt-1'>
              <textarea className='w-full rounded-lg p-3' rows={4} />
            </div>
          </div>
          <div className='font-medium text-xl '>
            <span>Subir foto</span>
            <div className='w-full flex mt-1'>
              <UploadImage />
            </div>
          </div>
          <div>
            <div className='flex gap-10 justify-end py-2'>
              <button onClick={close} className='p-3 rounded-full w-40 bg-[#A8A8A8] text-white'>
                Cancelar
              </button>
              <button className='p-2 rounded-full w-40 bg-teal text-white'>
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
