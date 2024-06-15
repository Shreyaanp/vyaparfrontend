// src/App.tsx
import React, { useEffect, useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import OnBoarding from './components/Onboarding/OnBoardingPages';
import ProductPage from './pages/ProductPage';
import { AppContext } from './AppContext';

function App() {
  const { loading, setLoading } = useContext(AppContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [setLoading]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_BASE_API;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('Connection successful:', data);
      })
      .catch((error) => {
        console.error('Error connecting to server:', error);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/ecommerce"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/onboarding"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <OnBoarding />
            </>
          }
        />
        <Route
          path="/productPage"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <ProductPage />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
