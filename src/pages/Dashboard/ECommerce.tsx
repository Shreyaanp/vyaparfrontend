import React, { useContext, useEffect } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ProductLinguisticSathi from '../../components/dashboard/ProductLinguisticSathi';
import AddProduct from '../../components/dashboard/AddProduct/AddProduct';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { AppContext } from '../../AppContext';
// import SignIn from '../Authentication/SignIn';

const ECommerce: React.FC = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    console.log('ECommerce component mounted');
    if (context) {
      console.log('Context is available:');
    } else {
      console.log('Context is not available');
    }
  }, []);

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
          <ProductLinguisticSathi />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
