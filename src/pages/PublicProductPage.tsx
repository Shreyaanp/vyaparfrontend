import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import QRCode from 'qrcode.react';
import './navBar.css';
import User from '../images/icons/person-outline.svg';
import search from '../images/icons/search-outline.svg';
import CopyButton from '../images/icons/copyButton.svg';
import Img1 from "../images/image.png";
import Img2 from "../images/image.png";

const CopyBtn = () => {
  return (
    <div className="flex justify-end mt-2">
      <button className="flex items-center border border-[#EFF0F6] p-2 rounded-lg">
        <span className="text-[#FCBD01] font-medium text-sm">Copy</span>
        <img src={CopyButton} alt="Copy Icon" className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

const PublicProductPage = () => {
  const { shareable_id } = useParams();
  const [productData, setProductData] = useState(null);
  const backendUrl = import.meta.env.VITE_BASE_API;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${backendUrl}public/${shareable_id}`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching public product:', error);
      }
    };

    fetchProductData();
  }, [shareable_id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white flex flex-col h-full w-full">
      <div className="navbar flex justify-between items-center bg-white p-5 shadow-md mb-2.5">
        <span className="text-xl font-semibold text-black">
          Vya<span className="text-[#FCBD01]">par</span> Laun
          <span className="text-[#FCBD01]">pad</span>
        </span>
        <div className="icons flex space-x-2">
          <img src={User} alt="" className="w-7 h-7" />
          <img src={search} alt="" className="w-7 h-7" />
        </div>
      </div>

      <div className="flex flex-1 flex-row px-10 justify-center gap-24 mb-5">
        <div className="flex flex-col w-[37rem]">
          <div className="w-[33rem]">
            <div style={styles.shadowComp}>
              <span className="label">Product Title</span>
              <div className="line" />
              <p style={{ fontFamily: 'poppins' }} className="productTitle">
                {productData.response.ProductName}
              </p>
              <div className="-mt-2">
                <CopyBtn />
              </div>
            </div>

            <div style={styles.shadowComp}>
              <div className="flex justify-between">
                <div>
                  <span className="label">Product Pricing</span>
                  <div className="line" />
                </div>
                <p className="text-[#263238] text-2xl font-semibold mt-1" style={{ fontFamily: 'poppins' }}>
                  ₹ {productData.pricing}
                </p>
              </div>
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Product Tagline</span>
              <div className="line" />
              <p style={{ fontFamily: 'poppins' }} className="txt">
                {productData.response.ProductTagline}
              </p>
              <CopyBtn />
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Product Description</span>
              <div className="line" />
              <p style={{ fontFamily: 'poppins' }} className="txt">
                {productData.response.ProductDescription}
              </p>
              <CopyBtn />
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Product Features</span>
              <div className="line" />
              <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
                {productData.response.AboutProduct.map((item, index) => (
                  <li key={index} style={{ fontFamily: 'poppins' }} className="txt">
                    {item}
                  </li>
                ))}
              </ul>
              <CopyBtn />
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Customer Acquisition</span>
              <div className="line" />
              <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
                {productData.response.CustomerAcquisition.map((item, index) => (
                  <li key={index} style={{ fontFamily: 'poppins' }} className="txt">
                    {item}
                  </li>
                ))}
              </ul>
              <CopyBtn />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[37rem]">
          <div className="w-[37rem]">
            <div className="flex justify-center mt-8">
              <img src={Img1} className="w-72 h-72" />
            </div>

            <div className="flex justify-between mt-8">
              <div className="w-[72px]">
                <img src={Img2} className="w-full h-auto" />
              </div>
              <div className="w-[72px]">
                <img src={Img2} className="w-full h-auto" />
              </div>
              <div className="w-[72px]">
                <img src={Img2} className="w-full h-auto" />
              </div>
              <div className="w-[72px]">
                <img src={Img2} className="w-full h-auto" />
              </div>
              <div className="w-[72px]">
                <img src={Img2} className="w-full h-auto" />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg border border-[#EFF0F6] mt-8 p-6">
              <span className="label">Keywords</span>
              <div className="line" />
              <p className="txt mt-2" style={{ fontFamily: 'poppins' }}>
                {productData.response.SeoFriendlyTags.join(', ')}
              </p>
              <CopyBtn />
            </div>

            <div className="bg-white shadow-lg rounded-lg border border-[#EFF0F6] mt-8 p-6">
              <p className="font-semibold text-lg text-[#263238] mb-4" style={{ fontFamily: 'poppins' }}>
                AI Recommendations
              </p>
              <hr className="border border-[#EFF0F6]" />
              <div className="p-4">
                <span className="label">Product Image presentation</span>
                <div className="line" />
                <p className="txt mt-2" style={{ fontFamily: 'poppins' }}>
                  {productData.response.ProductPrompt}
                </p>
              </div>

              <div className="p-4 mt-4">
                <span className="label">Market Painpoints</span>
                <div className="line" />
                <p className="txt mt-2" style={{ fontFamily: 'poppins' }}>
                  {productData.response.MarketPainPoints}
                </p>
                <CopyBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  shadowComp: {
    boxShadow: '0px 4.43px 14.18px 0px rgba(8, 15, 52, 0.06)',
    borderRadius: 18,
    borderColor: '#EFF0F6',
    borderWidth: 0.8,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
  slideImgCont: {
    width: '6.5rem',
    height: '6.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#EFF0F6',
    borderWidth: 1.2,
    borderStyle: 'solid',
  },
  slideImg: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
};

export default PublicProductPage;
