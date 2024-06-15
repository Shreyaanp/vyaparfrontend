import React, { useState,useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './navBar.css';
import User from '../images/icons/person-outline.svg';
import search from '../images/icons/search-outline.svg';
import CopyButton from '../images/icons/copyButton.svg';
import Img1 from '../images/image.png';
import Img2 from '../images/image.png';
import BackIcon from '../images/icons/backIcon.svg';
import { AppContext } from '../AppContext';
import DownloadIcon from '../images/icons/downloadIcon.svg';
import axios from 'axios';



const CopyBtn = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          borderColor: '#EFF0F6',
          borderWidth: 1.5,
          paddingLeft: 7,
          paddingRight: 7,
          paddingTop: 2,
          paddingBottom: 2,
          borderRadius: 10,
        }}
      >
        <span style={{ color: '#FCBD01', fontWeight: 500, fontSize: 14 }}>
          Copy
        </span>
        <img
          src={CopyButton}
          style={{ width: 18, height: 18, marginLeft: 5 }}
        />
      </button>
    </div>
  );
};

const ProductPage = () => {
  const { state } = useLocation();
  const superData = state?.productData;
  const backendUrl = import.meta.env.VITE_BASE_API;
  const context = useContext(AppContext);
  if (superData && context?.user?.id) {
    superData.uid = context.user.id;
  }

  const uploadProductData = async () => {
    if (superData) {
      try {
        const response = await axios.post(`${backendUrl}product/upload`, superData);
        console.log('Product uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading product:', error);
      }
    }
  };


  const [productData, setProductData] = useState({
    inputLanguage: '',
    shopName: '',
    sellerState: '',
    productlanguage: '',
    productCategory: '',
    ProductTitle: '',
    Pricing: '',
    productDescription: '',
    productVariation: '',
    response: {
      'Product Regional Names': [],
      'Product Name': '',
      'Product Description': '',
      'Product Variation': '',
      'About Product': [],
      'Product Tagline': '',
      'Product Prompt': '',
      'Seo Friendly Tags': [],
    },
  });

  const handleSave = async () => {
    uploadProductData();
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        className="navbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px 40px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
          marginBottom: 10,
        }}
      >
        <span style={{ fontSize: '1.5rem', fontWeight: '600', color: 'black' }}>
          Vya<span style={{ color: '#FCBD01' }}>par</span> Laun
          <span style={{ color: '#FCBD01' }}>pad</span>
        </span>
        <div className="icons">
          <img src={User} alt="" style={{ width: 30, height: 30 }} />
          <img src={search} alt="" style={{ width: 30, height: 30 }} />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          padding: '0px 40px',
          justifyContent: 'center',
          gap: 100,
          marginBottom: 20,
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '37rem' }}
        >
          <div style={{ width: '33rem' }}>
            <div style={{ margin: 20 }}>
              <img src={BackIcon} alt="" style={{ width: 30, height: 30 }} />
            </div>
            <div style={styles.shadowComp}>
              <span className="label">Product Title</span>
              <div className="line" />
              <p style={{ fontFamily: 'poppins' }} className="productTitle ">
                {productData.response['Product Name']}
              </p>
              <div style={{ marginTop: -10 }}>
                <CopyBtn />
              </div>
            </div>

            <div style={styles.shadowComp}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <span className="label">Product Pricing</span>
                  <div className="line" />
                </div>
                <p
                  style={{
                    fontFamily: 'poppins',
                    color: '#263238',
                    fontSize: 26,
                    fontWeight: '600',
                    marginTop: 5,
                  }}
                >
                  ₹ {productData.pricing}
                </p>
              </div>
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Product Tagline</span>
              <div className="line" />
              <p style={{ fontFamily: 'poppins' }} className="txt ">
                {productData.response['Product Tagline']}
              </p>
              <CopyBtn />
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Product Description</span>
              <div className="line" />
              <p style={{ fontFamily: 'poppins' }} className="txt ">
                {productData.response['Product Description']}
              </p>
              <CopyBtn />
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Product Features</span>
              <div className="line" />
              <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
                {productData.response['About Product'].map((item, index) => (
                  <li
                    key={index}
                    style={{ fontFamily: 'poppins' }}
                    className="txt "
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <CopyBtn />
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Customer Acquisition</span>
              <div className="line" />

              <p style={{ fontFamily: 'poppins' }} className="txt ">
                {productData.response['Customer Acquisition']}
              </p>
              <CopyBtn />
            </div>
          </div>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', width: '37rem' }}
        >
          <div>
            {' '}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: 10,
              }}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',

                  paddingLeft: 15,
                  paddingRight: 15,
                  // padding: 15,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 10,
                  backgroundColor: '#006A66',
                }}
              >
                <button 
                  onClick={() => {
                    handleSave();
                  }
                  }
                style={{ color: 'white', fontWeight: 550, fontSize: 14 }}>
                  Save
                </button>
              </button>
            </div>
          </div>

          <div style={{ width: '37rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20,
              }}
            >
              <img src={Img1} style={{ width: 300, height: 300 }} />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
            >
              <div style={styles.slideImgCont}>
                <img src={Img2} style={styles.slideImg} />
              </div>
              <div style={styles.slideImgCont}>
                <img src={Img2} style={styles.slideImg} />
              </div>
              <div style={styles.slideImgCont}>
                <img src={Img2} style={styles.slideImg} />
              </div>
              <div style={styles.slideImgCont}>
                <img src={Img2} style={styles.slideImg} />
              </div>
              <div style={styles.slideImgCont}>
                <img src={Img2} style={styles.slideImg} />
              </div>
            </div>

            <div style={styles.shadowComp}>
              <span className="label">Keywords</span>
              <div className="line" />
              <p style={{ fontFamily: 'poppins' }} className="txt ">
                {productData.response['Seo Friendly Tags'].join(', ')}
              </p>
              <CopyBtn />
            </div>

            <div
              style={{
                boxShadow: '0px 4.43px 14.18px 0px rgba(8, 15, 52, 0.06)',
                borderRadius: 18,
                borderColor: '#EFF0F6',
                borderWidth: 0.8,
                marginTop: 20,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <p
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 20,
                  fontSize: 24,
                  color: '#263238',
                  fontWeight: '500',
                  fontFamily: 'poppins',
                }}
              >
                AI Recommendations
              </p>
              <hr
                style={{
                  borderColor: '#EFF0F6',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              />

              <div style={{ padding: 20 }}>
                <span className="label">Product Image presentation</span>
                <div className="line" />
                <p style={{ fontFamily: 'poppins' }} className="txt ">
                  {productData.response['Product Prompt']}
                </p>
              </div>

              <div style={{ padding: 20 }}>
                <span className="label">Market Painpoints</span>
                <div className="line" />

                <p style={{ fontFamily: 'poppins' }} className="txt ">
                  {productData.response['Market PainPoints']}
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

export default ProductPage;
