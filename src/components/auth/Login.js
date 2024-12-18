import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userAPI from "../../services/userAPI";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // For password visibility toggle
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await userAPI.verifyUser(formData);
      navigate("/verify-otp", { state: { email: data.email } });
    } catch (err) {
      setError(err.message || "Invalid credentials");
      console.log(err);
    }
  };

  return (
    <div className="card max-w-[370px] w-full">
      <form
        action="#"
        className="card-body flex flex-col gap-5 p-10"
        id="sign_in_form"
        method="post" // Changed to post method
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
            Sign in
          </h3>
          <div className="flex items-center justify-center font-medium">
            <span className="text-2sm text-gray-700 me-1.5">
              Need an account?
            </span>
            <a className="text-2sm link" href="/register">
              Sign up
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="form-label font-normal text-gray-900">
            Username
          </label>
          <input
            className="input"
            placeholder="email@email.com"
            type="text"
            name="email" // Added name for email input
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1">
            <label className="form-label font-normal text-gray-900">
              Password
            </label>
            <a className="text-2sm link shrink-0" href="/reset-password">
              Forgot Password?
            </a>
          </div>
          <div className="input" data-toggle-password="true">
            <input
              name="password" // Corrected name for password input
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"} // Toggle password visibility
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className="btn btn-icon"
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility on button click
            >
              <i
                className={`ki-filled ki-eye text-gray-500 ${
                  showPassword ? "hidden" : "block"
                }`}
              ></i>
              <i
                className={`ki-filled ki-eye-slash text-gray-500 ${
                  showPassword ? "block" : "hidden"
                }`}
              ></i>
            </button>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

        <label className="checkbox-group">
          <input
            className="checkbox checkbox-sm"
            name="check"
            type="checkbox"
            value="1"
          />
          <span className="checkbox-label">Remember me</span>
        </label>

        <button
          className="btn btn-primary flex justify-center grow"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
