import React from "react";
import ProductImage from "../../assets/images/ProLinguisticSathi.svg";
import { useNavigate } from "react-router-dom";
import start from "../../assets/Icons/start.svg";
import Text from "../../Bhasini/Text";

interface Product {
  productTitle: string;
  productDescription: string;
  // Add other relevant product fields here
}

interface ProductLinguisticSathiProps {
  products: Product[];
}

const ProductLinguisticSathi: React.FC<ProductLinguisticSathiProps> = ({
  products,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-[white] h-[14rem] text-black py-24 px-4 rounded-2xl m-6">
        <div className="container mx-auto flex flex-col md:flex-row h-3/4 justify-between items-center">
          <div className="md:w-1/2 ">
            <img
              src={ProductImage}
              // alt="Hero Image"
              className="rounded-xl w-[18rem]"
            />
          </div>
          <div className="md:w-1/2 mb-0 md:mb-0">
            <Text className="text-4xl font-medium leading-tight mb-4">
              List your product in your buyer’s Language
            </Text>
            <button className="flex items-center px-4 py-2 bg-[#006A66] text-white rounded-lg">
              <Text>Add Products</Text>
              <img
                src={start}
                style={{ width: 20, height: 20 }}
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLinguisticSathi;
