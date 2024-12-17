import React, { useState } from "react";

const ResetPassword = () => {
  return (
    <div className="card max-w-[370px] w-full">
      <form
        action="#"
        className="card-body flex flex-col gap-5 p-10"
        id="reset_password_enter_email_form"
        method="post"
      >
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Your Email</h3>
          <span className="text-2sm text-gray-700">
            Enter your email to reset password
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="form-label font-normal text-gray-900">Email</label>
          <input
            className="input"
            placeholder="email@email.com"
            type="text"
            value=""
          />
        </div>
        <a
          className="btn btn-primary flex justify-center grow"
          href="/metronic/tailwind/demo1/authentication/classNameic/reset-password/check-email/"
        >
          Contoinue
          <i className="ki-filled ki-black-right"></i>
        </a>
      </form>
    </div>
  );
};

export default ResetPassword;
