import React, { useState } from "react";
import "./Step4.css";

import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../components/common/Bhasini/Text";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
  "Ladakh",
  "Jammu and Kashmir",
];

const Step4 = ({ lang }) => {
  const [flat, setFlat] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const addressData = {
      flat,
      street,
      landmark,
      district,
      city,
      state,
      pinCode,
    };
    console.log(addressData);
    // Handle the form data as needed
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
        <div className=" ">
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="custom-dropdown-style"
          >
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className=" ">
          <input
            type="text"
            placeholder={Labels[lang].step4.flatHouse}
            value={flat}
            onChange={(e) => setFlat(e.target.value)}
            className="custom-input-style top"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder={Labels[lang].step4.street}
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="custom-input-style"
          />
        </div>
        <div className="step4input">
          <input
            type="text"
            placeholder={Labels[lang].step4.landmark}
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="custom-input-style"
          />
        </div>
        <div className="step4input">
          <input
            type="text"
            placeholder={Labels[lang].step4.district}
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="custom-input-style"
          />
        </div>
        <div className="step4input">
          <input
            type="text"
            placeholder={Labels[lang].step4.city}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="custom-input-style"
          />
        </div>
        <div className="step4inputbottom">
          <input
            type="text"
            placeholder={Labels[lang].step4.pinCode}
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className="custom-input-style bottom"
          />
        </div>
      </form>
    </div>
  );
};

export default Step4;
