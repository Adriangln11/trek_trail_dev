'use client'

import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import imageHeader1 from '@/public/imageHeader1.svg'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const MainHeader = () => {
  const router = useRouter()

  const [search, setSearch] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    router.push(`/placeSpecific/${search.toLowerCase()}`)
  }

  return (
    <div>
      <div className='relative'>
        <figure>
          <Image
            src={imageHeader1}
            alt='Paisaje aleatorio'
            className='w-full my-6'
            objectFit='cover'
          />
        </figure>
        <form action='' onSubmit={handleSubmit}>
          <div className='absolute left-0 right-0 -bottom-10 flex justify-center'>
            <div className='flex justify-center md:w-3/4 lg:w-2/4 w-3/4 p-5 relative'>
              <input
                onChange={(event) => setSearch(event.target.value)}
                type='text'
                name='search'
                className='bg-gray-50 outline outline-1 outline-light text-gray-900 text-lg rounded-[30px]  focus:outline-2 block w-full p-5  pl-20 shadow-sm'
                placeholder='Barcelona'
              />

              <button
                type='submit'
                className='absolute inset-y-0 left-14 text-dark/50 flex items-center'
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default MainHeader
