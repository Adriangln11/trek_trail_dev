import Link from 'next/link'
import { useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci'

const CommentButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <i>
          <CiMenuKebab />
        </i>
      </button>
      <div
        className={`absolute bottom-100 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className='py-1'>
          <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
            Editar
          </button>
        </div>
        <div className='py-1'>
          <button className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentButton
