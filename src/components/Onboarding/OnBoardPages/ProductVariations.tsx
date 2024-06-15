import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails } from '../../../redux/slice';
import { RootState } from '../../../redux/store';
import langu from './langu';

type ProductVariationsProps = {
  productData: any;
  setProductData: any;
}

const ProductVariations: React.FC<ProductVariationsProps> = ({ productData, setProductData }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInfo);
  const productDetails = useSelector((state: RootState) => state.userInfo.productDetails);
  const [variations, setVariations] = useState('');

  const handleSave = () => {
    dispatch(setProductDetails({
      ...productDetails,
      variations: variations,
    }));
  };

  useEffect(() => {
  }, [user]);

  return (
    <div className="px-16 h-[20rem]">
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">
      {langu[productData.inputLanguage].productVari.heading}
      </h1>
      <p className="text-[#6F6C90] font-poppins text-sm">
      {langu[productData.inputLanguage].productVari.subheading}
      </p>
      <div className="mt-4 font-poppins">
        <label className="block text-[#170F49] text-md font-medium mb-2">
        {langu[productData.inputLanguage].productVari.productVariation}
        </label>
        <textarea
          placeholder={langu[productData.inputLanguage].productVari.productVariationLabel}
          value={productData.productVariation}
          onChange={(e) =>
            setProductData({ ...productData, productVariation: e.target.value })
          }
          onBlur={handleSave}
          className="w-full border-2 border-[#EFF0F6] rounded-2xl h-44 px-4 py-4"
        />
      </div>
    </div>
  );
};

export default ProductVariations;