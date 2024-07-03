import React from "react";
import Text from "../../Bhasini/Text";

const Step10: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col md:flex-row items-center justify-between p-8 px-[88px] bg-white overflow-hidden">
      {/* Left Side */}
      <div className="md:w-1/2 p-8 w-1/2">
        <Text className="text-xl font-semibold mb-2">Step 3</Text>
        <Text className="text-4xl font-medium mb-2 text-left">
          Now let's enter the seller's bank details
        </Text>
        <Text className="text-gray-600 text-lg text-left mb-10">
          In this step, you'll have to provide your bank account number and bank
          to enable smooth financial transactions for your business.
        </Text>
      </div>

      {/* Right Side */}
      <div className="w-1/2 md:w-1/2 p-8">
        <video
          data-testid="video-player"
          autoPlay
          crossOrigin="anonymous"
          playsInline
          preload="auto"
          style={{ objectFit: "cover", width: 493, height: 430 }}
        >
          <source
            src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Step10;
