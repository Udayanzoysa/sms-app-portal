import React, { useState, useEffect, useContext } from "react";
import userAPI from "../../services/userAPI";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState(37);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  // Handle OTP input change
  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus on next input field if value is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Handle backspace for navigation
  const handleBackspace = (index) => {
    if (index > 0 && !otp[index]) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Resend OTP handler
  const handleResend = async () => {
    if (resendTimer === 0) {
      setResendTimer(37);
      try {
        const response = await userAPI.resendOTP({ email: email });
        setSuccess(response.message);
        setError("");
      } catch (err) {
        console.error("Error posting data:", err.message);
        setError(err.message);
      }
    }
  };

  // Timer countdown effect
  React.useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(
        () => setResendTimer((prev) => prev - 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    try {
      const response = await userAPI.verifyOTP({ email, otp: otpString });
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.accessToken)
      );
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(response.data.refreshToken)
      );
      navigate("/dashboard");
    } catch (err) {
      console.error("Error posting data:", err.message);
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
      <div className="card max-w-[380px] w-full" id="2fa_form">
        <form
          className="card-body flex flex-col gap-5 p-10"
          onSubmit={handleSubmit}
        >
          <img
            alt="image"
            className="dark:hidden h-20 mb-2"
            src="/assets/media/illustrations/34.svg"
          />
          <img
            alt="image"
            className="light:hidden h-20 mb-2"
            src="/assets/media/illustrations/34.svg"
          />
          <div className="text-center mb-2">
            <h3 className="text-lg font-medium text-gray-900 mb-5">
              Verify your phone
            </h3>
            <div className="flex flex-col">
              <span className="text-2sm text-gray-700 mb-1.5">
                Enter the verification code we sent to
              </span>
              <a className="text-sm font-medium text-gray-900" href="#">
                ****** 7859
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                className="input focus:border-primary-clarity focus:ring focus:ring-primary-clarity size-10 shrink-0 px-0 text-center"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) =>
                  e.key === "Backspace" && handleBackspace(index)
                }
                type="text"
              />
            ))}
          </div>
          <div className="flex items-center justify-center mb-2">
            <span className="text-xs text-gray-700 me-1.5">
              Didn’t receive a code? ({resendTimer}s)
            </span>
            <button
              type="button"
              className="text-xs link"
              onClick={handleResend}
              disabled={resendTimer > 0}
            >
              Resend
            </button>
          </div>
          <span className="text-2sm mb-1.5 text-red-600">{error}</span>
          <span className="text-2sm mb-1.5 text-green-600">{success}</span>
          <button
            type="submit"
            className="btn btn-primary flex justify-center grow"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
