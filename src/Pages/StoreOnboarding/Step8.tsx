import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Step4.css";

import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../Bhasini/Text";

interface Step8Props {
  lang: string;
}

const Step8: React.FC<Step8Props> = ({ lang }) => {
  const [name, setName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [aadhar, setAadhar] = useState<string>("");
  const [pan, setPan] = useState<string>("");
  const [fassai, setFassai] = useState<string>("");
  const [gst, setGST] = useState<string>("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center">
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
          placeholder="Enter your Name"
          value={name}
          onChange={handleInputChange(setName)}
          className="custom-name-style"
        />

        <input
          type="text"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={handleInputChange(setCompanyName)}
          className="custom-input-style top"
        />

        <input
          type="text"
          placeholder="Enter Aadhar number"
          value={aadhar}
          onChange={handleInputChange(setAadhar)}
          className="custom-input-style"
        />

        <input
          type="text"
          placeholder="Enter Pan card number"
          value={pan}
          onChange={handleInputChange(setPan)}
          className="custom-input-style"
        />

        <input
          type="text"
          placeholder="Enter GSTIN number"
          value={gst}
          onChange={handleInputChange(setGST)}
          className="custom-input-style"
        />

        <div className="step4inputbottom">
          <input
            type="text"
            placeholder="Enter FASSAI License"
            value={fassai}
            onChange={handleInputChange(setFassai)}
            className="custom-input-style bottom"
          />
        </div>
      </form>
    </div>
  );
};

export default Step8;
