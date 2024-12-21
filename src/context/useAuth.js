import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import userAPI from "../services/userAPI";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({
    accessToken: null,
    isReady: false,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loginUser = async (email, otpToken) => {
    try {
      const res = await userAPI.verifyOTP(email, otpToken);
      if (res.status === 200) {
        const storedToken = Cookies.get("accessToken");
        setToken({ accessToken: storedToken, isReady: true });
        navigate("/dashboard");
      }
    } catch (e) {
      toast.warning("Server error occurred");
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await userAPI.refreshToken();
      setToken((prev) => ({
        ...prev,
        accessToken: response.data.accessToken,
      }));
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      setToken({ accessToken: null, isReady: true });
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refreshAccessToken();
  //   }, 14 * 60 * 1000);
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    refreshAccessToken();
  }, []);

  useEffect(() => {
    const storedToken = Cookies.get("accessToken");
    console.log("Stored Token on Load:", storedToken); // Debug log
    if (storedToken) {
      setToken({
        accessToken: storedToken,
        isReady: true,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + storedToken;
    } else {
      setToken({ accessToken: null, isReady: true });
    }
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ token, setToken, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
