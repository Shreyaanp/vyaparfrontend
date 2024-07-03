import React, { useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/Sidebar/index";

const DefaultLayout = ({ children }) => {
  const { pathname } = useLocation();
  const sidebarOpen = false; // Assuming you have a state for this
  const setSidebarOpen = () => {}; // Assuming you have a method for this

  // Define the routes that should only render children
  const simpleRoutes = [
    "/store-onboarding",
    "/voice",
    "/product-page",
    "/product-onboarding",
    "/signin",
    "/",
  ];

  if (simpleRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark bg-[#FDE7A8]">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
