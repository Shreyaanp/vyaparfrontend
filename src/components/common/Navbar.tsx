import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-4xl font-bold text-black-600 font-ubuntu">
        Vya<span className="text-[#FCBD01]">par</span> Launch
        <span className="text-[#FCBD01]">pad</span>
      </div>
      <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">
        Exit
      </button>
    </nav>
  );
};

export default Navbar;
