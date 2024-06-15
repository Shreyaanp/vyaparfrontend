import React, { useState } from 'react';
import Stepper from '../components/Onboarding/Stepper.tsx';
import Contactdetails from '../components/Onboarding/OnBoardPages/SellerDetails.tsx';
import Companydetails from '../components/Onboarding/OnBoardPages/ProductDescription.tsx';
import Companytype from '../components/Onboarding/OnBoardPages/Companytype.tsx';
import Companyupload from '../components/Onboarding/OnBoardPages/Companyupload.tsx';
import SearchLang from '../components/Onboarding/OnBoardPages/SearchLang.jsx';

const OnBoardingPages = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center bg-[#B8E1E2] bg-opacity-40 justify-center h-90rem">
        <div className="container w-2/5 bg-white border shadow-lg rounded-[59px] mx-auto h-screen">
          <header className=" h-screen px-2">
            <Stepper />
          </header>
          <main className="flex-grow p-4 h-screen">
            {step === 1 && <SearchLang />}
            {step === 2 && <Contactdetails />}
            {step === 3 && <Companydetails />}
            {step === 4 && <Companytype />}
            {step === 5 && <Companyupload />}
          </main>
          <footer className="flex font-poppins justify-between mx-14 p-8">
            <button
              onClick={handlePrevious}
              className={`bg-white text-[#098F8A] border-2 border-[#098F8A] rounded-3xl px-4 ${
                step === 1 ? 'invisible' : 'visible'
              }`}
            >
              Previous step
            </button>
            <button
              onClick={handleNext}
              className="bg-[#098F8A] text-white border-2 border-[#098F8A] rounded-3xl px-4 "
            >
              Next step
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPages;
