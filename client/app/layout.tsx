import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import Provider from '@/contexts/Providers'
import  Footer  from '@/components/Footer'
import CtaNews from '@/components/CtaNews'
import CarrouselExplore from '@/components/CarrouselExplore'
import CardsPlaces from '@/components/CardsPlaces'
import PlaceSpecific from './placeSpecific/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trek Trails',
  description: 'Comparte tus experiencias, descubre nuevos destinos, y mas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container-fluid max-w-screen-2xl m-auto'>
          <Provider>
            <Navbar />
{/*           
              {/* <CardsPlaces />
              <CarrouselExplore/>
            */}
            
            <Footer />
          </Provider>
     
        </div>

   
      </body>
    </html>
  )
}
