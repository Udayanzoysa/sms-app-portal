import React, { useState, useEffect } from "react";

const UserDropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold for mobile
    };

    window.addEventListener("resize", checkMobile);
    checkMobile(); // Check on initial render

    return () => window.removeEventListener("resize", checkMobile); // Cleanup on unmount
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="menu" data-menu="true">
      <div
        className={`menu-item ${isMenuOpen ? "show menu-item-dropdown" : ""}`}
        data-menu-item-toggle="dropdown"
        data-menu-item-trigger="click|lg:click"
      >
        <div
          className="menu-toggle btn btn-icon rounded-full"
          onClick={toggleMenu}
        >
          <img
            alt=""
            className="size-9 rounded-full justify-center border border-gray-500 shrink-0"
            src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/gray/5.png"
          />
        </div>
        {isMenuOpen && (
          <div
            className="menu-dropdown menu-default light:border-gray-300 w-screen max-w-[250px]"
            style={{
              zIndex: 105,
              inset: "0px 0px auto auto",
              margin: "0px",
              transform: isMobile
                ? "translate3d(-4px, 60px, 0px)" // Mobile
                : "translate(-300px, 80px)", // Desktop
              position: "fixed",
            }}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
              <div className="flex items-center gap-2">
                <img
                  alt=""
                  className="size-9 rounded-full border-2 border-success"
                  src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/300-2.png"
                />
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm text-gray-800 font-semibold leading-none">
                    Cody Fisher
                  </span>
                  <a
                    className="text-xs text-gray-600 hover:text-primary font-medium leading-none"
                    href="/metronic/tailwind/demo2/account/home/get-started"
                  >
                    c.fisher@gmail.com
                  </a>
                </div>
              </div>
              <span className="badge badge-xs badge-primary badge-outline">
                Pro
              </span>
            </div>

            <div className="menu-separator"></div>

            {/* Menu Items */}
            <div className="flex flex-col">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="/metronic/tailwind/demo2/public-profile/profiles/default"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-badge"></i>
                  </span>
                  <span className="menu-title">Public Profile</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="/metronic/tailwind/demo2/account/home/user-profile"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-profile-circle"></i>
                  </span>
                  <span className="menu-title">My Profile</span>
                </a>
              </div>
            </div>

            <div className="menu-separator"></div>

            {/* Footer */}
            <div className="flex flex-col">
              <div className="menu-item mb-0.5">
                <div className="menu-link">
                  <span className="menu-icon">
                    <i className="ki-filled ki-moon"></i>
                  </span>
                  <span className="menu-title">Dark Mode</span>
                  <label className="switch switch-sm">
                    <input
                      data-theme-state="dark"
                      data-theme-toggle="true"
                      name="check"
                      type="checkbox"
                      value="1"
                    />
                  </label>
                </div>
              </div>
              <div className="menu-item px-4 py-1.5">
                <a
                  className="btn btn-sm btn-light justify-center"
                  href="/metronic/tailwind/demo2/authentication/classic/sign-in"
                >
                  Log out
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropdownMenu;
