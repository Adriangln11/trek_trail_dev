import Image from "next/image";
import header from "../../public/headerActivities.jpg";
import CardsPlaces from "@/components/CardsPlaces";

const PhotosPage = () => {
  return (
    <div>
      <div className="w-full relative">
        <div className="bg-[#302F2F] w-full m-0 h-[513px] absolute opacity-50 z-10" />
        <Image
          className="h-[513px] relative z-0"
          objectFit="cover"
          src={header}
          alt="Header Photos"
        />
        <div className="absolute z-10 bottom-14">
          <p className="ml-[54px] text-white font-[400] text-[23px]">
            Fotos de la sagrada familia
          </p>
          <p className="ml-[54px] text-white font-[400] text-[23px]">
            Fotos (234)
          </p>
        </div>
      </div>
      <div className="py-12 mx-[24px] border-b-[2px] border-b-[#BDBDBD] h-[200px]">
        <div className="w-[250px] flex flex-col space-y-[10px] px-3">

        <label className="block">Ordenar por</label>
        <select className="border rounded-md h-[46px] border-black px-1">
          <option value="">Fecha</option>
        </select>
        </div>
      </div>
      {/* <CardsPlaces/> */}
      <div className="flex justify-center">
        <button className="rounded-[50px] bg-[#497574] h-[50px] w-[202px] font-[600] text-white my-7">
          Ver mas fotos
        </button>
      </div>
    </div>
  );
};

export default PhotosPage;
