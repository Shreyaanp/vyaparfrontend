import React, { useState } from "react";
import "./Step4.css";

import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../components/common/Bhasini/Text";

const BankDetails = ({ lang }) => {
  const [name, setName] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [bankName, setBankName] = useState("");
  const [ifsc, setIfscCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center ">
      <div className="w-[38rem]">
        <Text className="text-4xl font-medium mb-2 text-left font-lato text-black-500">
          Enter Bank Details to get started with Vyapar Launchpad
        </Text>
        <Text className="text-lg text-left mb-10 text-gray-600">
          {Labels[lang].step4.desc}
        </Text>
      </div>
      <form className="w-[38rem]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={"Account Holder Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="custom-name-style "
        />

        <input
          type="text"
          placeholder={"Account Number"}
          value={accountNum}
          onChange={(e) => setAccountNum(e.target.value)}
          className="custom-input-style top "
        />

        <input
          type="text"
          placeholder={"Bank Name"}
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          className="custom-input-style "
        />

        <div className="step4inputbottom">
          <input
            type="text"
            placeholder={"IFSC code"}
            value={ifsc}
            onChange={(e) => setIfscCode(e.target.value)}
            className="custom-input-style bottom "
          />
        </div>
      </form>
    </div>
  );
};

export default BankDetails;
