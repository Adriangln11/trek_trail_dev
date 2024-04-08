'use client'
import { useState } from 'react';
import run from '../public/run.jpg';

interface Actividad {
  id: number;
  image: string;
  title: string;
}

const CarrouselExplore: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [showPrevButton, setShowPrevButton] = useState<boolean>(false);
  const actividades: Actividad[] = [
    { id: 1, image: run.src, title: 'Trekking' },
    { id: 2, image: run.src, title: 'Correr' },
    { id: 3, image: run.src, title: 'Ciclismo' },
    { id: 4, image: run.src, title: 'Escalada en roca' },
  ];

  const handleClickNext = () => {
    const nextIndex = startIndex + 1 < actividades.length ? startIndex + 1 : 0;
    setStartIndex(nextIndex);
    setShowPrevButton(true);
  };

  const handleClickPrev = () => {
    const prevIndex = startIndex - 1 >= 0 ? startIndex - 1 : actividades.length - 1;
    setStartIndex(prevIndex);
    setShowPrevButton(prevIndex !== 0);
  };

  return (
    <section className="flex flex-col bg-silver content-center">
      <div className="mx-auto">
        <h1 className="text-center font-aeonik">Explorar actividades</h1>
        <div className="relative overflow-hidden">
          <div className="flex flex-row p-10 " style={{ transform: `translateX(-${startIndex * 33.33}%)` }}>
            {actividades.map(actividad => (
              <div key={actividad.id} className="w-1/10 flex justify-center">
                <div className="m-3">
                  <img src={actividad.image} alt={actividad.title} className="rounded-full w-24 h-24" />
                  <div className="text-center">
                    <h2>{actividad.title}</h2>
                  </div>
                </div>
              </div>
            ))}
      
          </div>
          {showPrevButton && 
          <button className="absolute top-1/2 transform -translate-y-10  left-18 " onClick={handleClickPrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
          </button>
          }
          <button className="absolute top-1/2  transform -translate-y-10  right-0" onClick={handleClickNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
          </button>
        </div>
       
      </div>
    </section>
  );
};

export default CarrouselExplore
