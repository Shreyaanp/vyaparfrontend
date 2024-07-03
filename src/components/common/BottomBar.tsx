import React from "react";
import { useNavigate } from "react-router-dom";

interface BottomBarProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const BottomBar: React.FC<BottomBarProps> = ({ step, setStep }) => {
  const navigate = useNavigate();
  const label = (step: number) => {
    if (step === 1) {
      return "Get Started";
    } else if (step === 13) {
      return "Finish";
    } else {
      return "Next";
    }
  };

  const handleOnClick = (step: number) => {
    // console.log("this is step:", step);
    console.log("step", step);
    if (step == 13) {
      navigate("/dashboard");
    } else {
      setStep(step + 1);
    }
  };
  return (
    <div
      className={`
        ${/*fixed bottom-0 bg-[#f6f6f6]*/ ""} 

        flex w-full
        border-t-[1px] border-[#ebebeb]
         ${step !== 1 ? "justify-between" : "justify-end"} 
          
          py-4 px-8`}
    >
      <button
        onClick={() => {
          if (step === 1) return;
          setStep(step - 1);
        }}
        className={`
          ${step === 1 ? "hidden" : ""}
          text-black font-semibold py-3 px-10  md:w-auto
          font-lato
        `}
      >
        Back
      </button>
      <button
        onClick={() => {
          handleOnClick(step);
        }}
        className={`
          bg-[#FCBD01]
          ${step === 1 ? "w-[200px] md:w-auto" : ""}
          text-black font-semibold py-3 px-10 rounded-xl  
          font-lato
        `}
      >
        {label(step)}
      </button>
    </div>
  );
};

export default BottomBar;
