import { useEffect, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppContext } from "./AppContext";

import Loader from "./components/common/Loader";
import PageTitle from "./components/common/PageTitle";

import SignUp from "./Pages/Authentication/Signup";
import SignIn from "./Pages/Authentication/Signin";

import Dashboard from "./Pages/Dashboard/Dashboard";
import StoreOnboarding from "./Pages/StoreOnboarding/StoreOnboard";
import ProductOnBoarding from "./Pages/ProductOnboarding/ProductOnboard";
import ProductPage from "./Pages/ProductOnboarding/ProductPage";
import Voice from "./Pages/Voice/Voice";
import MyStore from "./Pages/MyStore/MyStore";
import Inventory from "./Pages/Inventory/Inventory";
import DefaultLayout from "./layout/DefaultLayout";
import LivePage from "./Pages/LivePage/LivePage";

const apiUrl = (import.meta as any).env.VITE_BASE_API;

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
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Connection successful:", data);
      })
      .catch((error) => {
        console.error("Error connecting to server:", error);
      });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <SignUp />
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
          path="/dashboard"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/mystore"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <MyStore />
            </>
          }
        />

        <Route
          path="/inventory"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <Inventory />
            </>
          }
        />

        <Route
          path="/product-onboarding"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <ProductOnBoarding />
            </>
          }
        />

        <Route
          path="/product-page"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <ProductPage />
            </>
          }
        />

        <Route
          path="/voice"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <Voice />
            </>
          }
        />
        <Route
          path="/store-onboarding"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <StoreOnboarding />
            </>
          }
        />
        <Route
          path="/live/:shareable_id"
          element={
            <>
              <PageTitle title="Vyapar Launchpad" />
              <LivePage />
            </>
          }
        />

      </Routes>
    </DefaultLayout>
  );
}

export default App;
