import Image from 'next/image'
import run from '../public/run.jpg'
export const CarrouselExplore=()=>{
    const actividades = [
        {
          "id": 1,
          "image": run,
          "title": "Trekking",
       
        },
        {
          "id": 2,
          "image": run,
          "title": "Correr",
         
        },
        {
          "id": 3,
          "image": run,
          "title": "Ciclismo",
     
        },
        {
          "id": 4,
          "image": run,
          "title": "Escalada en roca",
         
        }
      ];
return(
<>
<section className="flex flex-col bg-silver content-center">
<div>
<div className="flex justify-center">
    <h1 className="font-aeonik">Explorar actividades</h1>
</div>

<div className=" ">
        <div className=" flex flex-row ">
            
          {actividades.map( actividad=> (
            <div key={actividad.id} className=" m-3 ">
              <Image src={actividad.image} alt={actividad.title} height={100} width={100}className=" rounded-full" />
              <div className="">
                <h2 className="">{actividad.title}</h2>
             
              </div>
            </div>
          ))}
        </div>
      </div>
</div>

</section>

</>

)


}

export default CarrouselExplore;