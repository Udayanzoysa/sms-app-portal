import { useRoutes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ExternalLayout from "../layouts/ExternalLayout";
import InternalLayout from "../layouts/InternalLayout";
import Login from "../components/auth/Login";
import ResetPassword from "../components/auth/ResetPassword";
import Register from "../components/auth/Register";
import OtpVerification from "../components/auth/OtpVerification";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../components/pages/Dashboard";

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
          path: "/verify-otp",
          element: <OtpVerification />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <InternalLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        // {
        //   path: "user-list",
        // },
        // {
        //   path: "unauthorized",
        //   element: <Unauthorized />,
        // },
        // {
        //   path: "profile",
        //   element: <ProtectedRoute element={<Profile />} />, // Protected profile route
        // },
      ],
    },
  ]);

  return element;
};

export default RouterConfigs;
