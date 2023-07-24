import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const showMenuHandler = () => setShowMenu(!showMenu);

  return (
    <header className="flex flex-col lg:flex-row justify-between lg:items-center w-full lg:px-8 py-4 bg-gray-200">
      {/* Logo */}
      <div className="logo lg:order-1">
        <Link
          to="/"
          className="text-base sm:text-xl font-bold tracking-wider text-orange-500 hover:text-orange-600 cursor-pointer px-8 lg:px-0"
        >
          Information Security
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`lg:hidden cursor-pointer absolute right-4 ${
          showMenu ? "lg:order-2" : "lg:order-3"
        }`}
        onClick={() => showMenuHandler()}
      >
        {showMenu ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <GiHamburgerMenu className="text-2xl" />
        )}
      </div>

      {/* Navigation Menu */}
      <nav
        className={`lg:flex lg:items-center lg:space-x-3 mt-2 lg:mt-0 lg:w-auto lg:order-2 ${
          showMenu ? "block" : "hidden lg:block"
        }`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-5 space-y-2 lg:space-y-0">
          <li className="hover:bg-white lg:hover:bg-transparent text-gray-500 hover:text-blue-400 cursor-pointer px-8 lg:px-0">
            <Link
              to="/"
              className={`tracking-widest text-base font-semibold ${
                location.pathname === "/" ? "text-blue-400" : ""
              }`}
            >
              Adfgx
            </Link>
          </li>
          <li className="hover:bg-white lg:hover:bg-transparent text-gray-500 hover:text-blue-400 cursor-pointer px-8 lg:px-0">
            <Link
              to="/aes-cipher"
              className={`tracking-widest text-base font-semibold ${
                location.pathname === "/aes-cipher" ? "text-blue-400" : ""
              }`}
            >
              Aes
            </Link>
          </li>
          <li className="hover:bg-white lg:hover:bg-transparent text-gray-500 hover:text-blue-400 cursor-pointer px-8 lg:px-0">
            <Link
              to="/bifid-cipher"
              className={`tracking-widest text-base font-semibold ${
                location.pathname === "/bifid-cipher" ? "text-blue-400" : ""
              }`}
            >
              Bifid
            </Link>
          </li>
          <li className="hover:bg-white lg:hover:bg-transparent text-gray-500 hover:text-blue-400 cursor-pointer px-8 lg:px-0">
            <Link
              to="/caesar-cipher"
              className={`tracking-widest text-base font-semibold ${
                location.pathname === "/caesar-cipher" ? "text-blue-400" : ""
              }`}
            >
              Caeser
            </Link>
          </li>
          <li className="hover:bg-white lg:hover:bg-transparent text-gray-500 hover:text-blue-400 cursor-pointer px-8 lg:px-0">
            <Link
              to="/monoalphabetic-cipher"
              className={`tracking-widest text-base font-semibold ${
                location.pathname === "/monoalphabetic-cipher"
                  ? "text-blue-400"
                  : ""
              }`}
            >
              Monoalphabetic
            </Link>
          </li>
          <li className="hover:bg-white lg:hover:bg-transparent text-gray-500 hover:text-blue-400 cursor-pointer px-8 lg:px-0">
            <Link
              to="/polyalphabetic-cipher"
              className={`tracking-widest text-base font-semibold ${
                location.pathname === "/polyalphabetic-cipher"
                  ? "text-blue-400"
                  : ""
              }`}
            >
              Polyalphabetic
            </Link>
          </li>
          <li className="hover:bg-white lg:hover:bg-transparent text-gray-500 hover:text-blue-400 cursor-pointer px-8 lg:px-0">
            <Link
              to="/railfence-cipher"
              className={`tracking-widest text-base font-semibold ${
                location.pathname === "/railfence-cipher" ? "text-blue-400" : ""
              }`}
            >
              RailFence
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
