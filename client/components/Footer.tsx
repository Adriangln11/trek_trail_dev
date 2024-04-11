
import logoWhite from '../public/logoWhite.png'
import Image from 'next/image'
import CtaNews from './CtaNews'

export const Footer=()=>{
return(

<>
<footer className=" bg-dark-green  p-3 flex flex-row md:flex md:flex-col justify-items-center">
<div className=" ">
<div className='flex justify-center mt-5 '>
        <Image src={logoWhite} alt='Trek Trails Logo' width={100} />
      </div>
      <div className='flex justify-between  flex-col  md:flex-row'>
<div className='flex p-4 justify-center '>
        <ul className='flex gap-3 text-white font-semibold '>
          <li className='inline-flex items-center hover:text-green-700'>
            <a href='/'>Inicio</a>
          </li>
          <li className='inline-flex items-center hover:text-green-700'>
            <a href='/explore'>Explorar</a>
          </li>
          <li className='inline-flex items-center hover:text-green-700'>
            <a href='/post'>Compartir</a>
          </li>
        </ul>
      </div>

<div className="flex mt-4 justify-center sm:mt-0 m-3">
            <CtaNews />
          </div>
</div>


<hr />
<div className='flex justify-between mt-2'>
<a href=" "><p className='font-aeonik text-white'>Terminos y condiciones del servicio</p></a>
<p className="font-aeonik text-center text-white ">© 2024 Copyright reserved. TrekTrails</p>
</div>
      </div>

</footer>

</>

)


}
export default Footer