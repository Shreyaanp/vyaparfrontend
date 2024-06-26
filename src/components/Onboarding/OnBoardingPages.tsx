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
const backendUrl = import.meta.env.VITE_BASE_API;

const OnBoardingPages: React.FC = () => {
  useEffect(() => {
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
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
    companyLogo: '',
    images: [],
  });
  const [uploading, setUploading] = useState<boolean>(false);

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

    return response.data;
  };

  const handleNext = async () => {
    if (step < 8) {
      setUploading(true);
      if (step === 6) {
        // Upload company logo
        if (productData.companyLogoFile) {
          const formData = new FormData();
          formData.append('file', productData.companyLogoFile);

          try {
            const response = await axios.post(`${backendUrl}upload/s3`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });

            setProductData((prevData: any) => ({
              ...prevData,
              companyLogo: response.data.s3_link,
            }));
          } catch (error) {
            console.error("Error uploading company logo:", error);
          }
        }
      } else if (step === 7) {
        // Upload product images
        if (productData.imageFiles && productData.imageFiles.length > 0) {
          const formData = new FormData();
          productData.imageFiles.forEach((file: File) => {
            formData.append('files', file);
          });

          try {
            const response = await axios.post(`${backendUrl}upload/s3/multiple`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });

            setProductData((prevData: any) => ({
              ...prevData,
              images: response.data.s3_links,
            }));
          } catch (error) {
            console.error("Error uploading product images:", error);
          }
        }
      }

      setStep(step + 1);
      setUploading(false);
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
        <div className="flex items-center bg-ffe9a9 justify-center h-screen">
        <div className="w-2/5">
           <div className="flex justify-center text-2xl font-extrabold mb-12 text-4b4b4b">
              <span style={{ fontSize: 34 }}>
                Vya<span>par</span> Launch<span>pad</span>
              </span>
            </div>
            <div className="bg-white shadow-custom rounded-custom">
            <header className="p-4">
                <div className="pb-2">
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
              <main className="flex flex-col h-350 p-4">
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
              <footer className="flex flex-col p-4 px-12">
              <div className="flex justify-between px-4 pb-4">
                
                  <button onClick={handlePrevious} disabled={uploading}>
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
                  <button onClick={handleNext} disabled={uploading}>
                  < p className="bg-FCBD01 text-black border-2 border-FCBD01 rounded-full py-3 px-4 font-semibold w-36">
                      {uploading ? 'Uploading...' : step === 7 ? 'Submit' : 'Next Step'}
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
