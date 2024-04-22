import photo from "@/public/person.png";
import Image from "next/image";

const ReviewPage = () => {
  return (
    <section className="h-[1000px] w-full bg-[#D9D9D9] flex flex-col items-center py-10">
      <div className=" px-6 h-[200px] w-[80%] bg-white flex items-center rounded-[6px]">
        <Image
          className="rounded-full h-[120px]"
          width={120}
          height={70}
          src={photo.src}
          alt="Profile"
        />
        <h4 className="font-bold text-4xl mx-2">
          Robert Eduardo Domínguez Rodriguez
        </h4>
      </div>
      <div className="relative bg-white w-[80%] h-[600px] mt-9 rounded-[6px] flex flex-col items-center">
        <div className="w-[95%] border-b border-[#707070] bg-white h-24 flex items-center">
          <h4 className="font-bold text-xl text-center  ml-7 mt-8">
            Mis Reseñas
            <div className="h-1 bg-black rounded-[20px] w-[195px] shadow"></div>
          </h4>
        </div>
        <div className="absolute bottom-5">
          <button className="rounded-[50px] bg-[#497574] h-[50px] w-[240px] font-[600] text-white my-7">
            Crear reseña
          </button>
        </div>
      </div>
        
    </section>
  );
};
export default ReviewPage;
