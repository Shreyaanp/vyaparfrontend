// import React, { useState, useEffect } from 'react';
// import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
// import { Link } from 'react-router-dom';
// // import './App.css';
// import './navBar.css';
// import User from '../images/icons/person-outline.svg';
// import search from '../images/icons/search-outline.svg';
// import CopyButton from '../images/icons/copyButton.svg';
// import Img1 from '../images/icons/img1.svg';
// import Img2 from '../images/icons/img2.svg';
// import { useNavigate, useLocation } from 'react-router-dom';
// import ProductDescription from '../components/Onboarding/OnBoardPages/ProductDescription';

// const CopyBtn = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'flex-end',
//         marginTop: 10,
//       }}
//     >
//       <button
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           borderColor: '#EFF0F6',
//           borderWidth: 1.5,
//           paddingLeft: 7,
//           paddingRight: 7,
//           paddingTop: 2,
//           paddingBottom: 2,
//           borderRadius: 10,
//         }}
//       >
//         <span
//           style={{
//             color: '#FCBD01',
//             fontWeight: 500,
//             fontSize: 14,
//           }}
//         >
//           Copy
//         </span>
//         <img
//           src={CopyButton}
//           style={{
//             width: 18,
//             height: 18,
//             marginLeft: 5,
//             // marginTop: 4,
//           }}
//         />
//       </button>
//     </div>
//   );
// };

// const ProductPage = () => {
//   const { state } = useLocation();

const data = {
  'Product Regional Names': [
    'Banarasi Saree',
    'Benarasi Saree',
    'Banarasi Silk Saree',
    'Varanasi Saree',
  ],
  'Product Name': 'Banarasi Saree',
  'Product Description':
    'Banarasi Sarees are exquisite silk sarees originating from Varanasi, India. Renowned for their intricate designs and luxurious fabric, these sarees are a symbol of Indian tradition and craftsmanship. They feature elaborate brocade work, often incorporating gold and silver threads, making them perfect for weddings, festivals, and grand occasions.',
  'Product Variation':
    'Banarasi Sarees are available in various styles including Pure Silk (Katan), Organza (Kora), Georgette, Shattir, and various designs like Jangla, Tanchoi, Cutwork, and Butidar.',
  'About Product': [
    'Handwoven in Varanasi, India with rich cultural heritage.',
    'Made from high-quality silk and often embellished with gold or silver threads.',
    'Features traditional motifs such as floral and foliate patterns, kalga, bel, and many more.',
    'Perfect attire for weddings, festive occasions, and traditional ceremonies.',
    'Renowned for their durability and timeless appeal.',
  ],
  'Product Tagline': 'Elegance Woven in Tradition',
  'Product Prompt':
    'Capture the elegance and timeless beauty of Banarasi Sarees. Ensure the intricate designs and luxurious fabric are showcased prominently. Highlight the vibrant colors and elaborate brocade work to attract traditional and modern consumers alike.',
  'Seo Friendly Tags': [
    'Banarasi Saree',
    'Banarasi Silk Saree',
    'Buy Banarasi Saree',
    'Traditional Indian Saree',
    'Wedding Saree',
    'Handwoven Silk Saree',
    'Luxury Saree',
    'Indian Bridal Saree',
  ],
};
//   const superData = state?.productData;
//   console.log('Super data: ', superData);
//   // const superData = state?.productData;
//   const [modelData, setModelData] = useState<any>({
//     productName: '',
//     productDescription: '',
//     productTagline: '',
//     seoTags: '',
//     market: '',
//     pointersArray: [],
//   });
//   const [productData, setProductData] = useState<any>({
//     inputLanguage: '',
//     shopName: '',
//     sellerState: '',
//     productlanguage: '',
//     productCategory: '',
//     ProductTitle: '',
//     Pricing: '',
//     productDescription: '',
//     productVariation: '',
//   });

//   console.log('Super data of the product data');
//   console.log(state?.productData);

//   useEffect(() => {
//     // format();
//     console.log(modelData);
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: 'white',
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100%',
//         width: '100%',
//       }}
//     >
//       {/* <div></div> */}
//       <div
//         className="navbar"
//         style={{
//           // boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.2)',
//           // boxShadow: '0px 4.43px 14.18px 0px rgba(8, 15, 52, 0.06)',
//           // boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           backgroundColor: 'white', // Remove quotes
//           padding: '20px 40px',
//           boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
//           // margin: 10,
//           marginBottom: 10,
//         }}
//       >
//         <span
//           style={{
//             fontSize: '1.5rem',
//             fontWeight: '600',
//             color: 'black',
//           }}
//         >
//           Vya<span style={{ color: '#FCBD01' }}>par</span> Laun
//           <span style={{ color: '#FCBD01' }}>pad</span>
//         </span>
//         <div className="icons">
//           <img
//             src={User}
//             alt=""
//             style={{ color: 'red', width: 30, height: 30 }}
//           />
//           <img
//             src={search}
//             alt=""
//             style={{ color: 'red', width: 30, height: 30 }}
//           />
//         </div>
//       </div>

