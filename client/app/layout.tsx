import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import  Footer  from '@/components/Footer'
import CtaNews from '@/components/CtaNews'
import CarrouselExplore from '@/components/CarrouselExplore'
import CardsPlaces from '@/components/CardsPlaces'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aventura Compartida',
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
        <Navbar />
        <CardsPlaces />
        <CarrouselExplore/>

          <Footer />
        {children}
      </body>
    </html>
  )
}
