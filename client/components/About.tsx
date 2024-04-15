import Image from 'next/image'
import aboutImage from '@/public/aboutImage.svg'
import whiteLogoText from '@/public/whiteLogoText.svg'

const About = () => {
  return (
    <section className='w-full  flex flex-col md:flex-row items-center gap-5 p-10 my-10 font-aeonik'>
      <div className='flex gap-5'>
        <div className='hidden lg:flex w-full  md:w-3/4'>
          <figure className='w-full flex items-center'>
            <Image
              src={aboutImage}
              alt='Personas andando por un sendero boscoso'
              className='rounded-lg '
            />
          </figure>
        </div>
        <div className='md:flex-row lg:flex-col flex flex-col bg-teal rounded-lg px-10 py-20 text-center justify-evenly'>
          <figure className='flex items-center justify-center mb-5'>
            <Image
              src={whiteLogoText}
              alt='Personas andando por un sendero boscoso'
              width={200}
            />
          </figure>
          <div className='flex justify-center'>
            <p className='w-2/3 align-middle font-medium text-lg text-white'>
              ¿Qué hace a Trek Trails único? Te conectamos con reseñas
              auténticas de otros aventureros, lo que te permite descubrir
              nuevos destinos y encontrar las mejores rutas para tus próximas
              expediciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
