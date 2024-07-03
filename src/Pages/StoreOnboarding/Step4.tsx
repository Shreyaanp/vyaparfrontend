import React, { useState } from "react";
import "./Step4.css";
import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../Bhasini/Text";

const indianStates: string[] = [
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

interface Step4Props {
  lang: string;
}

const Step4: React.FC<Step4Props> = ({ lang }) => {
  const [flat, setFlat] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [landmark, setLandmark] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pinCode, setPinCode] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
        <div>
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
        <div>
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
        <button type="submit" className="custom-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step4;
