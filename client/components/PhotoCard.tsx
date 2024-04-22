"use client";
import Image from "next/image";
export default function PhotoCard({img}: {img: string}) {
  
  return (
    <div className="justify-center w-fit">
      <Image
        className="rounded-[15px] w-[380px] h-[220px] "
        src={img}
        alt="Photo"
        width={400}
        height={400}
      />
    </div>
  );
}
