import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-red-800 hover:bg-red-900 hover:text-white rounded-lg px-3 py-2"
      : "text-white hover:bg-red-900 hover:text-white rounded-lg px-3 py-2";

  const linkHamburgerClass = ({ isActive }) =>
    isActive
      ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
      : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-red-900 hover:text-white";

  return (
    <nav className="bg-red-700 border-b border-red-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-10 w-auto" src={logo} alt="logo" />
                <span className="hidden md:block text-white text-xl font-bold ml-2">
                  SHIPMENT NAVIGATOR
                </span>
              </div>
            </NavLink>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <p className="text-white px-3 py-2 font-semibold">
                  {" "}
                  Search by:{" "}
                </p>
                <NavLink to="/searchById" className={linkClass}>
                  ID
                </NavLink>
                <NavLink to="/searchByBarcode" className={linkClass}>
                  Barcode
                </NavLink>
                <NavLink to="/searchByManifest" className={linkClass}>
                  Manifest
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink to="/" className={linkHamburgerClass}>
              Home
            </NavLink>
            <NavLink to="/searchById" className={linkHamburgerClass}>
              ID
            </NavLink>
            <NavLink to="/searchByBarcode" className={linkHamburgerClass}>
              Barcode
            </NavLink>
            <NavLink to="/searchByManifest" className={linkHamburgerClass}>
              Manifest
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
