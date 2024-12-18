import React, { useState } from "react";
import { handleFormChange } from "../../utils/formUtils";
import { callExternalApi } from "../../utils/apiUtils";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    phone: "",
    accept_terms: false,
  });
  const navigate = useNavigate();
  const onChange = handleFormChange(setFormData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.accept_terms) {
      alert("You must accept the Terms and Conditions");
      return;
    }
    try {
      const result = await callExternalApi(
        "http://localhost:5000/api/auth/register",
        "POST",
        formData
      );
      console.log("API Response:", result);
      navigate("/verify-otp", { state: { email: result.email } });
    } catch (err) {
      console.error("Error posting data:", err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card max-w-[370px] w-full">
      <form
        action="#"
        className="card-body flex flex-col gap-5 p-10"
        id="sign_up_form"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-2.5">
          <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">
            Sign up
          </h3>
          <div className="flex items-center justify-center">
            <span className="text-2sm text-gray-700 me-1.5">
              Already have an Account?
            </span>
            <a className="text-2sm link" href="/">
              Sign In
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">First Name</label>
          <input
            className="input"
            name="first_name"
            placeholder="John"
            type="text"
            value={formData.first_name}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Last Name</label>
          <input
            className="input"
            name="last_name"
            placeholder="Morrison"
            type="text"
            value={formData.last_name}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Email</label>
          <input
            className="input"
            name="email"
            placeholder="email@email.com"
            type="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">Phone</label>
          <input
            className="input"
            name="phone"
            placeholder="070 111 1111"
            type="number"
            value={formData.phone}
            maxLength={10}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label font-normal text-gray-900">
            Password
          </label>
          <div className="input" data-toggle-password="true">
            <input
              name="password"
              placeholder="Enter Password"
              type="password"
              value={formData.password}
              onChange={onChange}
            />
            <button
              className="btn btn-icon"
              data-toggle-password-trigger="true"
              type="button"
            >
              <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
              <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label font-normal text-gray-900">
            Confirm Password
          </label>
          <div className="input" data-toggle-password="true">
            <input
              name="confirm_password"
              placeholder="Re-enter Password"
              type="password"
              value={formData.confirm_password}
              onChange={onChange}
            />
            <button
              className="btn btn-icon"
              data-toggle-password-trigger="true"
              type="button"
            >
              <i className="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"></i>
              <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
            </button>
          </div>
        </div>
        <label className="checkbox-group">
          <input
            className="checkbox checkbox-sm"
            name="accept_terms"
            type="checkbox"
            checked={formData.accept_terms}
            onChange={onChange}
          />
          <span className="checkbox-label">
            I accept
            <a className="text-2sm link" href="#">
              Terms &amp; Conditions
            </a>
          </span>
        </label>
        <label className="text-danger">{isError ? isError : ""}</label>
        <button
          className="btn btn-primary flex justify-center grow"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing...." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Register;
