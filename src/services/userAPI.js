import axios from "axios";

const API = axios.create({
  baseURL: "https://sms-backend-sigma.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const userAPI = {
  // Modify verifyUser to accept formData
  verifyUser: async (formData) => {
    try {
      const response = await API.post("/auth/login", formData);
      return response;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "An error occurred during login"
      );
    }
  },
  verifyOTP: async (email, otp) => {
    try {
      const response = await API.post(
        "/2fa/verify",
        { email, otp },
        { withCredentials: true }
      );
      return response;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "An error occurred during login"
      );
    }
  },
  resendOTP: async (email) => {
    const uemail = email.email;
    try {
      const response = await API.post(`/2fa/resend-otp`, { email: uemail });
      return response.data; // Returning the response data
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error resending OTP");
    }
  },

  refreshToken: async () => {
    try {
      const response = await API.post("/token/refresh", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error refreshing token"
      );
    }
  },
};

export default userAPI;
