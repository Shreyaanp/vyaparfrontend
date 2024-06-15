import React, { useState, useEffect } from 'react';
import Stepper from './Stepper';
import SellerDetails from './OnBoardPages/SellerDetails';
import Companyupload from './OnBoardPages/Companyupload';
import SearchLang from './OnBoardPages/SearchLang';
import ProductImages from './OnBoardPages/ProductImages';

import ProductDetails from './OnBoardPages/ProductDetails';
import ProductDescription from './OnBoardPages/ProductDescription';
import ProductVariations from './OnBoardPages/ProductVariations';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../common/Loader';
import langu from './OnBoardPages/langu';

const aiUrl = import.meta.env.VITE_BASE_AI_API;

const OnBoardingPages: React.FC = () => {
  useEffect(() => {
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
    console.log(aiUrl);
  }, []);

  const [step, setStep] = useState<number>(1);
  const [subStep, setSubStep] = useState<number>(1);
  const [productData, setProductData] = useState<any>({
    inputLanguage: 'english',
    shopName: '',
    sellerState: '',
    productlanguage: '',
    productCategory: '',
    ProductTitle: '',
    Pricing: '',
    productDescription: '',
    productVariation: '',
  });

  const navigate = useNavigate();

  const postData = async (
    productTitle,
    productDescription,
    productVariation,
    pricing,
  ) => {
    const response = await axios.post(
      productData.sellerState !== ''
        ? `${aiUrl}process/`
        : 'http://127.0.0.1:8000/process/',
      {
        prompt: productTitle,
        description: productDescription,
        variation: productVariation,
        pricing: pricing,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PostmanRuntime/7.39.0',
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
        },
      },
    );

    console.log(response.data);

    return response.data;
  };

  const handleNext = () => {
    if (step < 8) {
      // console.log(step);
      setStep(step + 1);
      // console.log(step);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    console.log(step);

    if (step === 8) {
      console.log('this is is somethings');

      postData(
        productData.ProductTitle,
        productData.productDescription,
        productData.productVariation,
        productData.Pricing,
      ).then((response) => {
        navigate('/ProductPage', {
          state: {
            productData: {
              inputLanguage: productData.inputLanguage,
              shopName: productData.shopName,
              sellerState: productData.sellerState,
              productlanguage: productData.productlanguage,
              productCategory: productData.productCategory,
              productTitle: productData.ProductTitle,
              pricing: productData.Pricing,
              productDescription: productData.productDescription,
              productVariation: productData.productVariation,
              response: response,
            },
          },
        });
      });
    }
  }, [step]);

  if (step === 8) {
    return <Loader />;
  } else {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            // flex: 1,
            backgroundColor: '#FFE9A9',
            // opacity: 0.4,
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <div
            style={{
              width: '40%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: '800',
                marginBottom: '3rem',
                color: '#4B4B4B',
              }}
            >
              <span style={{ fontSize: 34 }}>
                Vya<span>par</span> Launch<span>pad</span>
              </span>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                borderRadius: 30,
                // margin: 'auto',
                // height: '90vh',
                // height:"100%"
              }}
            >
              <header
                style={{
                  padding: '16px',
                }}
              >
                <div
                  style={{
                    paddingBottom: 8,
                  }}
                >
                  <Stepper currentStep={step} />
                </div>
                <div
                  style={{
                    paddingLeft: '16px',
                    paddingRight: '16px',
                  }}
                >
                  <hr style={{ color: '#D9DBE9' }} />
                </div>
              </header>
              <main
                style={{
                  display: 'flex',
                  flex: 1,
                  padding: '16px',
                  // backgroundColor: 'red',
                  flexDirection: 'column',
                  height: 350,
                }}
              >
                {step === 1 && (
                  <SearchLang
                    productData={productData}
                    setProductData={setProductData}
                  />
                )}
                {step === 2 && (
                  <SellerDetails
                    productData={productData}
                    setProductData={setProductData}
                  />
                )}
                {step === 3 && (
                  <ProductDetails
                    productData={productData}
                    setProductData={setProductData}
                  />
                )}
                {step === 4 && (
                  <ProductDescription
                    productData={productData}
                    setProductData={setProductData}
                  />
                )}

                {step === 5 && (
                  <ProductVariations
                    productData={productData}
                    setProductData={setProductData}
                  />
                )}

                {step === 6 && (
                  <Companyupload
                    productData={productData}
                    setProductData={setProductData}
                  />
                )}
                {step === 7 && (
                  <ProductImages
                    productData={productData}
                    setProductData={setProductData}
                  />
                )}
              </main>
              <footer
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  // backgroundColor: 'lightblue',
                }}
                className="px-12"
              >
                <div
                  style={{
                    justifyContent: 'space-between',
                    display: 'flex',
                    flex: 1,
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingBottom: 12,
                  }}
                >
                  <button onClick={handlePrevious}>
                    <p
                      style={{
                        backgroundColor: '#FCBD01',
                        color: 'black',
                        border: '2px solid #FCBD01',
                        borderRadius: '9999px',
                        padding: '8px 0px',
                        visibility:
                          step === 1 && subStep === 1 ? 'hidden' : 'visible',
                        fontWeight: '600',
                        width: 140,
                      }}
                    >
                      Previous Step
                    </p>
                  </button>
                  <button onClick={handleNext}>
                    <p
                      style={{
                        backgroundColor: '#FCBD01',
                        color: 'black',
                        border: '2px solid #FCBD01',
                        borderRadius: '9999px',
                        padding: '6px 0px',
                        fontWeight: '600',
                        width: 140,
                      }}
                    >
                      {step === 7 ? 'Submit' : 'Next Step'}
                    </p>
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default OnBoardingPages;