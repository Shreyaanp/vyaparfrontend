// @ts-nocheck

import React from "react";
import img1 from "../../assets/images/onboard1.png";
import img2 from "../../assets/images/onboard2.png";
import img3 from "../../assets/images/onboard3.png";
import Text from "../../Bhasini/Text";

const Step1: React.FC = () => {
  return (
    <div className=" flex flex-col flex-grow md:flex-row mt-0 bg-white px-4 ">
      {/* Left Side */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start">
        <Text
          style={{ fontWeight: "550", fontSize: 55, lineHeight: 1.1 }}
          className="font-normal text-4xl font-lato text-center md:text-left ml-[-20] "
        >
          {`Get your store\nlisted with\nVyapaar Launchpad`}
          {/* It’s easy to get

          your store listed with

          Vyapaar Launchpad */}
        </Text>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center item-center space-y-8">
        <div className="flex items-start">
          <div className="flex-1">
            <Text className="text-2xl font-semibold mb-2">
              1. Enter your Store Details
            </Text>
            <Text className="text-[#848484] text-lg">
              Provide your shop name, address, and other essential information.
              This helps customers find and learn about your offerings.
            </Text>

            <div className="w-full h-0.5 bg-[#ebebeb] mt-2" />
          </div>
          <img
            src={img1}
            alt="Store Details"
            style={{ width: "9.5rem", height: "9.5rem" }}
            className="ml-4"
          />
        </div>
        <div className="flex items-start">
          <div className="flex-1">
            <Text className="text-2xl font-semibold mb-2">
              2. Enter Seller Details
            </Text>
            <Text className="text-[#848484] text-lg">
              Share your name, Aadhar, PAN card and other legal documents. This
              ensures customers can easily reach you for inquiries and orders.
            </Text>
            <div className="w-full h-0.5 bg-[#ebebeb] mt-2" />
          </div>
          <img
            src={img2}
            alt="Seller Details"
            style={{ width: "9.5rem", height: "9.5rem" }}
            className="ml-4"
          />
        </div>
        <div className="flex items-start">
          <div className="flex-1">
            <Text className="text-2xl font-semibold mb-2">
              3. Enter Bank Details
            </Text>
            <Text className="text-[#848484] text-lg">
              Provide your bank account number and bank name securely. This
              enables smooth financial transactions for your business.
            </Text>
            <div className="w-full h-0.5 bg-[#ebebeb] mt-2" />
          </div>
          <img
            src={img3}
            alt="Bank Details"
            style={{ width: "9.5rem", height: "9.5rem" }}
            className="ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
