import React from "react";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-white relative fixed bottom-0 left-0 w-screen ">
      <div className="w-screen p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between my-2">
          <div className="mb-4 md:mb-0">
            <a href="http://localhost:3000" className="flex items-center">
              <img
                src="https://media.istockphoto.com/id/1332084801/vector/erp-software.jpg?s=612x612&w=0&k=20&c=2v5Tuv6yib0010fc0qzKmrO135NLXy4KnVmyPXAfkOs="
                className="h-8 me-3"
                alt="AndinetLogo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                ERP
              </span>
            </a>
          </div>
          <div className=" grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-5 ">
            <div className="mr-20 ">
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Address
              </h2>
              <ul className="text-gray-500 dark:text-black-400 font-medium">
                <li className="my-3">
                  <a href="#" className="hover:underline">
                    Addis Abeba
                  </a>
                </li>
                <li className="my-3">
                  <a href="#" className="hover:underline">
                    +251-911743326
                  </a>
                </li>
                <li className="my-3">
                  <a href="#" className="hover:underline">
                    +251-911743326
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Pricing
              </h2>
              <ul className="text-gray-500 dark:text-black-400 font-medium">
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Subscription
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Paid Vs. Free
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-black-400 font-medium">
                <li className="mb-3">
                  <a href="#" className=" hover:underline">
                    Partners
                  </a>
                </li>
                <li className="my-3">
                  <a href="#" className="hover:underline">
                    List 1
                  </a>
                </li>
                <li className="my-3">
                  <a href="#" className="hover:underline">
                    List 2
                  </a>
                </li>
                <li className="my-3">
                  <a href="#" className="hover:underline">
                    List 3
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-black-400 font-medium">
                <li className="mb-3">
                  <a href="#" className="hover:underline ">
                    About us
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline"></a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-black-400 font-medium">
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://andinetsolutions.com/" className="hover:underline">
              Andinet ICT solutions
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500 dark:hover:text-blue "
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-red-900 dark:hover:text-red ms-5"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.8 7.6c-.2-.8-.8-1.4-1.6-1.6C18.2 6 12 6 12 6s-6 0-8.2-.1C2.8 6.2 2.2 6.8 2 7.6 1.9 9.1 2 12 2 12s0 2.9.1 4.4c.2.8.8 1.4 1.6 1.6C6 18 12 18 12 18s6 0 8.2.1c.8-.2 1.4-.8 1.6-1.6.1-1.4.1-4.3.1-4.3s0-2.9-.1-4.4zM9.9 15V9.9L15 12l-5.1 2.1z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500  dark:hover:text-blue ms-5"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-800 dark:hover:text-blue ms-5"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5zm3 14H6V9h2v8zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9 9h-2.02v-2.82c0-1.34-1.54-1.49-1.54 0V16h-2V9h2v1.25c.53-.99 3.02-1.07 3.02 1.18V16z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-black dark:hover:text-black ms-5"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477
                         0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 
                         2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 
                         3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 
                         2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72
                         0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
