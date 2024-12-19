import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const InternalLayout = () => {
  return (
    <>
      <div className="antialiased flex h-full text-base text-gray-700 [--tw-page-bg:var(--tw-light)] [--tw-header-height-default:100px] [[data-sticky-header=on]&]:[--tw-header-height:60px] [--tw-header-height:--tw-header-height-default] bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]">
        <div className="flex grow flex-col [[data-sticky-header=on]_&amp;]:pt-[--tw-header-height-default]">
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InternalLayout;
