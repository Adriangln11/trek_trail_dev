import Image from 'next/image';


import place1 from '../public/place1.jpeg';
const bgImage = () => (
  

  <div className=" ">
    <img src={place1.src} width={100} height={100} className="size-fit" alt="bg images" />
  </div>
   
);

export default bgImage;
