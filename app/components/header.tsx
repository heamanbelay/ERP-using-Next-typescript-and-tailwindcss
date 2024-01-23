"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Ref } from "react";
const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isNav, setIsNav] = useState(false);
  const showNav = () => {
    setIsNav(!isNav);
  };
  return (
    <nav className=" fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="http://localhost:3000"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://media.istockphoto.com/id/1332084801/vector/erp-software.jpg?s=612x612&w=0&k=20&c=2v5Tuv6yib0010fc0qzKmrO135NLXy4KnVmyPXAfkOs="
            className="h-8"
            alt="ERP System Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            ERP
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-10 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black bg-white border border-black hover:bg-teal-400 
    focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2 text-center 
    dark:bg-white dark:hover:bg-[#DED1BD]  duration-300  dark:hover:text-black"
          >
            <Link href="/login">Sign in</Link>
          </button>

          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-400 
    transition-colors duration-300 border border-black font-large rounded-lg text-sm px-4 py-2 text-center 
    bg-[#683B2B] dark:hover:bg-[#DED1BD] 
    dark:focus:ring dark:text-white dark:hover:text-black"
          >
            <Link href="/signup">Sign up</Link>
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 
      justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
      focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200
       dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            onClick={() => setIsNav(!showNav)}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* <div
    className={`${
          isNav ? "block" : "hidden"
        } absolute z-5  font-normal bg-white divide-y  divide-gray-100 rounded-lg shadow w-40 dark:bg-white-300 dark:divide-gray-600`}
        id="dropdown-menu" style={{ top: "calc(80% + 0rem)", right: "15", 
      }}
      > */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ">
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse
      md:flex-row md:mt-0 md:border-0  "
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-black-700 md:p-0  md:dark:hover:text-[#683B2B] transition-all duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:text-teal-500
        md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <button
                type="button"
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full 
     py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto 
     transition-all duration-300 dark:text-black md:dark:hover:text-teal-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={toggleDropdown}
              >
                Modules
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute z-5  font-normal bg-white divide-y  divide-gray-100 rounded-lg shadow w-40 dark:bg-white-300 dark:divide-gray-600`}
                id="dropdownNavbar"
                style={{ top: "calc(80% + 0rem)", right: "15" }}
              >
                <ul
                  className="py-2 text-sm text-gray-200 dark:text-gray-800 transition-all duration-300"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-100 transition-all duration-300 dark:hover:text-teal-500"
                    >
                      Module 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-100 transition-all duration-300 dark:hover:text-teal-500"
                    >
                      Module 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-100 transition-all duration-300 dark:hover:text-teal-500"
                    >
                      Module 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-100 transition-all duration-300 dark:hover:text-teal-500"
                    >
                      Module 4
                    </a>
                  </li>
                </ul>

                {/* <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div> */}
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
       md:dark:hover:text-teal-500 duration-400 dark:text-black transition-all duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
        md:p-0 md:dark:hover:text-teal-500 dark:text-black transition-all duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
       md:dark:hover:text-teal-500 dark:text-black transition-all duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
