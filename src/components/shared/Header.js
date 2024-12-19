import React from "react";
import UserDropdownMenu from "./UserDropdownMenu";

const Header = () => {
  return (
    <header className="flex items-center transition-[height] shrink-0 bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark] h-[--tw-header-height]">
      <div className="flex justify-between items-center lg:gap-4 container-fixed">
        <div className="flex items-center gap-2 lg:gap-5 2xl:-ml-[60px]">
          <a className="shrink-0" href="/metronic/tailwind/react/demo2">
            <img
              src="https://keenthemes.com/metronic/tailwind/react/demo2/media/app/mini-logo-circle.svg"
              className="dark:hidden min-h-[42px]"
              alt="logo"
            />
            <img
              src="https://keenthemes.com/metronic/tailwind/react/demo2/media/app/mini-logo-circle.svg"
              className="hidden dark:inline-block min-h-[42px]"
              alt="logo"
            />
          </a>
          <div className="flex items-center">
            <h3 className="text-gray-700 text-base hidden md:block">
              SMS Platform
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1">
            <div className="menu">
              <div className="menu-item menu-item-dropdown">
                <div className="menu-toggle btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-gray-200 dropdown-open:bg-gray-200 text-gray-600">
                  <i className="ki-filled ki-notification-status text-gray-600"></i>
                </div>
              </div>
            </div>
            <div className="menu">
              <div className="menu-item menu-item-dropdown">
                <div className="menu-toggle btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-gray-200 dropdown-open:bg-gray-200 text-gray-600">
                  <i className="ki-filled ki-messages text-gray-600"></i>
                </div>
              </div>
            </div>
          </div>
          <UserDropdownMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
