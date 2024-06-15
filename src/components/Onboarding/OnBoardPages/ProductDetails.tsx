import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails } from '../../../redux/slice';
import { RootState } from '../../../redux/store';
import langu from './langu';

type ProductDetailsProps = {
  productData: any;
  setProductData: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productData, setProductData }) => {
  const dispatch = useDispatch();
  const [productTitle, setProductTitle] = useState('');
  const [productPricing, setProductPricing] = useState(0);

  const handleSave = () => {
    dispatch(setProductDetails({
      title: productTitle,
      pricing: productPricing,
      description: '', // set to empty string by default
      variations: '', // set to empty array by default
      images: [], // set to empty array by default
    }));

  };

  return (
    <div className='px-16'>
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">{langu[productData.inputLanguage].productDetails.heading}</h1>
      <p className="text-[#6F6C90] font-poppins text-md">{langu[productData.inputLanguage].productDetails.subheading}</p>
      <div className='mt-4 font-poppins'>
        <label className="block  text-[#170F49] text-md font-medium mb-2">{langu[productData.inputLanguage].productDetails.productTitle}</label>
        <input
          placeholder={langu[productData.inputLanguage].productDetails.productTitleLabel}
          value={productData.productTitle}
          onChange={(event) =>
            setProductData({ ...productData, ProductTitle: event.target.value })
          }
          onBlur={handleSave}
          className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2"
        />
        <label className="block  text-[#170F49] text-md font-medium mb-2 mt-4">{langu[productData.inputLanguage].productDetails.pricing}</label>
        <input
          placeholder={langu[productData.inputLanguage].productDetails.pricingLabel}
          value={productData.productPricing}
          onChange={(event) =>
            // setProductPricing(Number(event.target.value))
            setProductData({ ...productData, Pricing: event.target.value })

          }
          onBlur={handleSave}
          className="w-full border-2 border-[#EFF0F6] rounded-2xl px-4 py-2"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
