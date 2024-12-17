import { useRoutes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ExternalLayout from "../layouts/ExternalLayout";
import InternalLayout from "../layouts/InternalLayout";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/ResetPassword";
import Register from "../components/auth/Register";
import OtpVerification from "../components/auth/OtpVerification";

const RouterConfigs = () => {
  //ViewOfficerPage
  const element = useRoutes([
    {
      path: "/",
      element: <ExternalLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
        {
          path: "/otp-verification",
          element: <OtpVerification />,
        },
      ],
    },
    // {
    //   path: "/app",
    //   element: <InternalLayout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "user-list",
    //       element: (
    //         <ProtectedAdminRoute
    //           element={<UserList />}
    //           userRole={user.role ?? ""}
    //         />
    //       ),
    //     },
    //     {
    //       path: "unauthorized",
    //       element: <Unauthorized />,
    //     },
    //     {
    //       path: "profile",
    //       element: <Profile />,
    //     },
    //   ],
    // },
  ]);

  return element;
};

export default RouterConfigs;
