// import React, { useState } from "react";
// import photos from "../../assets/Icons/photos.svg";
// import Labels from "../../Contexts/StoreOnboarding";
// import Text from "../../components/Bhasini/Text";

// const Step9 = ({ lang }) => {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const imageUrls = files.map((file) => URL.createObjectURL(file));
//     setImages(imageUrls);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const files = Array.from(event.dataTransfer.files);
//     const imageUrls = files.map((file) => URL.createObjectURL(file));
//     setImages([...images, ...imageUrls]);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="flex-grow flex flex-col justify-center items-center">
//       <div
//       //   className="mt-[-20px]"
//       >
//         <Text className="text-4xl font-medium mb-2 text-left">
//           Upload Seller Documents
//         </Text>
//         <Text className="text-lg text-left mb-10 text-gray-600">
//           You'll have to upload the following documents to get your store
//           listed.
//         </Text>

//         <div className="flex-grow flex flex-row gap-4 ">
//           <div
//             className=" w-1/2 h-52 border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center text-center relative"
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//           >
//             {images.length !== 0 ? (
//               <div className="w-full flex flex-wrap justify-center gap-2">
//                 {images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     alt={`Upload ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded-md"
//                   />
//                 ))}
//               </div>
//             ) : (
//               <>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                   id="fileInput"
//                 />
//                 <label
//                   htmlFor="fileInput"
//                   className="flex flex-col justify-center items-center cursor-pointer"
//                 >
//                   <img
//                     src={photos}
//                     alt="Upload Icon"
//                     className="w-12 h-12 mb-2"
//                   />
//                   <Text className="text-xl font-bold m-0 p-0">Aadhar Card</Text>

//                   <Text className="text-black  cursor-pointer m-0 p-0">
//                     {Labels[lang].step6.txt3}
//                   </Text>
//                 </label>
//               </>
//             )}
//           </div>
//           <div
//             className=" w-1/2 h-52  border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center text-center relative"
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//           >
//             {images.length !== 0 ? (
//               <div className="w-full flex flex-wrap justify-center gap-2">
//                 {images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     alt={`Upload ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded-md"
//                   />
//                 ))}
//               </div>
//             ) : (
//               <>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                   id="fileInput"
//                 />
//                 <label
//                   htmlFor="fileInput"
//                   className="flex flex-col justify-center items-center cursor-pointer"
//                 >
//                   <img
//                     src={photos}
//                     alt="Upload Icon"
//                     className="w-12 h-12 mb-2"
//                   />
//                   <Text className="text-xl font-bold m-0 p-0">Pan Card</Text>

//                   <Text className="text-black  cursor-pointer m-0 p-0">
//                     {Labels[lang].step6.txt3}
//                   </Text>
//                 </label>
//               </>
//             )}
//           </div>
//         </div>

//         <div className="flex-grow flex flex-row gap-4 mt-4">
//           <div
//             className=" w-1/2 h-52 border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center text-center relative"
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//           >
//             {images.length !== 0 ? (
//               <div className="w-full flex flex-wrap justify-center gap-2">
//                 {images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     alt={`Upload ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded-md"
//                   />
//                 ))}
//               </div>
//             ) : (
//               <>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                   id="fileInput"
//                 />
//                 <label
//                   htmlFor="fileInput"
//                   className="flex flex-col justify-center items-center cursor-pointer"
//                 >
//                   <img
//                     src={photos}
//                     alt="Upload Icon"
//                     className="w-12 h-12 mb-2"
//                   />
//                   <Text className="text-xl font-bold m-0 p-0">
//                     Shop Address Proof
//                   </Text>

//                   <Text className="text-black  cursor-pointer m-0 p-0">
//                     {Labels[lang].step6.txt3}
//                   </Text>
//                 </label>
//               </>
//             )}
//           </div>
//           <div
//             className=" w-1/2 h-52  border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center text-center relative"
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//           >
//             {images.length !== 0 ? (
//               <div className="w-full flex flex-wrap justify-center gap-2">
//                 {images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image}
//                     alt={`Upload ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded-md"
//                   />
//                 ))}
//               </div>
//             ) : (
//               <>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                   id="fileInput"
//                 />
//                 <label
//                   htmlFor="fileInput"
//                   className="flex flex-col justify-center items-center cursor-pointer"
//                 >
//                   <img
//                     src={photos}
//                     alt="Upload Icon"
//                     className="w-12 h-12 mb-2"
//                   />
//                   <Text className="text-xl font-bold m-0 p-0">
//                     GST Certificate
//                   </Text>

//                   <Text className="text-black  cursor-pointer m-0 p-0">
//                     {Labels[lang].step6.txt3}
//                   </Text>
//                 </label>
//               </>
//             )}
//           </div>
//         </div>

//         {/* <Text className="mt-2 text-sm text-gray-600">
//           {images.length} / 5 {Labels[lang].step6.txt4}
//         </Text> */}
//       </div>
//     </div>
//   );
// };

// export default Step9;
import React, { useState, useContext } from "react";
import photos from "../../assets/Icons/photos.svg";
import Labels from "../../Contexts/StoreOnboarding";
import Text from "../../Bhasini/Text";
import { AppContext } from "../../AppContext";

const Step9 = ({ lang }) => {
  const [aadharImages, setAadharImages] = useState([]);
  const [panImages, setPanImages] = useState([]);
  const [addressProofImages, setAddressProofImages] = useState([]);
  const [gstImages, setGstImages] = useState([]);
  const { storeData, setStoreData } = useContext(AppContext);

  const handleImageUpload = async (event, setImageState, field) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageState([imageUrl]);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API}upload/s3`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.s3_link) {
        setStoreData((prevData) => ({
          ...prevData,
          sellerDocuments: {
            ...prevData.sellerDocuments,
            [field]: data.s3_link,
          },
        }));
      } else {
        console.error("Failed to upload image:", data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDrop = (event, setImageState, field) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImageUpload({ target: { files: [file] } }, setImageState, field);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const renderImageUploadSection = (images, setImageState, label, field) => (
    <div
      className="w-1/2 h-52 border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center text-center relative"
      onDrop={(event) => handleDrop(event, setImageState, field)}
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
            accept="image/*"
            onChange={(event) => handleImageUpload(event, setImageState, field)}
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
          {renderImageUploadSection(aadharImages, setAadharImages, "Aadhar Card", "aadhar")}
          {renderImageUploadSection(panImages, setPanImages, "Pan Card", "pan")}
        </div>

        <div className="flex-grow flex flex-row gap-4 mt-4">
          {renderImageUploadSection(addressProofImages, setAddressProofImages, "Shop Address Proof", "addressProof")}
          {renderImageUploadSection(gstImages, setGstImages, "GST Certificate", "gst")}
        </div>
      </div>
    </div>
  );
};

export default Step9;
