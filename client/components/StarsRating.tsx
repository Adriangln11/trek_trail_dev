import StartFill from "@/components/starFill";
import StartNoFill from "@/components/starNoFill";
import { useState } from "react";

const StarsRating = () => {
  const [selectedStar, setSelectedStar] = useState(0); // track selected star

  const handleClick = (newValue: number) => {
    setSelectedStar(newValue);
  };

  return (
    <div className="flex items-center mt-1">
      {[1, 2, 3, 4, 5].map((number) => (
        <span
          key={number}
          className={`cursor-pointer font-bold text-3xl mx-1 ${
            number <= selectedStar ? "text-teal" : "text-gray-400"
          }`}
          onClick={() => handleClick(number)}
        >
          {number <= selectedStar ? <StartFill /> : <StartNoFill />}
        </span>
      ))}
    </div>
  );
};

export default StarsRating;
