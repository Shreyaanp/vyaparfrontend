import React from 'react';
import upload from '../../images/upload/upload.svg';
import UploadForm from './UploadForm';

// Header component
const Header = () => {
  return (
    <header className="bg-gray-800 text-[#2E3271] py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl mt-4 text-center font-bold">
          Upload Book Of Your Choice
        </h1>
      </div>
    </header>
  );
};

// UploadBook component
const UploadBook = () => {
  return (
    <div className="bg-white rounded-3xl">
      {/* Include the Header component */}
      <Header />

      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left side with image */}
        <div className="w-full lg:w-1/2 p-8 flex justify-center items-center">
          <img
            src={upload}
            alt="Your Image"
            className="w-full h-auto max-w-md"
          />
        </div>
        {/* Right side with upload document form */}
        <div className="w-full lg:w-1/2 p-8 mb-12">
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default UploadBook;
