import { useState } from 'react'
import { CommentModal } from './CommentModal'

export default function MyReviews() {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
  const handleOpenCommentModal = () => {
    setIsCommentModalOpen(true)
  }

  const handleCloseCommentModal = () => {
    setIsCommentModalOpen(false)
  }
  return (
    <div className='relative bg-white w-[80%] h-screen mt-9 rounded-[6px] flex flex-col items-center'>
      <div className='w-[95%] border-b border-[#707070] bg-white flex items-center'>
        <h4 className='font-bold text-xl text-center  ml-7 mt-8 mb-4'>
          Mis Reseñas
          <div className='h-1 bg-black rounded-[20px] w-[195px] shadow' />
        </h4>
      </div>
      <div className=' bg-white w-[100%]  h-[440px] max-h-[440px] overflow-y-auto pl-3 flex flex-wrap  mt-4 '>
        <div className='w-[97%] ml-3 rounded-[6px] bg-[#EDF1F1] h-[100px] mb-4 flex items-center'>
          <div className='w-4 h-full bg-[#497574] rounded-l-[6px]' />

          <h4 className='font-bold text-[20px] ml-5'>Sagrada familia</h4>
        </div>
      </div>
      <div className='absolute bottom-1'>
        <button
          onClick={handleOpenCommentModal}
          className='rounded-[50px] bg-[#497574] h-[50px] w-[240px] font-[600] text-white my-7'
        >
          Crear reseña
        </button>
      </div>
      {/* <CommentModal open={isCommentModalOpen} close={handleCloseCommentModal} onSucces={handleCloseCommentModal}/> */}
    </div>
  )
}
