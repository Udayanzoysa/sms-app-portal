import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = ({ title, links, currentPage }) => {
  return (
    <div className="mb-5 lg:mb-10">
      <div className="container-fixed flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center flex-wrap gap-1 lg:gap-5">
          <h1 className="font-medium text-lg text-gray-900">{title}</h1>
          <div className="flex items-center gap-1 text-sm font-normal">
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  className="text-gray-700 hover:text-primary"
                  href={link.href}
                >
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="text-gray-400 text-sm">/</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400 text-sm">/</span>
            <span className="text-gray-900">{currentPage}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <a
            className="btn btn-light btn-sm"
            href="/metronic/tailwind/demo2/public-profile/profiles/default"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Breadcrumb;
