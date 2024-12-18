import axios from "axios";

export const callExternalApi = async (url, method = "GET", data = null) => {
  try {
    const config = {
      method,
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data, // Include data for POST, PUT, PATCH
    };

    const response = await axios(config);

    return response.data; // Return the response data
  } catch (error) {
    console.error("API Error:", error.message);
    throw error; // Re-throw for error handling
  }
};
