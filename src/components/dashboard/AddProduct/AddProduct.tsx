import React from 'react';
import { useNavigate } from 'react-router-dom';
import editIcon from './edit03.svg';
import addIcon from './add.svg';
import './AddProduct.css'; // Import the separated CSS

const AddProduct = ({ products }) => {
  const navigate = useNavigate();

  const handleEdit = (product) => {
    navigate('/productpage', { state: { productData: product } });
  };
  console.log(products);

  return (
    <div className="productNameWrapper">
      {products.map((product, index) => (
        <div key={index} className="productName">
          <div className="product1">Product {index + 1}</div>
          <div className="background">
            <div className="vermaHandicrafts">
              <div className="vermaHandicraftsChild" />
              <div className="theLivingEarth">{product.productTitle}</div>
            </div>
            <div className="rectangleParent">
              <div className="frameChild" />
              <img
                className="edit03Icon"
                loading="lazy"
                alt="Edit"
                src={editIcon}
                onClick={() => handleEdit(product)}
              />
            </div>
          </div>
        </div>
      ))}
      <button 
        onClick={() => navigate('/onboarding')}
      className="addMore">
        <div className="addMoreChild" />
        <div className="productLinguisticSathi">
          <b className="addMoreProducts">Add More Products</b>
        </div>
        <img className="addIcon" alt="Add" src={addIcon} />
      </button>
    </div>
  );
};

export default AddProduct;
