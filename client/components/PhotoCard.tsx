"use client";
import Photo from "@/public/cardPlace.jpg";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function PhotoCard() {
  interface City {
    name: string;
    location: string;
    country: string;
    image: string[];
    places: string[];
  }

  const [city, setCity] = useState<City[]>([]);
  const { data: session, status } = useSession();
  const token: string | undefined = session?.user?.token;

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchCity = async () => {
      try {
        if (session && session.user && token) {
          const response = await axios.get(
            "https://no-country-back.onrender.com/api/places",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
          setCity(response.data);
        } else {
          throw new Error("No session token available");
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchCity();
  }, [session, token]);

  console.log(city);
  
  return (
    <div className="justify-center w-fit">
      <Image
        className="rounded-[15px] w-[380px] h-[220px] "
        src={Photo.src}
        alt="Photo"
        width={400}
        height={400}
      />
    </div>
  );
}
