import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import DefaultLayout from "../../layout/DefaultLayout";
import AddProduct from "../../components/common/AddProduct";
import ProductLinguisticSathi from "../../components/common/ProSathi";
import Breadcrumb from "../../components/common/Breadcum";

const Dashboard: React.FC = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <p className="text-2xl font-medium text-[#575757]">Your Products</p>
      <div
        // className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-4 2xl:gap-0"
        className="flex flex-grow flex-col "
      >
        <div className="md:col-span-2 xl:col-span-4">
          <AddProduct />

          <p className="text-2xl font-medium text-[#575757]">
            Linguistic Sathi (Transliteration)
          </p>
          <ProductLinguisticSathi />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
