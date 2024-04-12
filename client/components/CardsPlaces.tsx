
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

interface Texto{
  texto:string;
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
            "descripcion": "Recorre las magníficas obras maestras del Museo del Prado con un guía experto.En esta emocionante experiencia, tendrás la oportunidad de admirar algunas de las piezas más destacadas de la historia del arte, incluyendo obras de maestros como Velázquez, Goya, El Greco y muchos más. Nuestro guía experto te proporcionará información detallada sobre cada obra, así como contexto histórico y artístico para que puedas apreciar plenamente su significado y su impacto en la historia del arte. ¡No te pierdas esta increíble oportunidad de sumergirte en el mundo del arte en el prestigioso Museo del Prado",
            "autor": "Ana García",
            "imageAutor":person.src,
            "image": place.src,
            "calificacion": 4.9
          },
          {
            "lugar": " El campo",
            "descripcion": "Disfr un relajante paseo en bicicleta por los hermosos paisajes del campo.",
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
      const recortarTexto = (texto: Texto, longitudMaxima: number) => {
        if (texto.texto.length > longitudMaxima) {
          return texto.texto.substring(0, longitudMaxima) + '...'; // Agregar puntos suspensivos al final
        } else {
          return texto.texto;
        }
      };

return(
<>
<div className=" mb-5 p-4  ml-2 mt-1">
    <h1 className=" font-aeonik  text-2xl">Nuestras rutas destacadas</h1>
    </div>
<section className='  p-4 m-2 grid md:grid-cols-3 gap-3'>

{Places.map((place, i) => (
<div className=" ">

 
  <div key={i} className=" bg-soft-silver mt-10 rounded-lg border-gray-200 shadow ">
    <div>

    <a href="#" className="relative">
  <div>
    <img className="size-full rounded-t-lg" width={200} height={200} src={place.image} alt="imagen de lugar" />
   <a href="">
    
   <svg className="text-white  absolute top-1 right-1" width={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
    </svg>
   </a>
  </div>
</a>

    </div>
    <div className="p-2">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{place.lugar}</h5>
      </a>
      {recortarTexto({ texto: place.descripcion }, 90)}
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