import React, { useState } from "react";
import "./Step4.css";

import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../components/Bhasini/Text";

const Step8 = ({ lang }) => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [fassai, setFassai] = useState("");
  const [gst, setGST] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center ">
      <div className="w-[38rem]">
        <Text className="text-4xl font-medium mb-2 text-left font-lato text-black-500">
          {Labels[lang].step4.heading}
        </Text>
        <Text className="text-lg text-left mb-10 text-gray-600">
          {Labels[lang].step4.desc}
        </Text>
      </div>
      <form className="w-[38rem]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={"Enter your Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="custom-name-style "
        />

        <input
          type="text"
          placeholder={"Enter Company Name"}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="custom-input-style top "
        />

        <input
          type="text"
          placeholder={"Enter Aadhar number"}
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          className="custom-input-style "
        />

        <input
          type="text"
          placeholder={"Enter Pan card number"}
          value={pan}
          onChange={(e) => setPan(e.target.value)}
          className="custom-input-style "
        />

        <input
          type="text"
          placeholder={"Enter GSTIN number"}
          value={gst}
          onChange={(e) => setGST(e.target.value)}
          className="custom-input-style "
        />

        <div className="step4inputbottom">
          <input
            type="text"
            placeholder={"Enter FASSAI License"}
            value={fassai}
            onChange={(e) => setFassai(e.target.value)}
            className="custom-input-style bottom"
          />
        </div>
      </form>
    </div>
  );
};

export default Step8;
