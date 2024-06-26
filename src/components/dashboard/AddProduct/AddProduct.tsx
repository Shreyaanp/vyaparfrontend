import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import editIcon from './edit03.svg';
import productimg from './AddProduct.svg';
import addIcon from './add.svg';
import './AddProduct.css'; // Import the separated CSS
import { AppContext } from '../../../AppContext';
import Remove from "../../../images/remove.png"

const apiUrl = import.meta.env.VITE_BASE_API;

const AddProduct = ({ products }) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const handleEdit = (product) => {
    context.setIsEditing(true);
    navigate('/productpage', { state: { productData: product } });
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}product/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Product deleted successfully');
        window.location.reload();
      } else {
        const errorData = await response.json();
        alert(`Error deleting product: ${errorData.detail}`);
      }
    } catch (error) {
      alert(`Error deleting product: ${error.message}`);
    }
  };

  const handleAdd = () => {
    context.setIsEditing(false);
    navigate('/onBoarding'); // Navigating to product page for new product
  };

  return (
    <div className="productNameWrapper">
      {products.length === 0 && (
        <img className="productimg" src={productimg} alt="Banner Image" />
      )}
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
              <button onClick={() => handleDelete(product._id)} className="deleteButton">
                <img className='Remove' src = {Remove}/>
              </button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={handleAdd} className="addMore">
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
