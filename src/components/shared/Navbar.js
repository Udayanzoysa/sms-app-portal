import React from "react";
import NavDropdownMenu from "./NavDropdownMenu";

function Navbar() {
  const campainDropdown = [
    {
      title: "New Campaign",
      link: "/profile",
    },
    {
      title: "Upload Campain",
      link: "/my-account",
    },
    {
      title: "My Campaign",
      link: "/network",
    },
    {
      title: "Message Template",
      link: "/auth",
    },
  ];
  return (
    <div className="border-b border-gray-200 pb-5 lg:pb-0 mb-5 lg:mb-10">
      <div className="flex flex-wrap justify-between items-center gap-2 container-fixed">
        <div className="grid">
          <div className="scrollable-x-auto">
            <div className="menu gap-5 lg:gap-7.5">
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/integrations"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Dashboard
                  </div>
                </a>
              </div>
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/integrations"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    SMS Logs
                  </div>
                </a>
              </div>
              <NavDropdownMenu name="Account" menuItems={campainDropdown} />
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/integrations"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Contact
                  </div>
                </a>
              </div>
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/api-keys"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    API Keys
                  </div>
                </a>
              </div>
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/api-keys"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Sender Ids
                  </div>
                </a>
              </div>
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/api-keys"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Payments
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-2sm text-gray-800 gap-5 lg:pb-4">
          <a
            className="hover:text-primary"
            href="https://keenthemes.com/metronic/tailwind/docs/"
          >
            User Guides
          </a>
          <a className="hover:text-primary" href="https://devs.keenthemes.com">
            Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
