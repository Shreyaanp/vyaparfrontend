import React, { useContext, useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ProductLinguisticSathi from '../../components/dashboard/ProductLinguisticSathi';
import AddProduct from '../../components/dashboard/AddProduct/AddProduct';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { AppContext } from '../../AppContext';
import SignIn from '../Authentication/SignIn'; // Ensure SignIn is imported
import axios from 'axios';

const ECommerce: React.FC = () => {
  const context = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('ECommerce component mounted');
    if (context) {
      console.log('Context is available:');
      fetchUserProducts(context.user.id);
    } else {
      console.log('Context is not available');
    }
  }, [context]);

  const fetchUserProducts = async (userId: string) => {
    try {
      const response = await axios.get(`https://backend.vlai.in/product/${userId}`);
      console.log('Fetched products:', response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  if (!context || !context.user) {
    return <SignIn />;
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Your Products" />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-4 2xl:gap-0">
        <div className="md:col-span-2 xl:col-span-4">
          <AddProduct />
          <Breadcrumb pageName="Product Linguistic Sathi" />
          <ProductLinguisticSathi products={products} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
