import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [login, setLogin] = useState(false);
  const [menubg, setMenubg] = useState([true, false, false, false]);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const mobileRef = useRef(null);

  const profileButtonHandler = () => {
    setOpen(!open);
  };

  const mobileButtonHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  const bgHandler = (e) => {
    const newList = menubg.map((state, index) =>
      index === parseInt(e.target.dataset.columns) ? true : false
    );
    setMenubg([...newList]);
  };

  useEffect(() => {
    if (menuRef.current !== null || mobileRef.current !== null) {
      function handleOutsideClick(event) {
        try {
          if (!menuRef.current.contains(event.target)) {
            if (!open && !mobileOpen) return;
            setOpen(false);
            setMobileOpen(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }
  }, [open, menuRef, mobileOpen, mobileRef]);

  return (
    <div>
      <nav className="bg-red-800 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={mobileButtonHandler}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* <!--
              Icon when menu is closed.
  
              Heroicon name: outline/menu
  
              Menu open: "hidden", Menu closed: "block"
            --> */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!--
              Icon when menu is open.
  
              Heroicon name: outline/x
  
              Menu open: "block", Menu closed: "hidden"
            --> */}
                <svg
                  className="hidden h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="./images/pizza-logo.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="./images/pizza-logo.png"
                    alt="Workflow"
                  />
                </a>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    onClick={bgHandler}
                    href="/promotions"
                    data-columns="0"
                    className={`${
                      menubg[0] === true ? "bg-red-900" : "hover:bg-red-600"
                    } text-white block px-2 md:px-3 py-2 rounded-md text-sm md:text-base font-medium`}
                    aria-current="page"
                  >
                    Promotions
                  </a>

                  <a
                    onClick={bgHandler}
                    href="/pizza"
                    data-columns="1"
                    className={`${
                      menubg[1] === true ? "bg-red-900" : "hover:bg-red-600"
                    } text-white block px-2 md:px-3 py-2 rounded-md text-sm md:text-base font-medium`}
                  >
                    Pizzalar
                  </a>

                  <a
                    onClick={bgHandler}
                    href="/sandwiches"
                    data-columns="2"
                    className={`${
                      menubg[2] === true ? "bg-red-900" : "hover:bg-red-600"
                    } text-white block px-2 md:px-3 py-2 rounded-md text-sm md:text-base font-medium`}
                  >
                    Sandviçler
                  </a>

                  <a
                    onClick={bgHandler}
                    href="/extra"
                    data-columns="3"
                    className={`${
                      menubg[3] === true ? "bg-red-900" : "hover:bg-red-600"
                    } text-white block px-1 md:px-3 py-2 rounded-md text-sm md:text-base font-medium`}
                  >
                    Extra
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-red-800 p-1 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* <!-- Heroicon name: outline/bell --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                {login ? (
                  <div>
                    <button
                      ref={menuRef}
                      onClick={profileButtonHandler}
                      type="button"
                      className="bg-red-900 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <button
                        type="button"
                        className="bg-red-800 text-white flex  focus:outline-none ring-2  ring-offset-gray-800 ring-white rounded-xl px-4 py-1 hover:bg-red-600 font-serif text-base"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                )}

                {/* <!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                <div
                  className={`origin-top-right absolute right-0 z-20 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none
                   ${
                     open
                       ? " transition ease-out duration-100 transform opacity-100 scale-100"
                       : " transition ease-in duration-75 transform opacity-0 scale-0"
                   }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          ref={mobileRef}
          className={`sm:hidden overflow-hidden transition ease-in-out duration-200 ${
            mobileOpen ? " transform max-h-full" : " transform max-h-0"
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              data-columns="0"
              onClick={bgHandler}
              href="/promotions"
              className={`${
                menubg[0] === true ? "bg-red-900" : "hover:bg-red-600"
              } text-white block px-3 py-2 rounded-md text-base font-medium`}
              aria-current="page"
            >
              Promotions
            </a>

            <a
              data-columns="1"
              onClick={bgHandler}
              href="/pizza"
              className={`${
                menubg[1] === true ? "bg-red-900" : "hover:bg-red-600"
              } text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
              Pizzalar
            </a>

            <a
              data-columns="2"
              onClick={bgHandler}
              href="/sandwiches"
              className={`${
                menubg[2] === true ? "bg-red-900" : "hover:bg-red-600"
              } text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
              Sandviçler
            </a>

            <a
              data-columns="3"
              onClick={bgHandler}
              href="/extra"
              className={`${
                menubg[3] === true ? "bg-red-900" : "hover:bg-red-600"
              } text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
              Extra
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
