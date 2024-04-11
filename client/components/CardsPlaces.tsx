
import React from 'react';
import run from '../public/run.jpg';
import place from '../public/place.jpeg';
import person from '../public/person.png';


interface Places {
    lugar: string;
    descripcion: string;
    imageAutor:string;
    autor: string;
    image: string;
    calificacion: number;
  }



 const CardsPlaces:React.FC=()=>{

    const Places: Places[] = [
        {
            "lugar": "Parque oeste",
            "descripcion": "Excursión emocionante por las montañas, con vistas impresionantes y aire fresco.",
            "autor": "María López",
            "imageAutor":person.src,
            "image": place.src,
            "calificacion": 4.8
          },
          {
            "lugar": " Barcelona",
            "descripcion": "Descubre los sabores de Barcelona en este tour culinario por los mejores restaurantes de la ciudad.",
            "autor": "Carlos Martínez",
            "imageAutor":person.src,
            "image": place.src,
            "calificacion": 4.5
          },
          {
            "lugar": "Prado",
            "descripcion": "Recorre las magníficas obras maestras del Museo del Prado con un guía experto.",
            "autor": "Ana García",
            "imageAutor":person.src,
            "image": place.src,
            "calificacion": 4.9
          },
          {
            "lugar": " El campo",
            "descripcion": "Disfruta de un relajante paseo en bicicleta por los hermosos paisajes del campo.",
            "autor": "Pedro Fernández",
            "imageAutor":person.src,
            "image":place.src,
            "calificacion": 4.7
          },
          {
            "lugar": " Italia",
            "descripcion": "Aprende a cocinar auténticos platos italianos de la mano de un chef experimentado.",
            "imageAutor":person.src,
            "autor": "Laura Martínez",
            "image": place.src,
            "calificacion": 4.6
          }
      ];



return(
<>
<div className=" mb-5 p-4  ml-2 mt-1">
    <h1 className=" font-aeonik  text-2xl">Nuestras rutas destacadas</h1>
    </div>
<section className='  p-4 m-2 grid md:grid-cols-3 gap-3'>

{Places.map((place, i) => (
<div className=" ">

 
  <div key={i} className=" bg-soft-silver rounded-lg border-gray-200 shadow ">
    <div>

    <a href="#">
      <img className="size-full rounded-t -lg  "width={200} height={200} src={place.image} alt="imagen de lugar" />
    </a>
    </div>
    <div className="p-2">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{place.lugar}</h5>
      </a>
      <p className="mb-3 font-normal overflow-hidden text-black ">{place.descripcion}</p>
     
         </div>
         <div className='flex justify-between'>
          <div className='flex m-2  '>
          <img className=" rounded-full text-center  " width={20} height={20} src={place.imageAutor} alt="imagen de lugar" />
         <p className=" ml-1 mt-1 overflow-hidden text-center text-black ">{place.autor}</p>
          </div>
  
         <div className='flex justify-center rounded bg-white p-1 m-2'>
         <svg  width={15}className="text-soft-green m-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
         <p className="  font-normal 
          text-black mr-3">{place.calificacion}</p>
         </div>
            
         </div>
  </div>
  </div>   
))}

</section>
<hr />
</>

)


}

export default CardsPlaces;