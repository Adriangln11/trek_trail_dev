'use client'
import React, { useEffect } from 'react'
import place2 from '../../public/place2.jpeg'

import CardsPlaces1 from '../../public/cardPlace.jpg';
import CardsPlaces2 from '../../public/cardPlace2.jpeg';
import CardsPlaces3 from '../../public/cardPlace3.jpeg';
import Image from 'next/image';
import axios from 'axios';
import { useSession } from 'next-auth/react';


interface Lugares{
titulo: string,
descripcion: string,
destacado: string
}
interface Imagen{
  url:string
}

interface LugarEspecifico {
  titulo: string;
  descripcion: string;
  imagen: string;
  clasificacion: number
}




const PlaceSpecific = () => {
 
  const { data: session, status } = useSession()


  const token:string | undefined = session?.user?.token  ;
// const id :string = session?.user.id


useEffect(() => {
  const fetchUsers = async () => {
    try {
      if (session && session.user && token) {
        const response = await axios.get("https://no-country-back.onrender.com/api/users/6622dcc9ce53198f7590c0d3", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

console.log(response.data);


      } else {
        throw new Error('error');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  fetchUsers();
}, []);


useEffect(() => {
  const fetchCity = async () => {
    try {
      if (session && session.user ) {
        const response = await axios.get("https://no-country-back.onrender.com/api/city", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

console.log(response.data);


      } else {
        throw new Error('errooors');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  fetchCity();
}, []);






  const imagenes: Imagen[] = [
    { url: CardsPlaces1.src },
    { url: CardsPlaces2.src },
    { url: CardsPlaces3.src }
  ];


  const lugaresEspecificos: LugarEspecifico[] = [
    {
      titulo: "Playa Barceloneta",
      descripcion: "Icono costero de Barcelona. Aguas cristalinas, arena dorada y ambiente animado. Ideal para tomar el sol, bañarse y disfrutar de deportes acuáticos.",
      imagen: CardsPlaces1.src,
      clasificacion:4.2
    },
    {
      titulo: "Icono arquitectónico",
      descripcion: "Su diseño único y detalles fascinantes. Símbolo de la Ciudad, aún en construcción. Captura la esencia del modernismo catalán.",
      imagen: CardsPlaces2.src,
      clasificacion:4.2
    },
    {
      titulo: "Tesoro de Gaudí en Barcelona",
      descripcion: "Diseño caprichoso y colorido, reflejo del modernismo catalán. Espacio único donde la naturaleza y la arquitectura se fusionan. ",
      imagen: CardsPlaces3.src,
      clasificacion: 4.2
    },

  ];
  



  
  return <>

<section className="">
  <div className="w-full h-80 overflow-hidden">
    <img src={place2.src} className="w-full h-full object-cover object-center" alt="bg images" />
  </div>

<div>


<div className='grid md:grid-cols-3  md:p-5 mt-4 justify-items-center'>
  {imagenes.map((imagen, i) => (
    <div key={i} className="relative overflow-hidden rounded-md">
      <Image
        src={imagen.url}
        width={265}
        height={150}
        className="h-full m-3 rounded-md object-cover"
        alt="Imagen"
      />
    </div>
  ))}
</div>

<div>

</div>
{/* 
{lugares.map((lugar, index) => (
  <div key={index} className='m-3 p-1 font-aeonik'>
    <h2 className='font-bold '>{lugar.titulo}</h2>
    <p>{lugar.descripcion}</p>
    <p>{lugar.destacado}</p>
  </div>
))}
<hr className='p-0 bg-gray-600 ' />

<div className='flex flex-col '>
  {
    lugaresEspecificos.map((lugares,i)=>(
      <div key={i} className='m-3 p-1 font-aeonik'>
<div className=' flex  flex-col md:flex-row p-2 '>
<Image
        src={lugares.imagen}
        width={205}
        height={150}
        className="h-full m-3 rounded-md object-cover"
        alt="Imagen"
      />

        <div className="flex  flex-col justify-center   ">
          <div className="flex flex-row">

          <h2 className='font-bold '>{lugares.titulo} </h2>    
            <svg  width={15}className="text-soft-green m-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
            <p className="  font-normal 
              text-black mr-3">{lugares.clasificacion} (744)</p>
          </div>  
                
        
      <p>{lugares.descripcion}</p>
      <div className="flex">
    <button className='font-bold '>Ver más </button> 

      </div>
              
    </div>  
    </div>

    </div>
    ))
  }
</div> */}


</div>
<div className="flex justify-center m-4 mb-8">
    <button className=' text-white rounded-full font-bold bg-soft-green p-3'>Ver más rutas </button> 

      </div>
              



  </section>
  </>
}

export default PlaceSpecific;
