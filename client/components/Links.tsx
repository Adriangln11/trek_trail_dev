import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

const Links = () => {
  return (
    <div>
      <div className='flex justify-center text-xl my-5'>
        <div className=''>
          <ul className='flex font-semibold items-center text-dark gap-3 '>
            <li className='inline-flex items-center py-3'>
              <i className=' rounded-full  hover:text-light-green hover:bg-white'>
                <FaFacebookF />
              </i>
            </li>
            <li className='inline-flex items-center py-3'>
              <i className=' rounded-full  hover:text-light-green hover:bg-white'>
                <FaInstagram />
              </i>
            </li>
            <li className='inline-flex items-center py-3'>
              <i className=' rounded-full  hover:text-light-green hover:bg-white'>
                <RiTwitterXFill />
              </i>
            </li>
            <li className='inline-flex items-center py-3'>
              <i className=' rounded-full  hover:text-light-green hover:bg-white'>
                <FaLinkedin />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Links
