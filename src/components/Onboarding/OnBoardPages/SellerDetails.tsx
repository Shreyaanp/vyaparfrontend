import React, { useState } from 'react';
import Ecom from '../../../images/Onboarding/contact.svg';
import mail from '../../../images/Onboarding/mail.svg';
import Marketing from '../../../images/Onboarding/call.svg';
import Company from '../../../images/Onboarding/company.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSellerDetails } from '../../../redux/slice';
import { RootState } from '../../../redux/store';
import langu from './langu';

type SearchLangProps = {
  productData: any;
  setProductData: any;
};

const SellerDetails = ({ productData, setProductData }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInfo);
  const [shopName, setShopName] = useState('');
  const [sellerState, setSellerState] = useState('');
  const [productLanguage, setProductLanguage] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSave = () => {
    dispatch(
      setSellerDetails({
        name: shopName,
        state: sellerState,
        language: productLanguage,
        category: productCategory,
      }),
    );
    console.log(user)
  };
  return (
    <div className="px-16 h-[20rem] ">
      <h1 className="text-[#170F49] text-2xl mb-2 font-poppins font-bold">
        {/* Seller’s Detail */}
        {langu[productData.inputLanguage].sellerDetails.heading}
      </h1>
      <p className="text-[#6F6C90] font-poppins text-sm">
        {' '}
        {/* Enter your virtual shop’s details. */}
        {langu[productData.inputLanguage].sellerDetails.subheading}
      </p>
      <div className="flex font-poppins mt-8">
        <div className="w-3/4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
          {langu[productData.inputLanguage].sellerDetails.shopName}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={langu[productData.inputLanguage].sellerDetails.shopName}
              value={productData.shopName}
              onChange={(e) =>
                setProductData({ ...productData, shopName: e.target.value })
              }
              onBlur={handleSave}
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={Ecom}
              alt="Ecom"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
        <div className="w-3/4 ml-4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
          {langu[productData.inputLanguage].sellerDetails.sellerState}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={langu[productData.inputLanguage].sellerDetails.sellerState}
              value={productData.sellerState}
              onBlur={handleSave}
              onChange={(e) =>
                // setSellerState(e.target.value)
                setProductData({ ...productData, sellerState: e.target.value })

              }
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={mail}
              alt="Healthcare"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
      </div>
      <div className="flex font-poppins mt-4">
        <div className="w-3/4 mr-4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
          {langu[productData.inputLanguage].sellerDetails.productLanguage}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={langu[productData.inputLanguage].sellerDetails.productLanguage}
              value={productData.productLanguage}
              onBlur={handleSave}
              onChange={(e) => setProductData({ ...productData, productlanguage: e.target.value })}
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={Marketing}
              alt="Marketing"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
        <div className="w-3/4 relative">
          <label className="block text-[#170F49] text-sm font-medium mb-2">
          {langu[productData.inputLanguage].sellerDetails.productCategory}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={langu[productData.inputLanguage].sellerDetails.productCategory}
              value={productData.productCategory}
              onBlur={handleSave}
              onChange={(e) => setProductData({ ...productData, productCategory: e.target.value })}
              className="w-full border-2 border-[#EFF0F6] rounded-3xl px-4 py-2"
            />
            <img
              src={Company}
              alt="Settings"
              className="absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