//       <div
//         style={{
//           display: 'flex',
//           flex: 1,
//           flexDirection: 'row',
//           padding: '0px 40px',
//           justifyContent: 'center',
//           gap: 100,
//           marginBottom: 20,
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             width: '37rem',
//           }}
//         >
//           <div
//             style={{
//               width: '33rem',
//             }}
//           >
//             <div style={styles.shadowComp}>
//               <span className="label">Product Title</span>
//               <div className="line" />
//               <p style={{ fontFamily: 'poppins' }} className="productTitle ">
//                 Buddha Rice | Kala Namak Rice |காலா நமக்
//               </p>
//               <div style={{ marginTop: -10 }}>
//                 <CopyBtn />
//               </div>
//             </div>

//             <div style={styles.shadowComp}>
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div>
//                   <span className="label">Product Pricing</span>
//                   <div className="line" />
//                 </div>

//                 <p
//                   style={{
//                     fontFamily: 'poppins',
//                     color: '#263238',
//                     fontSize: 26,
//                     fontWeight: '600',
//                     marginTop: 5,
//                   }}
//                 >
//                   ₹ {superData.pricing}
//                 </p>
//               </div>

//               {/* <CopyBtn /> */}
//             </div>

//             <div style={styles.shadowComp}>
//               <span className="label">Product Title</span>
//               <div className="line" />
//               <p style={{ fontFamily: 'poppins' }} className="txt ">
//                 {/* "Experience the Rare and Authentic Black Pearl Rice!" */}
//                 {productData?.response['Product Tagline']}
//                 {/* {modelData.productTagline} */}
//               </p>
//               <CopyBtn />
//             </div>

//             <div style={styles.shadowComp}>
//               <span className="label">Product Description</span>
//               <div className="line" />
//               <p style={{ fontFamily: 'poppins' }} className="txt ">
//                 {/* Kalanamak Rice is a scented rice variety with a rich history
//                 dating back to the Buddhist period. It is primarily cultivated
//                 in Nepal and India, particularly in the Himalayan Tarai region
//                 and eastern Uttar Pradesh. This non-basmati rice has a short to
//                 medium grain length and is highly resistant to rice diseases.
//                 Its black husk gives it its name, while the rice itself is
//                 white. Kalanamak rice is renowned for its quality, aroma, and
//                 antioxidant properties. It is considered a rare and authentic
//                 variety. */}
//                 {productData?.response['Product Tagline']}
//               </p>
//               <CopyBtn />
//             </div>

//             <div style={styles.shadowComp}>
//               <span className="label">Product Features</span>
//               <div className="line" />

//               <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
//                 {superData?.response['About Product'].map((item, index) => (
//                   // {productData.pointersArray.map((item, index) => (
//                   <li
//                     key={index}
//                     style={{ fontFamily: 'poppins' }}
//                     className="txt "
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <CopyBtn />
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',

//             // backgroundColor: 'lightyellow',

//             width: '37rem',
//           }}
//         >
//           <div
//             style={{
//               width: '37rem',
//               // backgroundColor: 'lightgreen',
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 marginTop: 20,
//               }}
//             >
//               <img
//                 src={Img1}
//                 style={{
//                   width: 300,
//                   height: 300,
//                 }}
//               />
//             </div>
//             <div
//               style={{
//                 display: 'flex',
//                 // backgroundColor: 'lightgreen',
//                 justifyContent: 'space-between',
//                 marginTop: 20,
//                 // gap: 20,
//               }}
//             >
//               <div style={styles.slideImgCont}>
//                 <img src={Img2} style={styles.slideImg} />
//               </div>

//               <div style={styles.slideImgCont}>
//                 <img src={Img2} style={styles.slideImg} />
//               </div>

//               <div style={styles.slideImgCont}>
//                 <img src={Img2} style={styles.slideImg} />
//               </div>

//               <div style={styles.slideImgCont}>
//                 <img src={Img2} style={styles.slideImg} />
//               </div>

//               <div style={styles.slideImgCont}>
//                 <img src={Img2} style={styles.slideImg} />
//               </div>
//             </div>

