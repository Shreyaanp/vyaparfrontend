import React, { FunctionComponent } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import StoreImg from "../../assets/images/storeImg.png";
import Text from "../../Bhasini/Text";

const MyStore: FunctionComponent = () => {
  return (
    <section className="p-5 bg-[#FFE9A9] h-full w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-5 bg-[#FFE9A9]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center p-5 bg-white rounded-lg shadow">
            <div className="flex items-center gap-5">
              <img
                className="w-20 h-20 rounded-lg object-cover"
                loading="lazy"
                alt="Store"
                src={StoreImg}
              />
              <div className="flex flex-col gap-2 text-black">
                <div className="text-2xl font-bold text-[#333]">
                  <Text>Prerana’s Shop</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-black">
                    <Text>+91 9452624111</Text>
                  </div>
                  <div className="text-black">
                    <Text>animesh@civiccraft.in</Text>
                  </div>
                  <div className="text-black">
                    <Text>
                      Highway Tower Sector-62, Gautam Buddha Nagar, Noida 201309
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <button className="px-4 py-2 bg-[#006a66] text-white rounded hover:bg-[#005753]">
                <Text>Edit</Text>
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex-1 p-5 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-2.5">
                <b className="text-xl text-[#333]">Seller’s Details</b>
                <button className="px-4 py-2 bg-[#006a66] text-white rounded hover:bg-[#005753]">
                  <Text>Edit</Text>
                </button>
              </div>
              <div className="h-px bg-[#e0e0e0] my-2.5"></div>
              <div className="flex flex-col gap-2">
                <div className="text-black">
                  <Text>Name: Prerana Bhandari</Text>
                </div>
                <div className="text-black">
                  <Text>Contact: +91 9452624111</Text>
                </div>
                <div className="text-black">
                  <Text>GST Number: AALCC6060G</Text>
                </div>
                <div className="text-black">
                  <Text>FSSAI License: AALCC6060G</Text>
                </div>
                <div className="text-black">
                  <Text>PAN No.: AALCC6060G</Text>
                </div>
              </div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-lg shadow">
              <div className="flex justify-between items-center mb-2.5">
                <b className="text-xl text-[#333]">
                  <Text>Bank Details</Text>
                </b>
                <button className="px-4 py-2 bg-[#006a66] text-white rounded hover:bg-[#005753]">
                  <Text>Edit</Text>
                </button>
              </div>
              <div className="h-px bg-[#e0e0e0] my-2.5"></div>
              <div className="flex flex-col gap-2">
                <div className="text-black">
                  <Text>Account Holder: Prerana Bhandari</Text>
                </div>
                <div className="text-black">
                  <Text>Account No.: XXXXXXXXXXXXX4321</Text>
                </div>
                <div className="text-black">
                  <Text>Bank Name: IDFC First Bank</Text>
                </div>
                <div className="text-black">
                  <Text>IFSC Code: AALCC6060G</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStore;
