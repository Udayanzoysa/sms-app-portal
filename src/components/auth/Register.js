import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can add your validation logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      alert("You must accept the Terms and Conditions");
      return;
    }

    alert("Sign up successful!");
    // Add your sign up logic here (e.g., API call)
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
          <label className="form-label text-gray-900">Email</label>
          <input
            className="input"
            name="user_email"
            placeholder="email@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label font-normal text-gray-900">
            Password
          </label>
          <div className="input" data-toggle-password="true">
            <input
              name="user_password"
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              name="user_password"
              placeholder="Re-enter Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            name="check"
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <span className="checkbox-label">
            I accept
            <a className="text-2sm link" href="#">
              Terms &amp; Conditions
            </a>
          </span>
        </label>
        <button
          className="btn btn-primary flex justify-center grow"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
