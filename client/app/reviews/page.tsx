"use client";
import { CommentModal } from "@/components/CommentModal";
import MyReviews from "@/components/MyReviews";
import photo from "@/public/person.png";
import Image from "next/image";
import { useState } from "react";

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
      <MyReviews/>
    </section>
  );
};
export default ReviewPage;
