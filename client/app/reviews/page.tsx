"use client";
import MyReviews from "@/components/MyReviews";
import { useSession } from "next-auth/react";
import Image from "next/image";
import emptyUser from "@/public/emptyUser.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ReviewPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

useEffect(() => {
  if(!session){
    router.push('/')
  }
},[router, session])
  return (
    <section className="h-[1000px] w-full bg-[#D9D9D9] flex flex-col items-center py-10 font-aeonik">
      <div className=" px-6 h-[200px] w-[80%] bg-white flex items-center rounded-[6px]">
        <Image
          className="rounded-full h-[120px]"
          width={120}
          height={70}
          src={session?.user?.image || emptyUser}
          alt="Profile"
        />
        <div>
          <h4 className="font-bold text-4xl">{session?.user?.name}</h4>
          <small className="text-xs text-soft-gray">
            {session?.user?.email}
          </small>
        </div>
      </div>
      <MyReviews/>;
     
    </section>
  );
};
export default ReviewPage;
