import React from 'react';
import Product from './ProductLinguisticSathi.svg';

const ProductLinguisticSathi = () => {
  return (
    <div>
      <>
        <section className="bg-[#F5DB90] h-[14rem] text-black py-24 px-4 rounded-2xl">
          {' '}
          {/* Adjusted height to h-2/6 */}
          <div className="container mx-auto flex flex-col md:flex-row h-3/4 justify-between items-center">
            <div className="md:w-1/2 ">
              <img
                src={Product}
                alt="Hero Image"
                className=" rounded-xl w-[15rem]"
              />
            </div>
            <div className="md:w-1/2 mb-0 md:mb-0">
              <h2 className="text-4xl font-bold leading-tight mb-4">
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  List your product in your buyer’s Language
                </h2>
              </h2>
              <button className="bg-[#B8E1E2] text-indigo-600 font-bold py-0 px-6 rounded hover:bg-indigo-600 hover:text-white">
                Start Now
              </button>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default ProductLinguisticSathi;
