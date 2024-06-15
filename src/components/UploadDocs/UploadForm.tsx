import React, { useState } from 'react';
import tick from '../../images/upload/tick.svg';
import btn from '../../images/upload/generatebtn.svg';

const UploadForm = () => {
  const [uploaded, setUploaded] = useState(false);

  const handleFileUpload = () => {
    // Logic to handle file upload goes here
    // For simplicity, let's just set uploaded to true after a brief delay
    setTimeout(() => {
      setUploaded(true);
    }, 2000); // Simulating a delay of 2 seconds
  };

  return (
    <div className="w-full md:w-[500px] h-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6 flex flex-col justify-center items-center">
      {uploaded ? (
        <div className="text-center">
          <img className="mx-auto h-28 w-24" src={tick} alt="Tick mark" />
          <h3 className="mt-2 text-xl font-medium text-green-500">
            Document uploaded
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0">
            {/* Left dropdown */}
            <select className="bg-gray-200 text-lg  border-[#865DFF] border-2 p-2 rounded-md mr-0 md:mr-2">
              <option value="">English</option>
              {/* Add options for left dropdown here */}
            </select>
            {/* Right dropdown */}
            <select className="bg-gray-200 p-2 text-lg border-[#865DFF] border-2 rounded-md ml-0 md:ml-2">
              <option value="">Hindi</option>
              {/* Add options for right dropdown here */}
            </select>
          </div>
          {/* Generate audio book button */}
          <button className="mt-8 bg-[#865DFF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <img className="h-8 w-18 mx-4" src={btn} alt="Logo" />
            Generate Audio Book
          </button>
        </div>
      ) : (
        <div className="text-center">
          <img
            className="mx-auto h-12 w-12"
            src="https://www.svgrepo.com/show/357902/image-upload.svg"
            alt="Upload icon"
          />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label htmlFor="file-upload" className="relative cursor-pointer">
              <span>Drag and drop</span>
              <span className="text-indigo-600"> or browse</span>
              <span> to upload</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                onChange={handleFileUpload}
                className="sr-only"
              />
            </label>
          </h3>
          <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
