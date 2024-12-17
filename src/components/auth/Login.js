import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      setError("Both fields are required");
      return;
    }

    // Replace with your actual login logic
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to another page if needed
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="card max-w-[370px] w-full">
      <form
        action="#"
        className="card-body flex flex-col gap-5 p-10"
        id="sign_in_form"
        method="get"
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
