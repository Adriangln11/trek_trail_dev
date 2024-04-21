"use client";
import Image from "next/image";
import header from "@/public/headerActivities.jpg";
import ActivitiesPlaces from "@/components/ActivitiesPlaces";
import { useParams } from "next/navigation";

const ActivitiesPage = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div className="w-full mt-0">
      <figure>
        <Image
          className="bg-cover m-0 h-[496px] resize-y rounded-none "
          objectFit="cover"
          src={header}
          alt="Header activities"
        />
      </figure>
      <div className="py-8 mx-[24px] border-b-[2px] border-b-[#BDBDBD]	">
        <h1 className=" font-bold text-[52px]">{decodeURIComponent(name)}</h1>
        <div className="w-[250px] flex flex-col space-y-[10px]">
          <label className="block">Ordenar por</label>
          <select className="border rounded-md h-[46px] border-black px-1">
            <option value="">Fecha</option>
          </select>
        </div>
      </div>
      <div className="w-full py-10">
        <h2 className="font-[500] text-[25px] mx-[30px]">
          Las mejores rutas para ti.
        </h2>
        <ActivitiesPlaces />
      </div>
    </div>
  );
};
export default ActivitiesPage;
