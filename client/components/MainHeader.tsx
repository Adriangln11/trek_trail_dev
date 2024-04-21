'use client'

import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import imageHeader1 from '@/public/imageHeader1.svg'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';




interface City {
    Name: string;
    location: string;
    Country: string;
    Image: string[];
    places: string[];
}


  
interface token{
  token: string 
}





const MainHeader = () => {


  const { data: session, status } = useSession()
    const [city,setCity] = useState<City[]>([])
    const [search, setSearch] = useState('');


  const token:string = session?.user?.token ;


  // Función para manejar los cambios en el campo de búsqueda
  const handleSearchChange = (event:any) => {
    setSearch(event.target.value);
   
  };



  useEffect(() => {
    const fetchCities = async () => {
      try {
        if (session && session.user && token) {

          const queryString = `search=${encodeURIComponent(search)}`

          const response = await axios.get(`https://no-country-back.onrender.com/api/city`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          console.log(response.data);
          setCity([response.data.name]);
        } else {
          throw new Error('No session token available');
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
  
    fetchCities();
  }, []);
  



  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Aquí puedes enviar la consulta de búsqueda a través de una función o realizar alguna otra acción
    console.log('Consulta de búsqueda:', search);
  };








  return (
    <div>
      <div className='relative'>
        <figure>
          <Image
            src={imageHeader1}
            alt='Paisaje aleatorio'
            className='w-full my-6'
            objectFit='cover'
          />
        </figure>
        <form action="" onSubmit={handleSubmit}>
        <div className='absolute left-0 right-0 -bottom-10 flex justify-center'>
          <div className='flex justify-center md:w-3/4 lg:w-2/4 w-3/4 p-5 relative'>
            <input
               onChange={(event) => setSearch(event.target.value)}
              type='text'
              name='search'
              className='bg-gray-50 outline outline-1 outline-light text-gray-900 text-sm rounded-full  focus:outline-2 block w-full p-5 placeholder:italic pl-20 shadow-sm'
              placeholder='Buscar por ciudad, parque, o nombre de la ruta'
           
           
           />
         
            <button type='submit' className='absolute inset-y-0 left-10 text-dark/50 flex items-center'>
              <FaSearch />
            </button>
          </div>
          
        </div>
        </form>
      </div>
    </div>
  )
}
export default MainHeader
