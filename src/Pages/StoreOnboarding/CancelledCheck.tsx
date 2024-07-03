import React, { useState, DragEvent, ChangeEvent } from "react";
import photos from "../../assets/Icons/photos.svg";
import Text from "../../Bhasini/Text";

interface CancelledCheckProps {
  lang: string;
}

const CancelledCheck: React.FC<CancelledCheckProps> = ({ lang }) => {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...imageUrls]);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <div className="mt-[-20px]">
        <Text className="text-4xl font-medium mb-2 text-left">
          Upload Cancelled Bank Cheque
        </Text>
        <Text className="text-lg text-left mb-10 text-gray-600">
          Please upload a cancelled cheque/ bank statement/ passbook cover to
          verify your bank details
        </Text>

        <div
          className="h-72 border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center text-center relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {images.length !== 0 ? (
            <div className="w-full flex flex-wrap justify-center gap-2 mt-5">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Upload ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-md"
                />
              ))}
            </div>
          ) : (
            <>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="flex flex-col justify-center items-center cursor-pointer"
              >
                <img
                  src={photos}
                  alt="Upload Icon"
                  className="w-12 h-12 mb-2"
                />
                <Text className="text-xl font-bold m-0 p-0">
                  Drag your photos here
                </Text>

                <Text className="text-black underline cursor-pointer m-0 p-0">
                  Upload from your device
                </Text>
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CancelledCheck;
