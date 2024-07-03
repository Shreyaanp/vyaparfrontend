import React from "react";
import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../Bhasini/Text";

import food from "../../assets/Icons/Food.svg";
import beauty from "../../assets/Icons/beauty.svg";
import electronics from "../../assets/Icons/electronics.svg";
import fashion from "../../assets/Icons/fashion.svg";
import fitness from "../../assets/Icons/fitness.svg";
import hotel from "../../assets/Icons/hotel.svg";
import liquor from "../../assets/Icons/liquor.svg";
import pharmacy from "../../assets/Icons/pharmacy.svg";
import stationary from "../../assets/Icons/stationary.svg";

const cards = [
  { img: food, label: "Food" },
  { img: fashion, label: "Fashion" },
  { img: electronics, label: "Electronics" },
  { img: beauty, label: "Beauty" },
  { img: pharmacy, label: "Pharmacy" },
  { img: fitness, label: "Fitness" },
  { img: liquor, label: "Liquor" },
  { img: stationary, label: "Stationary" },
  { img: hotel, label: "Hotel" },
];

interface CompProps {
  lang: string;
  proCat: string;
  setProCat: React.Dispatch<React.SetStateAction<string>>;
}

const Step2: React.FC<CompProps> = ({ lang, proCat, setProCat }) => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center  p-8 overflow-hidden">
      <div className="mb-10 mt-4">
        <Text className="text-4xl font-medium text-center font-lato">
          Which of these best describes your products?
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`border-[1.5px] rounded-lg p-4 pt-10 flex flex-col items-left cursor-pointer
                w-[180px] hover:shadow-lg hover:border-black transition duration-300 ease-in-out
                 ${
                   proCat === card.label
                     ? "border-black shadow-lg"
                     : "border-gray-300"
                 }`}
            onClick={() => setProCat(card.label)}
          >
            <img src={card.img} alt="icon" className="w-10 h-10 mb-2" />
            <Text className="font-lato">{card.label}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;
