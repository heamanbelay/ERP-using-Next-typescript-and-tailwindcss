import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import LogoSlider from "../components/slider";
import "../css/landstyle.css";
import FAQ from "../faqq/page";
import Comp from "../components/comp1";
// import FAQ from "../components/faq";
// import WavyBackground from "../components/wavy";
// import WavyBackgroundContainer from "../components/wavy";
const Landpg: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Landing Page</title>
      </Head>
      <div className="">
        <Header />

        {/* 1st section  */}
        <section className="container mx-auto my-20">
          <figure className="md:flex rounded-xl p-8   ">
            <div className="md:w-1/2 md:mr-8 md:my-auto pt-6 text-center md:text-left space-y-4 px-16 py-10">
              <div className="flex flex-col gap-10 mt-[50px]">
                <p className="text-5xl font-medium">
                  {" "}
                  Manage your
                  <br></br>
                  Organization here{" "}
                </p>
                <p className="text-lg text-gray-500">
                  {" "}
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
              <div className="font-medium md:flex md:items-center mt-4 ">
                <button
                  type="button"
                  className=" mt-4 text-white bg-[#683B2B] focus:ring-4 focus:outline-none focus:ring-blue-400 text-center
                   transition-colors duration-300  border font-large rounded-lg text-[30px] px-[40px] py-[20px] 
                   dark:hover:bg-white dark:focus:ring  dark:hover:text-black text-sm hover:drop-shadow-md dark:hover:text-black"
                >
                  {" "}
                  Get Started
                </button>
              </div>
            </div>
            <img
              src="https://img.lovepik.com/photo/45010/2889.jpg_wh860.jpg"
              className="w-24 h-24 md:w-[500px] md:h-auto md:rounded-none rounded-full mx-auto mt-4 md:mt-0"
              alt=""
              width="500"
              height="600"
            />
          </figure>
        </section>
      </div>

      <LogoSlider />

      {/* 2nd section */}
      <section className=" container mx-auto my-20  " style={{}}>
        <figure className="md:flex rounded-xl p-4  ">
          <div className=" bg-[#CFB595] flex-1 h-full md:w-1/2 md:mr-8 md:my-auto pt-6  text-center md:text-left space-y-4 px-16 py-10">
            {/* <div className="bg-[#CFB595] md:w-full md:mr-8 md:my-auto pt-6 text-center md:text-left space-y-4 px-16 py-10 rounded-e-3xl"> */}
            <div className="flex flex-col gap-10">
              <p className="text-5xl mb-4 font-medium ">
                {" "}
                created to meet <br></br> the needs of your organisation
              </p>
              <ul className="list-disc ml-8 ">
                <li className="mb-2">Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
              <p className="text-lg text-gray-500">
                {" "}
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="font-medium md:flex md:items-center mt-4 ">
              <figcaption className="font-medium">
                <div className="text-white dark:text-white">
                  Yotec construction{" "}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  John Doe, CEO
                </div>
              </figcaption>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full md:h-auto overflow-hidden md:mr-8 md:my-auto md:order-2">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/7/330283531/YH/MM/IC/131208625/management-information-system.webp"
              className="w-full h-full object-cover mt-4 "
              alt=""
              width="500"
              height="600"
            />
          </div>
        </figure>
      </section>

      {/* 3rd section */}

      <section className=" container mx-auto my-20" style={{}}>
        <figure className="md:flex rounded-xl p-8">
          <div className="w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden md:mr-8 md:my-auto md:order-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/436/584/non_2x/sharing-file-for-remote-worker-free-vector.jpg"
              className="w-full h-full object-cover mt-4"
              alt=""
              width="500"
              height="600"
            />
          </div>
          <div className=" bg-[#CFB595] md:w-1/2 md:mr-8 md:my-auto pt-6  text-center md:text-left space-y-4 px-16 py-10 md:order-2">
            <div className="flex flex-col gap-10">
              <p className="text-5xl mb-4 font-medium ">
                {" "}
                A website that boosts <br></br> Productivity and scale with you
              </p>
              <ul className="list-disc ml-8 ">
                <li className="mb-2">Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
              <p className="text-lg text-gray-500">
                {" "}
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="font-medium md:flex md:items-center mt-4 ">
              <figcaption className="font-medium">
                <div className="text-white dark:text-white">IE netwoks </div>
                <div className="text-slate-700 dark:text-slate-500">
                  John Doe, CEO
                </div>
              </figcaption>
            </div>
          </div>
        </figure>
      </section>

      {/* 4th section */}

      <section className=" container mx-auto my-20  " style={{}}>
        <figure className="md:flex rounded-xl p-8  ">
          <div className="bg-[#CFB595] md:w-1/2 md:mr-8 md:my-auto pt-6  text-center md:text-left space-y-4 px-16 py-10">
            <div className="flex flex-col gap-10">
              <p className="text-5xl mb-4 font-medium ">
                {" "}
                created to meet <br></br> the needs of your organisation
              </p>
              <ul className="list-disc ml-8 ">
                <li className="mb-2">Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
              <p className="text-lg text-gray-500">
                {" "}
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="font-medium md:flex md:items-center mt-4 ">
              <figcaption className="font-medium">
                <div className="text-white dark:text-white">
                  Yotec construction{" "}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  John Doe, CEO
                </div>
              </figcaption>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden md:mr-8 md:my-auto md:order-2">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/7/330283531/YH/MM/IC/131208625/management-information-system.webp"
              className="w-full h-full object-cover mt-4 "
              alt=""
              width="500"
              height="600"
            />
          </div>
        </figure>
      </section>

      {/* 5th section */}
      <section className="lg:p-4 md:w-full flex justify-center my-20 ">
        <div className="container mx-auto p-8 mt-[-80px]">
          <p className="text-5xl text-center font-medium text-black ">
            Explore more about us
          </p>

          <div className="grid md:grid-cols-3 gap-16 py-20 px-20 md:flex md:items-center mx-auto">
            <div className="flex flex-col gap-5  max-w-sm rounded-2xl overflow-hidden shadow-lg card-container  ">
              <img
                src="https://images.unsplash.com/photo-1660866838821-0c12213703df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDV8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
                width="500"
                height="600"
                className=" w-full"
                alt="image"
              />

              <div className="px-6 py-4 lg:h-44 ">
                <span className="tracking-widest md:flex text-xs title-font font-medium text-gray-400 mb-1">
                  customer service
                </span>
                <div className="text-lg title-font font-medium mb-2">
                  <p className="no-underline text-gray-900">
                    {" "}
                    Lorem ipsum dolor
                  </p>
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              <div className="px-6 pt-4 pb-2 flex items-center ">
                <a href="#" className="text-blue-500 hover:underline">
                  Read Story
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 18"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* middle grid */}
            <div className="flex flex-col gap-5  max-w-sm rounded-2xl overflow-hidden shadow-lg card-container  ">
              <img
                src="https://images.unsplash.com/photo-1638486071992-536e48c8fa3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9vayUyMGJhY2t8ZW58MHx8MHx8fDA%3D"
                className=" w-full"
                alt="image"
              />

              <div className="px-6 py-4 lg:h-44">
                <span className="tracking-widest md:flex text-xs title-font font-medium text-gray-400 mb-1">
                  Resourses{" "}
                </span>
                <div className="text-lg title-font font-medium mb-2">
                  <p className="no-underline text-gray-900">
                    {" "}
                    Lorem ipsum dolor
                  </p>
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              <div className="px-6 pt-4 pb-2 flex items-center">
                <a href="#" className="text-blue-500 hover:underline">
                  Read more{" "}
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 18"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Last grid */}
            <div className="flex flex-col gap-5  max-w-sm rounded-2xl overflow-hidden shadow-lg  card-container ">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                className=" w-full"
                alt="image"
              />

              <div className="px-6 py-4 lg:h-44">
                <span className="tracking-widest text-xs title-font md:flex font-medium text-gray-400 mb-1">
                  Report{" "}
                </span>
                <div className="text-lg title-font font-medium mb-2">
                  <p className="no-underline text-gray-900">
                    {" "}
                    Lorem ipsum dolor
                  </p>
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              <div className="px-6 pt-4 pb-2 flex items-center">
                <a href="#" className="text-blue-500 hover:underline">
                  Learn more
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 18"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FAQ /> */}
      <FAQ />

      <section className="bg-[#CFB595]  md:w-full md:h-[320px]  mb-[16px]  py-8 text-center ">
        <div className=" max-w-[800px] mx-auto ">
          <p className=" text-5xl font-medium text-black mt-6 mb-[80px] ">
            Choose a better way to manage your organisation
          </p>
          <button
            type="button"
            className="  text-black bg-[white] focus:ring-4 focus:outline-none focus:ring-blue-400 text-center
                   transition-colors duration-300   font-bold rounded-lg text-[30px] px-[40px] py-[20px] 
              mb-8    border  dark:hover:bg-[#CFB595] dark:focus:ring  dark:hover:text-white text-sm hover:drop-shadow-md dark:hover:text-black"
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landpg;
