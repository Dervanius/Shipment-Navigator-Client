import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import favicon from "../assets/images/favicon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/searchById", label: "ID" },
    { to: "/searchByBarcode", label: "Barcode" },
    { to: "/searchByAltBarcode", label: "Alt Barcode" },
    { to: "/searchByTrackingNo", label: "Tracking No" },
    { to: "/searchByManifest", label: "Manifest" },
  ];

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 ${
      isActive ? "text-white bg-red-800" : "text-white hover:bg-red-900"
    }`;

  const linkHamburgerClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-base font-medium ${
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-red-900 hover:text-white"
    }`;

  return (
    <nav className="bg-red-700 border-b border-red-500 fixed w-full z-50 top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo & Title */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <NavLink to="/" className="flex items-center mr-4">
              {/* Show logo on large screens */}
              <img
                className="hidden lg:block h-10 w-auto"
                src={logo}
                alt="logo"
              />
              {/* Show favicon on medium and smaller screens */}
              <img
                className="block lg:hidden h-8 w-auto bg-white p-1 rounded-lg shadow-md"
                src={favicon}
                alt="favicon"
              />
              <span className="text-white text-xl font-bold ml-2">
                SHIPMENT NAVIGATOR
              </span>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkHamburgerClass}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
