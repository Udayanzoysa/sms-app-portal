import React, { useState } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // State for OTP digits
  const [resendTimer, setResendTimer] = useState(37); // Timer for resend button

  // Handle OTP input change
  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Prevent non-numeric input
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
  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(37); // Reset timer
      console.log("Resending OTP..."); // Add API call here
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    console.log("Submitted OTP:", otpCode); // Add API call for verification
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
