import React from 'react';
import ProductImage from './ProductLinguisticSathi.svg';
import { useNavigate } from 'react-router-dom';


interface Product {
  productTitle: string;
  productDescription: string;
  // Add other relevant product fields here
}

interface ProductLinguisticSathiProps {
  products: Product[];
}

const ProductLinguisticSathi: React.FC<ProductLinguisticSathiProps> = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-[#F5DB90] h-[14rem] text-black py-24 px-4 rounded-2xl">
        <div className="container mx-auto flex flex-col md:flex-row h-3/4 justify-between items-center">
          <div className="md:w-1/2 ">
            <img
              src={ProductImage}
              alt="Hero Image"
              className="rounded-xl w-[15rem]"
            />
          </div>
          <div className="md:w-1/2 mb-0 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-4">
              List your product in your buyer’s Language
            </h2>
            <button
              onClick={() => navigate('/voice')}
              
             className="bg-[#B8E1E2] text-indigo-600 font-bold py-0 px-6 rounded hover:bg-indigo-600 hover:text-white">
              Start Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLinguisticSathi;
