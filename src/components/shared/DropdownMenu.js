import React from "react";

const DropdownMenu = ({ name, menuItems }) => {
  return (
    <div className="menu menu-default">
      <div className="menu-item menu-item-dropdown group relative">
        {/* Dropdown toggle */}
        <div className="menu-toggle text-gray-900 font-medium flex items-center">
          {name}
          <div className="menu-arrow ml-2">
            <i className="ki-filled ki-down"></i>
          </div>
        </div>
        {/* Dropdown menu */}
        <div className="menu-dropdown menu-default w-48 hidden group-hover:block absolute bg-white shadow-lg rounded-md mt-5 z-10">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <a
                className="menu-link flex items-center px-4 py-2 hover:bg-gray-100"
                href={item.link}
              >
                <span className="menu-icon">
                  <i className={`ki-filled ${item.icon}`}></i>
                </span>
                <span className="menu-title ml-2">{item.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
