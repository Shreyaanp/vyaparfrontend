import React, { useState } from 'react';
import langu from './langu';

type ProductVariationsProps = {
  productData: any;
  setProductData: any;
}

const ProductImages: React.FC<ProductVariationsProps> = ({ productData, setProductData }) => {
  const [images, setImages] = useState([
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
  ]);

  const [selectedFile, setSelectedFile] = useState<any>()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));

      console.log(URL.createObjectURL(file))
    }
  };
  return (
    <div className="px-16">
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">
      {langu[productData.inputLanguage].productImg.heading}
      </h1>
      <p className="text-[#6F6C90] font-poppins text-sm">
      {langu[productData.inputLanguage].productImg.subheading}
      </p>
      <div className="mt-4 font-poppins">
        <label className="block text-[#170F49] text-md font-medium mb-2">
        {langu[productData.inputLanguage].productImg.heading}
        </label>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={selectedFile ? selectedFile : image}
              alt={`Product ${index + 1}`}
              style={{
                width:110,
                height:90
              }}
              className=" rounded-xl border-2 border-[#FCBD01]"
            />
          ))}
          <div className="border-2 border-[#FCBD01] rounded-xl flex items-center justify-center">
            <input
              type="file"
              className="   z-50"
              style={{backgroundColor:'red', 
              opacity:0,
              // width:200, height:200
              width:50

              }}
              accept="image/*"
              onChange={handleFileChange}
              // className="hidden"
              id="upload-button"
            />

{/* <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 z-50"
            accept="image/*"
            onChange={handleFileChange}
            // className="sr-only"
          
          /> */}
            <label htmlFor="upload-button" className="cursor-pointer">
              <button
              style={{
                marginLeft:-40
              }}
              onClick={()=>{
                // handleFileChange
              }}
               className="p-2 text-6xl text-yellow-300 rounded-md">
                +
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
