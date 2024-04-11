


export const CtaNews=()=>{
return(
    <>
    <article className='flex content-center   justify-center  flex-col font-aeonik  p-10'>
        <div className='  p-4 rounded-xl flex flex-col content-center '>
            <div className='sm:flex-col '>
                <h2 className=' text-white mb-3 font-bold text-xl mt-1 font-aeonik'>Suscribirse al newsletter</h2>
            </div>
            <div className='ml-5 flex   '>
            <input id="" className=" text-white bg-silver p-1  placeholder-black font-aeonik rounded-md" name="email_address" placeholder="Ingresa tu email" type="email"/>

            <button  className="  text-white  border-2 hover::border-white lg:mt-1 ml-1 rounded-lg p-1   "> Suscribirme</button>

            </div>

        </div>
        <p className="text-white text-sm mt-2 text-center">Al suscribirte aceptas nuestros términos de privacidad.</p>
    </article>

    </>
)
}

export default  CtaNews; 