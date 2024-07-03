import { Link } from "react-router-dom";
import React from "react";

interface HeadingProps {
  pageName: string;
}
const Heading = ({ pageName }: HeadingProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-inter font-semibold text-black dark:text-white">
        {pageName}
      </h2>
    </div>
  );
};

export default Heading;
