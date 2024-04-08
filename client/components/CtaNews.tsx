


export const CtaNews=()=>{
return(
    <>
    <article className='flex content-center   justify-center  flex-row font-aeonik  p-10'>
        <div className='bg-silver p-4 rounded-xl flex  content-center '>
            <div className='sm:flex-col '>
                <h2 className='text-center mt-1 font-aeonik'>Suscribirse al newsletter</h2>
            </div>
            <div className='ml-5 '>
            <input id="" className="bg-slate-400 text-black  p-1  placeholder-black font-aeonik rounded-md" name="email_address" placeholder="Ingresa tu email" type="email"/>

            <button className="bg-forest-green  md:mt-0 text-white ml-1 rounded-lg p-1 hover:bg-teal hover:text-dark-green hover:border-dark-green "> Suscribirme</button>

            </div>

        </div>
    </article>

    </>
)
}

export default  CtaNews; 