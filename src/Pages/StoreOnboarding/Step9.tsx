import React, { useState, DragEvent, ChangeEvent } from "react";
import photos from "../../assets/Icons/photos.svg";
import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../Bhasini/Text";

interface Step9Props {
  lang: string;
}

const Step9: React.FC<Step9Props> = ({ lang }) => {
  const [aadharImages, setAadharImages] = useState<string[]>([]);
  const [panImages, setPanImages] = useState<string[]>([]);
  const [addressProofImages, setAddressProofImages] = useState<string[]>([]);
  const [gstImages, setGstImages] = useState<string[]>([]);

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    setImageState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const files = Array.from(event.target.files || []);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImageState((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement>,
    setImageState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImageState((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const renderImageUploadSection = (
    images: string[],
    setImageState: React.Dispatch<React.SetStateAction<string[]>>,
    label: string
  ) => (
    <div
      className="w-1/2 h-52 border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center text-center relative"
      onDrop={(event) => handleDrop(event, setImageState)}
      onDragOver={handleDragOver}
    >
      {images.length !== 0 ? (
        <div className="w-full flex flex-wrap justify-center gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Upload ${index + 1}`}
              style={{ width: "8rem", height: "8rem" }}
              className="object-cover rounded-md"
            />
          ))}
        </div>
      ) : (
        <>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(event) => handleImageUpload(event, setImageState)}
            className="hidden"
            id={`fileInput-${label}`}
          />
          <label
            htmlFor={`fileInput-${label}`}
            className="flex flex-col justify-center items-center cursor-pointer"
          >
            <img src={photos} alt="Upload Icon" className="w-12 h-12 mb-2" />
            <Text className="text-xl font-bold m-0 p-0">{label}</Text>
            <Text className="text-black cursor-pointer m-0 p-0">
              {Labels[lang].step6.txt3}
            </Text>
          </label>
        </>
      )}
    </div>
  );

  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <div>
        <Text className="text-4xl font-medium mb-2 text-left">
          Upload Seller Documents
        </Text>
        <Text className="text-lg text-left mb-10 text-gray-600">
          You'll have to upload the following documents to get your store
          listed.
        </Text>

        <div className="flex-grow flex flex-row gap-4">
          {renderImageUploadSection(
            aadharImages,
            setAadharImages,
            "Aadhar Card"
          )}
          {renderImageUploadSection(panImages, setPanImages, "Pan Card")}
        </div>

        <div className="flex-grow flex flex-row gap-4 mt-4">
          {renderImageUploadSection(
            addressProofImages,
            setAddressProofImages,
            "Shop Address Proof"
          )}
          {renderImageUploadSection(gstImages, setGstImages, "GST Certificate")}
        </div>
      </div>
    </div>
  );
};

export default Step9;
