import React from "react";
import Profile from "../../assets/images/profile.png";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-3 bg-yellow-50 shadow-sm font-poppins">
      <h1 className="text-2xl font-normal text-[#45464E]">Home</h1>
      <div className="flex items-center space-x-4">
        <select className="bg-transparent p-1 rounded border border-[1.5px] border-gray-300 outline-none">
          <option>Hindi</option>
          <option>English</option>
          <option>Marathi</option>
          <option>Bangla</option>
          <option>Odia</option>
          <option>Tamil</option>
          <option>Telugu</option>
          <option>Kannada</option>
          <option>Punjabi</option>
          <option>Assamese</option>
          <option>Malayam</option>
        </select>
        <img
          className="w-10 h-10 rounded-full"
          src={Profile}
          alt="User Avatar"
        />
      </div>
    </header>
  );
};

export default Header;
