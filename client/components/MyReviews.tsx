import Link from 'next/link'

export default function MyReviews() {
  return (
    <div className=' bg-white w-[80%] h-screen mt-9 rounded-[6px] flex flex-col items-center'>
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
      <div className=' '>
        <Link
          href='/reviews/new'
          className='rounded-full bg-teal  w-32 font-semibold text-white my-5 p-3'
        >
          Crear reseña
        </Link>
      </div>
    </div>
  )
}
