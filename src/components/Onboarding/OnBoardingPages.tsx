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
const photAiUrl = "https://prodapi.phot.ai/external/api/v2/user_activity/background-generator";
const photAiApiKey = "667bd78dc03bdd1cb404e7a0_3668c766b56f00a1de05_apyhitools";

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

  const changeBackgroundImages = async (imageUrls, prompt) => {
    const newImages = await Promise.all(
      imageUrls.map(async (url) => {
        try {
          const response = await axios.post(
            photAiUrl,
            {
              file_name: url.split('/').pop(),
              input_image_link: url,
              prompt: prompt,
            },
            {
              headers: {
                'x-api-key': photAiApiKey,
                'Content-Type': 'application/json',
              },
            }
          );
          console.log("Phot.AI response:", response.data); // Log the response
          const orderId = response.data.order_id;

          // Fetch order status using orderId
          const orderStatusResponse = await axios.get(
            `https://prodapi.phot.ai/external/api/v1/user_activity/order-status?order_id=${orderId}`,
            {
              headers: {
                'x-api-key': photAiApiKey,
                'Content-Type': 'application/json',
              },
            }
          );

          console.log("Order status response:", orderStatusResponse.data);
          return orderStatusResponse.data.output_image_link; // Adjust based on the actual response structure
        } catch (error) {
          console.error("Error changing background:", error);
          return null;
        }
      })
    );
    return newImages;
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

      const prompt = `Please change the background of the input Image such that they are Ecommerce ready. The product is called ${productData.ProductTitle}`;
      postData(
        productData.ProductTitle,
        productData.productDescription,
        productData.productVariation,
        productData.Pricing,
      ).then(async (response) => {
        const newImages = await changeBackgroundImages(productData.images, prompt);
        console.log("New images:", newImages); // Log the new images
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
              response: { ...response, newImages: newImages },
              companyLogo: productData.companyLogo,
              images: productData.images,
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
            backgroundColor: '#FFE9A9',
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
                  flexDirection: 'column',
                  height: 350,
                  padding: '16px',
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
                  flexDirection: 'column',
                  padding: '16px',
                }}
                className="px-12"
              >
                <div
                  style={{
                    justifyContent: 'space-between',
                    display: 'flex',
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingBottom: 12,
                  }}
                >
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
