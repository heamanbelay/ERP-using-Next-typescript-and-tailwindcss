// "use client";
// import React from "react";

// import "../css/slide.css";
// const LogoSlider: React.FC = () => {
//   return (
//     <>
//       <div className="mx-auto ">
//         {" "}
//         <p className="text-5xl text-center font-medium text-black">
//           Our Clients
//         </p>
//       </div>
//       <div className="relative m-auto w-full max-w-[1200px] overflow-hidden bg-white mt-10 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
//         <div className="animate-infinite-slider flex flex-direction w-full  mx-8">
//           <div className="logos-slide slide flex space-x-8 items-center justify-center ">
//             <img
//               src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/IE-logo-Small-Black.png"
//               className="h-18 card-container"
//               alt="Logo"
//             />
//             <img
//               src="https://missmaya.co.za/images/creativelogos/Ethiopian-Tourism-logo-dev-4_1080.png"
//               className="h-18 card-container"
//               alt="Logo"
//             />
//             <img
//               src="https://ethiopianlogos.com/logos/amhara_bank/amhara_bank.svg"
//               className="h-18 card-container"
//               alt="Logo"
//             />

//             <img
//               src="https://ethiopianlogos.com/logos/ethiopian_agricultural_transformation_agency/ethiopian_agricultural_transformation_agency.svg"
//               className="h-18 card-container"
//               alt="Logo"
//             />
//             <img
//               src="https://ethiopianlogos.com/logos/yotek_real_estate/yotek_real_estate.svg"
//               className="h-18 card-container"
//               alt="Logo"
//             />
//           </div>

//           <div className="logos-slide slide flex  items-center justify-center space-x-8">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKCbWkHA2AFwGMRb9zZl8OsT4jWFgwE_iCOnheoTaY4lqr5dQU2J2-9GDUfKdFOJFJ20&usqp=CAU"
//               className="h-18 card-container "
//               alt="Logo"
//             />
//             <img
//               src="https://ethiopianlogos.com/logos/yotek_real_estate/yotek_real_estate.svg"
//               className="h-18 card-container"
//               alt="Logo"
//             />
//             <img
//               src="https://ethiopianlogos.com/logos/commercial_bank_of_ethiopia/commercial_bank_of_ethiopia.png"
//               className="h-18 card-container "
//               alt="Logo"
//             />
//             <img
//               src="https://missmaya.co.za/images/creativelogos/Ethiopian-Tourism-logo-dev-4_1080.png"
//               className="h-18 card-container"
//               alt="Logo"
//             />
//             <img
//               src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               className="h-18 card-container "
//               alt="Logo"
//             />
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKCbWkHA2AFwGMRb9zZl8OsT4jWFgwE_iCOnheoTaY4lqr5dQU2J2-9GDUfKdFOJFJ20&usqp=CAU"
//               className="h-18 card-container "
//               alt="Logo"
//             />

//             <img
//               src="https://missmaya.co.za/images/creativelogos/Ethiopian-Tourism-logo-dev-4_1080.png"
//               className="h-18 card-container"
//               alt="Logo"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default LogoSlider;
"use client";
import React from "react";

import "../css/slide.css";
const LogoSlider: React.FC = () => {
  const LOGOS = [
    <img
      src="https://ethiopianlogos.com/logos/yotek_real_estate/yotek_real_estate.svg"
      className="h-18 card-container"
      alt="Logo"
    />,
    <img
      src="https://www.ienetworksolutions.com/wp-content/uploads/2020/11/IE-logo-Small-Black.png"
      className="h-18 card-container"
      alt="Logo"
    />,

    <img
      src="https://missmaya.co.za/images/creativelogos/Ethiopian-Tourism-logo-dev-4_1080.png"
      className="h-18 card-container"
      alt="Logo"
    />,
    <img
      src="https://ethiopianlogos.com/logos/amhara_bank/amhara_bank.svg"
      className="h-18 card-container"
      alt="Logo"
    />,

    <img
      src="https://ethiopianlogos.com/logos/ethiopian_agricultural_transformation_agency/ethiopian_agricultural_transformation_agency.svg"
      className="h-18 card-container"
      alt="Logo"
    />,
    <img
      src="https://ethiopianlogos.com/logos/yotek_real_estate/yotek_real_estate.svg"
      className="h-18 card-container"
      alt="Logo"
    />,

    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKCbWkHA2AFwGMRb9zZl8OsT4jWFgwE_iCOnheoTaY4lqr5dQU2J2-9GDUfKdFOJFJ20&usqp=CAU"
      className="h-18 card-container "
      alt="Logo"
    />,

    <img
      src="https://ethiopianlogos.com/logos/commercial_bank_of_ethiopia/commercial_bank_of_ethiopia.png"
      className="h-18 card-container"
      alt="Logo"
    />,
    <img
      src="https://missmaya.co.za/images/creativelogos/Ethiopian-Tourism-logo-dev-4_1080.png"
      className="h-18 card-container"
      alt="Logo"
    />,
    <img
      src="https://ethiopianlogos.com/logos/yotek_real_estate/yotek_real_estate.svg"
      className="h-18 card-container"
      alt="Logo"
    />,
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKCbWkHA2AFwGMRb9zZl8OsT4jWFgwE_iCOnheoTaY4lqr5dQU2J2-9GDUfKdFOJFJ20&usqp=CAU"
      className="h-18 card-container "
      alt="Logo"
    />,

    <img
      src="https://missmaya.co.za/images/creativelogos/Ethiopian-Tourism-logo-dev-4_1080.png"
      className="h-18 card-container"
      alt="Logo"
    />,
    <img
      src="https://ethiopianlogos.com/logos/yotek_real_estate/yotek_real_estate.svg"
      className="h-18 card-container "
      alt="Logo"
    />,
  ];

  return (
    <>
      <div className="mx-auto ">
        {" "}
        <p className="text-5xl mb-10 mt-[-40px] text-center font-medium text-black">
          Our Clients
        </p>
      </div>
      <div className="relative m-auto w-[1500px] max-w-[] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(320px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[250px] items-center justify-center"
              style={{ margin: "0 20px" }}
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[250px] items-center justify-center"
              style={{ margin: "0 20px" }}
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default LogoSlider;
