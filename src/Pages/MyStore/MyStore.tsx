import React, { FunctionComponent } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import StoreImg from "../../assets/images/storeImg.png";

const MyStore: FunctionComponent = () => {
  return (
    <DefaultLayout>
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
                    Prerana’s Shop
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-black">+91 9452624111</div>
                    <div className="text-black">animesh@civiccraft.in</div>
                    <div className="text-black">
                      Highway Tower Sector-62, Gautam Buddha Nagar, Noida 201309
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <button className="px-4 py-2 bg-[#006a66] text-white rounded hover:bg-[#005753]">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-1 p-5 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center mb-2.5">
                  <b className="text-xl text-[#333]">Seller’s Details</b>
                  <button className="px-4 py-2 bg-[#006a66] text-white rounded hover:bg-[#005753]">
                    Edit
                  </button>
                </div>
                <div className="h-px bg-[#e0e0e0] my-2.5"></div>
                <div className="flex flex-col gap-2">
                  <div className="text-black">Name: Prerana Bhandari</div>
                  <div className="text-black">Contact: +91 9452624111</div>
                  <div className="text-black">GST Number: AALCC6060G</div>
                  <div className="text-black">FSSAI License: AALCC6060G</div>
                  <div className="text-black">PAN No.: AALCC6060G</div>
                </div>
              </div>
              <div className="flex-1 p-5 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center mb-2.5">
                  <b className="text-xl text-[#333]">Bank Details</b>
                  <button className="px-4 py-2 bg-[#006a66] text-white rounded hover:bg-[#005753]">
                    Edit
                  </button>
                </div>
                <div className="h-px bg-[#e0e0e0] my-2.5"></div>
                <div className="flex flex-col gap-2">
                  <div className="text-black">
                    Account Holder: Prerana Bhandari
                  </div>
                  <div className="text-black">
                    Account No.: XXXXXXXXXXXXX4321
                  </div>
                  <div className="text-black">Bank Name: IDFC First Bank</div>
                  <div className="text-black">IFSC Code: AALCC6060G</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default MyStore;
