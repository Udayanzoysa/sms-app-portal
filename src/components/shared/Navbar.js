import React from "react";

function Navbar() {
  return (
    <div className="border-b border-gray-200 pb-5 lg:pb-0 mb-5 lg:mb-10">
      <div className="flex flex-wrap justify-between items-center gap-2 container-fixed">
        <div className="grid">
          <div className="scrollable-x-auto">
            <div className="menu gap-5 lg:gap-7.5">
              <div className="menu-item menu-item-dropdown border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <div className="menu-link gap-1.5 pb-2 lg:pb-4">
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Account
                  </div>
                  <div className="menu-arrow">
                    <i className="ki-filled ki-down text-2xs text-gray-500"></i>
                  </div>
                </div>
              </div>
              <div className="menu-item menu-item-dropdown border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <div className="menu-link gap-1.5 pb-2 lg:pb-4">
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Billing
                  </div>
                  <div className="menu-arrow">
                    <i className="ki-filled ki-down text-2xs text-gray-500"></i>
                  </div>
                </div>
              </div>
              <div className="menu-item menu-item-dropdown border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <div className="menu-link gap-1.5 pb-2 lg:pb-4">
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Security
                  </div>
                  <div className="menu-arrow">
                    <i className="ki-filled ki-down text-2xs text-gray-500"></i>
                  </div>
                </div>
              </div>
              <div className="menu-item menu-item-dropdown border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <div className="menu-link gap-1.5 pb-2 lg:pb-4">
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Members &amp; Roles
                  </div>
                  <div className="menu-arrow">
                    <i className="ki-filled ki-down text-2xs text-gray-500"></i>
                  </div>
                </div>
              </div>
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/integrations"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Integrations
                  </div>
                </a>
              </div>
              <div className="menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <a
                  className="menu-link gap-2.5 pb-2 lg:pb-4"
                  href="/metronic/tailwind/react/demo2/account/notifications"
                >
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    Notifications
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
              <div className="menu-item menu-item-dropdown border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900">
                <div className="menu-link gap-1.5 pb-2 lg:pb-4">
                  <div className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
                    More
                  </div>
                  <div className="menu-arrow">
                    <i className="ki-filled ki-down text-2xs text-gray-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-2sm text-gray-800 gap-5 lg:pb-4">
          <a
            className="hover:text-primary"
            href="https://www.youtube.com/c/KeenThemesTuts/videos"
          >
            Videos
          </a>
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
