import React, { useState, useEffect } from "react";

import CardDataStats from "../../components/common/CardDataStats";
import Heading from "./Heading";
import DefaultLayout from "../../layout/DefaultLayout";

import Table from "./Table";

const TourPackage: React.FC = () => {
  return (
    <DefaultLayout>
      <p className="text-2xl font-medium text-[#575757]">Your Products</p>

      <div className="flex flex-col gap-10 m-6">
        <Table />
      </div>
    </DefaultLayout>
  );
};

export default TourPackage;
