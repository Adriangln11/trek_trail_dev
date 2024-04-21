'use client'
import React, { useState } from 'react'


import run from '../public/run.jpg'
// import place from '../public/place.jpeg'
import person from '../public/person.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import axios from 'axios';
import MainHeader from '@/components/MainHeader'


interface User {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    country: string;
    comments: string[];
    trips: string[];
    favorites: string[];
    avatar: string;
    role: string;
    status: string;
  }
  

  interface favorites {
    _id: string;
    userId: string;
    name: string;
    comments: string[];
    placeId: string;
    description: string;
    stars: number;
    activity: string;
    photo: string;
    date: string;
    __v: number;
}


interface token{
  token: string
}
const favoritos: React.FC = () => {

  const { data: session, status } = useSession()
  const [user, setUser] = useState<User[]>([]);
  const [favoritos, setFavoritos] =useState<favorites[]>([])

const token:string =session?.user?.token  ;

useEffect(() => {
  const fetchPlaces = async () => {
    try {
      if (session && session.user && token) {
        const response = await axios.get("https://no-country-back.onrender.com/api/users/6622dcc9ce53198f7590c0d3", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data);
        setUser([response.data]); 
        setFavoritos(response.data.favorites)
        console.log(response.data.favorites);
        
      } else {
        throw new Error('No session token available');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  fetchPlaces();
}, [session]);

const recortarTexto = (texto: string, longitudMaxima: number) => {
  if (texto.length > longitudMaxima) {
    return texto.substring(0, longitudMaxima) + '...'; 
  } else {
    return texto;
  }
};




  return (
    <>
    <div>

 <MainHeader />
      <div className=' mb-5 p-4  ml-2 mt-1'>
        <h1 className=' font-aeonik  text-2xl'>Rutas Favoritas</h1>
      </div>
      <section className='  p-4 m-2 '>
      {user.map((user, i) => (
  <div className='grid md:grid-cols-3 gap-3'key={i}>
    {favoritos.map((fav, key) => (
      <div key={key} className=' m-2 '>
        <div className='bg-soft-silver rounded-lg border-gray-200 shadow'>
          <div>
            <a href='#'>
              {/* <Image
                className='size-full rounded-t-lg'
                width={200}
                height={200}
                src={}
                alt='imagen de lugar'
              /> */}
            </a>
          </div>
          <div className='p-2'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-black'>
              {fav.name.charAt(0).toUpperCase() + fav.name.slice(1).toLowerCase()}

              </h5>
            </a>
            <p className='mb-3 font-normal overflow-hidden text-black'>
             {recortarTexto(fav.description,100)

             } 
            </p>
          </div>
          <div className='flex justify-between'>
            <div className='flex m-2'>
              {/* <Image
                className='rounded-full text-center'
                width={20}
                height={20}
                src={fav.user.image}
                alt='imagen de lugar'
              /> */}
              <p className='ml-1 mt-1 overflow-hidden text-center text-black'>
                {user.first_name}
              </p>
            </div>

            <div className='flex justify-center rounded bg-white p-1 m-2'>
              <svg
                width={15}
                className='text-soft-green m-1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z'></path>
              </svg>
              <p className='font-normal text-black mr-3'>{fav.stars}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
))}

      </section>
      <hr />
      </div>
    </>
  )
}

export default favoritos
