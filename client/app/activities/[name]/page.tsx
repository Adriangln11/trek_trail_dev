'use client'
import Image from 'next/image'
import header from '@/public/headerActivities.jpg'
import ActivitiesPlaces from '@/components/ActivitiesPlaces'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { getTrips } from '@/utils/http.utils'
import { GetTrip } from '@/types/getTrip'

const ActivitiesPage = ({ params }: { params: { name: string } }) => {
  useEffect(() => {
    const getActivity = async () => {
      try {
        const res: any = await getTrips()
        const data = res.data
        const filter = data.filter(
          (trip: any) =>
            trip.activity.toLowerCase() == params.name.toLowerCase()
        )
        
      } catch (e) {
        console.log(e)
      }
    }
    getActivity()
  }, [])
  return (
    <div className='w-full mt-0'>
      <figure>
        <Image
          className='bg-cover m-0 h-[496px] resize-y rounded-none '
          objectFit='cover'
          src={header}
          alt='Header activities'
        />
      </figure>
      <div className='py-8 mx-[24px] border-b-[2px] border-b-[#BDBDBD]	'>
        <h1 className=' font-bold text-[52px]'>{params.name.toUpperCase()}</h1>
      </div>
      <div className='w-full py-10'>
        <h2 className='font-[500] text-[25px] mx-[30px]'>
          Las mejores rutas para ti.
        </h2>
        <ActivitiesPlaces />
      </div>
    </div>
  )
}
export default ActivitiesPage
