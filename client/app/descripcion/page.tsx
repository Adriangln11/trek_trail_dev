
'use client'

import Image from 'next/image';
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import axios from 'axios';

import place1 from '../../public/place1.jpeg';
import Link from 'next/link';
import emptyUser from '@/public/emptyUser.svg'
import imageReview3 from '@/public/imageReview3.svg'





interface token{
    token: string
  }
  interface Place {
    _id: string;
    userId: string;
    name: string;
    comments: string[];
    placeId: {
      _id: string;
      name: string;
      location: string;
      country: string;
      comments: string[];
      __v: number;
    };
    description: string;
    stars: number;
    activity: string;
    photo: string;
    date: string;
    __v: number;
  }
  
  interface Comment {
    userId: string; 
    text: string;
    respondsId?: string; 
    date: string; 
    placeId: string;
    image: string; 
  }


interface idComment{
  Id: string;
}

const descripcion=()=>{







    const { data: session, status } = useSession()
    const [place, setPlace] = useState<Place[]>([]);
    const [comment, setComment] = useState<Comment[]>([])
    const [idComment, setIdComment] = useState<idComment[]>([])

    const token:string =session?.user?.token;
    
    useEffect(() => {
      const fetchPlaces = async () => {
        try {
          if (session && session.user && token) {
            const response = await axios.get("https://no-country-back.onrender.com/api/trip", {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
            console.log(response.data);
            // console.log(response.data.comments);
            console.log(response.data[0].placeId)
            setPlace(response.data.trip["placeId"]);
          } else {
            throw new Error('No session token available');
          }
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
    
      fetchPlaces();
    }, [session]);
    
    
       
    useEffect(() => {
      const fetchPlaces = async () => {
        try {
          if (session && session.user && token) {
            const response = await axios.get(`https://no-country-back.onrender.com/api/trip`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });

          } else {
            throw new Error('No session token available');
          }
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
    
      fetchPlaces();
    }, []);
    
    // useEffect(() => {
    //   const fetchPlaces = async () => {
    //     try {
    //       if (session && session.user && token) {
    //         const response = await axios.get(`https://no-country-back.onrender.com/api/comments/${}`, {
    //           headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //           }
    //         });
    //         console.log(response.data);
    //         console.log(response.data.comments);
            
    //         setComment(response.data);
    //       } else {
    //         throw new Error('No session token available');
    //       }
    //     } catch (error) {
    //       console.error('There was a problem with the fetch operation:', error);
    //     }
    //   };
    
    //   fetchPlaces();
    // }, [session]);
    












    return (
      <div>

 
      <section>
        
        {place.map((place) => (
          <div key={place._id} className="flex flex-col">
            <div className="">
              <h1>{place.placeId && place.placeId.country}</h1>
              <Image src={place1.src} width={1612} height={100} className="size-full" alt="bg images" />
            </div>
    
            <div className='bg-soft-green font-aeonik flex justify-between pl-10 p-2 pr-10 '>
              <div className='flex flex-col justify-center '>
                <Link href='/' className='text-black bg-white rounded-full p-4 m-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3Z"></path></svg>
                </Link>
                <p className="text-white">Fotos</p>
              </div>
              <div className='flex flex-col justify-center'>
                <Link href='/' className='text-black  bg-white rounded-full p-4 m-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8L14 22.5ZM15.8387 17H21V8.10256H7V17H11.2H12.1613L14 19.2984L15.8387 17ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path></svg>
                </Link>
                <p className="text-white">Comentarios</p>
              </div>
              <div className='flex flex-col'>
                <Link href='/' className='text-black bg-white rounded-full p-4 m-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                </Link>
                <p className="text-white">Guardar</p>
              </div>
              <div className='flex flex-col'>
                <Link href='/' className='text-black bg-white rounded-full p-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path></svg>
                </Link>
                <p className="text-white">Compartir</p>
              </div>
            </div>
    
            <div className='p-3'>
              <div className=' font-aeonik text-black p-4'>
                <h1 className=' m-5 font-aeonik text-black text-2xl'>Descripción</h1>
                <p>{place.description}</p>
              </div>
    
              <div className='flex font-aeonik  text-black'>
                <h4 className='m-3'>Fotos(4)</h4>
                <h4 className='m-3'>Comentarios(4)</h4>
              </div>
              <hr />
              <div className='flex flex-col'>
                <h6>Ordenar por puntaje</h6>
                <div></div>
                <div className='flex flex-row '>
                  <form className="  ">
                    <select id="Puntaje" className="pl-5 p-4 pr-2 bg-gray-50 border  text-sm rounded-lg ">
                      <option selected>Puntaje</option>
                      <option value="5">5</option>
                      <option value="4">4</option>
                      <option value="3">3</option>
                      <option value="2">2</option>
                      <option value="1">1</option>
                    </select>
                  </form>
                  <div className="">
                    <button className=' text-white rounded-full font-bold bg-soft-green p-2'>Escribir Comentario</button>
                  </div>
                </div>
                <hr />
              </div>
            </div> 
    
            {comment.slice(0,3).map((comment,key) => (
              <div  className="  ">
                <div className='flex justify-between m-3 p-1 '>
                  <div className='flex '>
                    <Image
                      src={session?.user?.image ?? emptyUser}
                      alt='Imagen de perfil de usuario'
                      width={40}
                      height={40}
                    />
                 
                  <div className=' ml-2 flex flex-col'>
                    <h4 className=' ml-1 mt-1 overflow-hidden text-center text-black '>
                      {session?.user?.name}
                     
                    </h4>
                    {<p>{comment.date?.split("T")[0]}</p> } 1
                  </div>
                <div className='mr-6 mt-3'>
                  <button>
                    <svg width="3" height="33" className="text-black" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 32.1428L0 25.7143H2.89286L2.89286 32.1428H0ZM0 19.2857L0 12.8571H2.89286L2.89286 19.2857H0ZM0 6.42854L0 -3.8147e-05H2.89286L2.89286 6.42854H0Z" fill="black" fillOpacity="0.85" />
                    </svg>
                  </button>
                  </div>
                </div>
                
              </div>
              <div className='mt-2 p-2'>
           {comment.placeId}
          
          </div>
          <div className="mt-2 flex md:flex-col">
            {/* <Image src={comment.image.} width={100} height={100} className='mr-3' alt="imagen de lugar ">

            </Image> */}

          </div>
       
           </div> 
               ))} 
                </div>  
         ))}
      </section>
      </div>  
      
  );
    
    
}
export default descripcion;
