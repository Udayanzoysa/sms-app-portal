import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import userAPI from "../services/userAPI";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({
    accessToken: null,
    isReady: false,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  const loginUser = async (email, otpToken) => {
    try {
      const res = await userAPI.verifyOTP(email, otpToken);
      if (res) {
        const { accessToken, refreshToken } = res?.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setToken({ accessToken, isReady: true });
        navigate("/dashboard");
      }
    } catch (e) {
      toast.warning("Server error occurred");
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post("/token/refresh");
      setToken((prev) => ({
        ...prev,
        accessToken: response.data.accessToken,
      }));
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      setToken({ accessToken: null, isReady: true });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshAccessToken();
    }, 14 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
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