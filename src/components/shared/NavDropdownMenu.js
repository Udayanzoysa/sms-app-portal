import React, { useState, useRef } from "react";

const NavDropdownMenu = ({ name, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false); // Use useState to manage dropdown open/close state
  const [transformStyles, setTransformStyles] = useState("");
  const triggerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();

      // Calculate the transform values
      const translateX = rect.left;
      const translateY = rect.bottom;

      // Update the transform styles dynamically
      setTransformStyles(`translate(${translateX}px, ${translateY}px)`);
    }
  };

  const dropdownStyles = {
    zIndex: 105,
    position: "fixed",
    inset: "0px auto auto 0px",
    margin: "0px",
    transform: transformStyles,
  };

  return (
    <div
      className={`menu-item border-b-2 border-b-transparent menu-item-active:border-b-gray-900 menu-item-here:border-b-gray-900  group-hover:block  ${
        isOpen ? "show menu-item-dropdown" : ""
      }`}
    >
      <div
        className="menu-link gap-1.5 pb-2 lg:pb-4"
        ref={triggerRef}
        onClick={toggleDropdown}
      >
        <span className="menu-title text-nowrap text-sm text-gray-800 menu-item-active:text-gray-900 menu-item-active:font-medium menu-item-here:text-gray-900 menu-item-here:font-medium menu-item-show:text-gray-900 menu-link-hover:text-gray-900">
          {name}
        </span>
        <span className="menu-arrow">
          <i className="ki-filled ki-down text-2xs text-gray-500"></i>
        </span>
      </div>

      {/* Conditionally add the 'show' and 'menu-item-dropdown' classes */}
      <div
        className={`menu-dropdown menu-default py-2 min-w-[200px] ${
          isOpen ? "show" : ""
        }`}
        style={dropdownStyles}
      >
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <a className="menu-link" href={item.link}>
              <span className="menu-title">{item.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavDropdownMenu;
