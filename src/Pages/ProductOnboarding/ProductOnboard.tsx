import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Stepper from "./Stepper";
import Loader from "../../components/common/Loader";

import SearchLang from "./Pages/SearchLang";
import SelectMethod from "./Pages/SelectMethod";
import SellerDetails from "./Pages/SellerDetail";
import ProductDetails from "./Pages/ProductDetail";
import ProductDescription from "./Pages/ProductDescription";
import ProductVariations from "./Pages/ProductVariation";
import Companyupload from "./Pages/Companyupload";
import ProductImages from "./Pages/ProductImages";

const aiUrl = (import.meta as any).env.VITE_BASE_AI_API;
const backendUrl = (import.meta as any).env.VITE_BASE_API;
const photAiUrl =
  "https://prodapi.phot.ai/external/api/v2/user_activity/background-generator";
const photAiApiKey = "667bd78dc03bdd1cb404e7a0_3668c766b56f00a1de05_apyhitools";

const ProductOnBoarding: React.FC = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, []);

  const [step, setStep] = useState<number>(1);
  const [subStep, setSubStep] = useState<number>(1);
  const [productData, setProductData] = useState<any>({
    inputLanguage: "english",
    shopName: "",
    sellerState: "",
    productlanguage: "",
    productCategory: "",
    ProductTitle: "",
    Pricing: "",
    productDescription: "",
    productVariation: "",
    companyLogo: "",
    images: [],
  });
  const [uploading, setUploading] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleGroupClick = (group: "voice" | "onboarding") => {
    console.log("Success");
    console.log("Handling group click with group:", group);
    if (group === "voice") {
      navigate("/voice");
    } else if (group === "onboarding") {
      setStep(3); // Navigate to step 3 (Contactdetails)
    }
  };

  const postData = async (
    productTitle,
    productDescription,
    productVariation,
    pricing
  ) => {
    const response = await axios.post(
      productData.sellerState !== ""
        ? `${aiUrl}process/`
        : "http://127.0.0.1:8000/process/",
      {
        prompt: productTitle,
        description: productDescription,
        variation: productVariation,
        pricing: pricing,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "PostmanRuntime/7.39.0",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );

    return response.data;
  };

  const fetchOrderStatus = async (orderId) => {
    try {
      const response = await axios.get(
        `https://prodapi.phot.ai/external/api/v1/user_activity/order-status?order_id=${orderId}`,
        {
          headers: {
            "x-api-key": photAiApiKey,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching order status:", error);
      return null;
    }
  };

  const changeBackgroundImages = async (imageUrls, prompt) => {
    const newImages = await Promise.all(
      imageUrls.map(async (url) => {
        try {
          const response = await axios.post(
            photAiUrl,
            {
              file_name: url.split("/").pop(),
              input_image_link: url,
              prompt: prompt,
            },
            {
              headers: {
                "x-api-key": photAiApiKey,
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Phot.AI response:", response.data); // Log the response
          const orderId = response.data.order_id;

          // Fetch order status using orderId
          let orderStatusResponse;
          let retries = 5;

          // Retry mechanism to fetch the order status
          while (retries > 0) {
            orderStatusResponse = await fetchOrderStatus(orderId);
            if (
              orderStatusResponse &&
              orderStatusResponse.output_urls.length > 0
            ) {
              break;
            }
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
            retries--;
          }

          if (
            orderStatusResponse &&
            orderStatusResponse.output_urls.length > 0
          ) {
            return orderStatusResponse.output_urls[0];
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error changing background:", error);
          return null;
        }
      })
    );
    return newImages;
  };

  const handleNext = async () => {
    if (step < 9) {
      setUploading(true);
      if (step === 7) {
        // Upload company logo
        if (productData.companyLogoFile) {
          const formData = new FormData();
          formData.append("file", productData.companyLogoFile);

          try {
            const response = await axios.post(
              `${backendUrl}upload/s3`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            setProductData((prevData: any) => ({
              ...prevData,
              companyLogo: response.data.s3_link,
            }));
          } catch (error) {
            console.error("Error uploading company logo:", error);
          }
        }
      } else if (step === 8) {
        // Upload product images
        if (productData.imageFiles && productData.imageFiles.length > 0) {
          const formData = new FormData();
          productData.imageFiles.forEach((file: File) => {
            formData.append("files", file);
          });

          try {
            const response = await axios.post(
              `${backendUrl}upload/s3/multiple`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

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

    if (step === 9) {
      console.log("this is is somethings");

      const prompt = `Please change the background of the input Image such that they are Ecommerce ready. The product is called ${productData.ProductTitle}`;
      postData(
        productData.ProductTitle,
        productData.productDescription,
        productData.productVariation,
        productData.Pricing
      ).then(async (response) => {
        const newImages = await changeBackgroundImages(
          productData.images,
          prompt
        );
        console.log("New images:", newImages);
        navigate("/product-page", {
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

  if (step === 9) {
    return <Loader />;
  } else {
    return (
      <div className="bg-[#FDE7A8] min-h-screen flex flex-col justify-center items-center">
        <div
        // className="w-2/5"
        >
          <div className="flex justify-center text-2xl font-extrabold mb-12 text-4b4b4b font-ubuntu">
            <span style={{ fontSize: 34 }}>
              Vya<span className="text-[#FCBD01]">paar</span> Launch
              <span className="text-[#FCBD01]">pad</span>
            </span>
          </div>
          <div
            style={{
              borderRadius: 30.13,
              height: "35rem",
              width: "35rem",
            }}
            className="bg-white shadow flex-grow flex flex-col "
          >
            <header className="p-4">
              <div className="pb-2">
                <Stepper currentStep={step} />
              </div>
              <div
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              >
                <hr style={{ color: "#D9DBE9" }} />
              </div>
            </header>
            <main className="flex-grow flex flex-col p-4">
              {step === 1 && (
                <SearchLang
                  productData={productData}
                  setProductData={setProductData}
                />
              )}
              {step === 2 && <SelectMethod onGroupClick={handleGroupClick} />}
              {step === 3 && (
                <SellerDetails
                  productData={productData}
                  setProductData={setProductData}
                />
              )}
              {step === 4 && (
                <ProductDetails
                  productData={productData}
                  setProductData={setProductData}
                />
              )}
              {step === 5 && (
                <ProductDescription
                  productData={productData}
                  setProductData={setProductData}
                />
              )}
              {step === 6 && (
                <ProductVariations
                  productData={productData}
                  setProductData={setProductData}
                />
              )}
              {step === 7 && (
                <Companyupload
                  productData={productData}
                  setProductData={setProductData}
                />
              )}
              {step === 8 && (
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
                      backgroundColor: "#FCBD01",
                      color: "black",
                      border: "2px solid #FCBD01",
                      borderRadius: "9999px",
                      padding: "8px 0px",
                      visibility: step === 1 ? "hidden" : "visible",
                      fontWeight: "600",
                      width: 140,
                    }}
                  >
                    Previous Step
                  </p>
                </button>
                <button onClick={handleNext} disabled={uploading}>
                  <p
                    style={{
                      backgroundColor: "#FCBD01",
                      color: "black",
                      border: "2px solid #FCBD01",
                      borderRadius: "9999px",
                      padding: "8px 0px",
                      visibility: step === 2 ? "hidden" : "visible",
                      fontWeight: "600",
                      width: 140,
                    }}
                  >
                    {uploading
                      ? "Uploading..."
                      : step === 7
                      ? "Submit"
                      : "Next Step"}
                  </p>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductOnBoarding;
