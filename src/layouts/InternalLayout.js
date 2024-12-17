import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

const InternalLayout = () => {

  return (
    <>
      <Outlet />
    </>
  );
};

export default InternalLayout;