//             <div style={styles.shadowComp}>
//               <span className="label">Keywords</span>
//               <div className="line" />
//               <p style={{ fontFamily: 'poppins' }} className="txt ">
//                 {/* Kalanamak rice, scented rice, black husk, ancient grain,
//                 aromatic rice, nutritional benefits, fiber-rich, low fat, */}
//                 {productData?.response['Seo Friendly Tags'].join(', ')}
//               </p>
//               <CopyBtn />
//             </div>

//             <div
//               style={{
//                 // padding: 20,
//                 boxShadow: '0px 4.43px 14.18px 0px rgba(8, 15, 52, 0.06)',
//                 borderRadius: 18,
//                 borderColor: '#EFF0F6',
//                 borderWidth: 0.8,
//                 marginTop: 20,
//                 paddingTop: 20,
//                 paddingBottom: 20,
//               }}
//             >
//               <p
//                 style={{
//                   paddingLeft: 20,
//                   paddingRight: 20,
//                   paddingBottom: 20,
//                   fontSize: 24,
//                   color: '#263238',
//                   fontWeight: '500',
//                   fontFamily: 'poppins',
//                 }}
//               >
//                 AI Recommendations
//               </p>
//               <hr
//                 style={{
//                   // color: '#EFF0F6',
//                   borderColor: '#EFF0F6',
//                   borderWidth: 1,
//                   borderStyle: 'solid',
//                 }}
//               />

//               <div
//                 style={{
//                   padding: 20,
//                 }}
//               >
//                 <span className="label">Product Image presentation</span>
//                 <div className="line" />
//                 <p style={{ fontFamily: 'poppins' }} className="txt ">
//                   Showcase the beauty of Kala Namak Rice with a high-quality,
//                   close-up shot of the uncooked grains arranged neatly in a bowl
//                   or on a plate. Highlight the distinctiveness of the rice's
//                   slender and aromatic grains, capturing their texture and sheen
//                   under natural light.
//                   {/* {productData.market} */}
//                 </p>
//               </div>

//               <div
//                 style={{
//                   padding: 20,
//                   paddingBottom: 0,
//                 }}
//               >
//                 <span className="label">Market Painpoints</span>
//                 <div className="line" />
//                 <p style={{ fontFamily: 'poppins' }} className="txt ">
//                   Investing in quality assurance processes, certifications, and
//                   supply chain transparency initiatives builds trust and
//                   credibility among customers. Transparent sourcing practices,
//                   adherence to quality standards, and product authenticity
//                   reassure customers and differentiate sellers in the market.
//                 </p>

//                 <p
//                   style={{
//                     fontFamily: 'poppins',
//                     color: '#EE1D52',
//                     marginTop: 20,
//                     fontWeight: '500',
//                   }}
//                 >
//                   Display Quality certification certificate to gain edge!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default ProductPage;

// const styles = {
//   label: {
//     color: 'black',
//   },
//   shadowComp: {
//     padding: 20,
//     boxShadow: '0px 4.43px 14.18px 0px rgba(8, 15, 52, 0.06)',
//     borderRadius: 18,
//     borderColor: '#EFF0F6',
//     // borderWidth: 0.8,
//     borderWidth: 1.5,
//     marginTop: 20,
//     backgroundColor: 'white',
//   },
//   slideImgCont: {
//     borderColor: '#EFF0F6',
//     borderWidth: 2,
//     borderRadius: 7,
//   },
//   slideImg: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     padding: 5,
//   },
// };

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './navBar.css';
import User from '../images/icons/person-outline.svg';
import search from '../images/icons/search-outline.svg';
import CopyButton from '../images/icons/copyButton.svg';
import Img1 from '../images/image.png';
import Img2 from '../images/image.png';
import BackIcon from '../images/icons/backIcon.svg';
import DownloadIcon from '../images/icons/downloadIcon.svg';

// import Img1 from 'https://ideogram.ai/assets/image/lossless/response/cAfRAIuZQguLXIKUVJ8fpA';
// import Img2 from 'https://ideogram.ai/assets/image/lossless/response/cAfRAIuZQguLXIKUVJ8fpA';
// const Img1 = {"https://ideogram.ai/assets/image/lossless/response/cAfRAIuZQguLXIKUVJ8fpA"}
// const Img2 = {"https://ideogram.ai/assets/image/lossless/response/cAfRAIuZQguLXIKUVJ8fpA"}

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

  useEffect(() => {
    if (superData) {
      setProductData(superData);
    }
  }, [superData]);

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
                <span style={{ color: 'white', fontWeight: 550, fontSize: 14 }}>
                  Save
                </span>
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
