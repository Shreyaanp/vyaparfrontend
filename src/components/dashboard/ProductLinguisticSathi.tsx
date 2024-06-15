import React from 'react';
import ProductImage from './ProductLinguisticSathi.svg';

interface Product {
  productTitle: string;
  productDescription: string;
  // Add other relevant product fields here
}

interface ProductLinguisticSathiProps {
  products: Product[];
}

const ProductLinguisticSathi: React.FC<ProductLinguisticSathiProps> = ({ products }) => {
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
            <button className="bg-[#B8E1E2] text-indigo-600 font-bold py-0 px-6 rounded hover:bg-indigo-600 hover:text-white">
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* Render the list of products */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Products</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-bold">{product.productTitle}</h3>
                <p>{product.productDescription}</p>
                {/* Render other product details here */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </section>
    </div>
  );
};

export default ProductLinguisticSathi;
