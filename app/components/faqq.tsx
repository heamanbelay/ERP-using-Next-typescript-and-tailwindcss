"use client";
import React from "react";
import { IonIcon } from "@ionic/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Collapse from "react-collapse";

interface CollapseProps {
  isOpened: boolean;
  children: React.ReactNode;
}

const CustomCollapse: React.FC<CollapseProps> = ({ isOpened, children }) => {
  return <div style={{ display: isOpened ? "block" : "none" }}>{children}</div>;
};
interface AccordionProps {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: string;
}
const Accordion: React.FC<AccordionProps> = ({ open, toggle, title, desc }) => {
  return (
    <>
      <div className="pt-[10px] ">
        <div
          className=" bg-[] tracking-[1px] relative w-[800px]
                mx-[20px] h-[50px] flex items-center py-[25px]
                 px-[50px] flex justify-between items-center
                  cursor-pointer shadow-lg
                 [6px_6px_10px_-1px_rgba(0,0,0,0.15),
                 -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
                 rounded-xl m-[15px]"
          onClick={toggle}
        >
          <p className="text-[22px] font-semibold">{title}</p>{" "}
          <div className="text-[30px]">
            {open ? <AiOutlineMinus /> : <AiOutlinePlus />}{" "}
          </div>
        </div>
        <CustomCollapse isOpened={open}>
          <div className="px-[50px] pb-[20px]">{desc}</div>
        </CustomCollapse>
      </div>
    </>
  );
};
export default Accordion;

//       <body className="mt-[150px] flex justify-center">
//         {/* first q.n */}
//         <div className="">
//           <div
//             className="relative w-[500px] bg-[#e3edf7]
//             shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15),
//             -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
//             rounded-xl m-[15px]"
//           >
//             <input
//               type="checkbox"
//               id="input"
//               className="absolute peer opacity-0"
//             />
//             <label
//               htmlFor="input"
//               className="font-bold tracking-[1px]
//               mx-[20px] h-[50px] flex items-center"
//             >
//               {" "}
//               what is ERP?
//             </label>
//             {/* arrow */}
//             <div
//               className="absolute top-[15px] right-[30px]
//             rotate-0 peer-checked:rotate-180 duration-200 "
//             >
//               <IonIcon name="chevron-down-outline"></IonIcon>
//             </div>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
//               <p className="p-[20px] text-sm">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>

//           {/* 2nd qn */}

//           <div
//             className="relative w-[400px] bg-[#e3edf7]
//             shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15),
//             -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
//             rounded-xl m-[15px]"
//           >
//             <input
//               type="checkbox"
//               id="input1"
//               className="absolute peer opacity-0"
//             />
//             <label
//               htmlFor="input1"
//               className="font-bold tracking-[1px]
//               mx-[20px] h-[50px] flex items-center"
//             >
//               {" "}
//               DO I need to worry about security ?
//             </label>
//             {/* arrow */}
//             <div
//               className="absolute top-[15px] right-[30px]
//             rotate-0 peer-checked:rotate-180 duration-200 "
//             >
//               <IonIcon name="chevron-down-outline"></IonIcon>
//             </div>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
//               <p className="p-[20px] text-sm">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>
//           {/* 3rd qn */}
//           <div
//             className="relative w-[400px] bg-[#e3edf7]
//             shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15),
//             -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
//             rounded-xl m-[15px]"
//           >
//             <input
//               type="checkbox"
//               id="input2"
//               className="absolute peer opacity-0"
//             />
//             <label
//               htmlFor="input2"
//               className="font-bold tracking-[1px]
//               mx-[20px] h-[50px] flex items-center"
//             >
//               {" "}
//               what is eiusmod tempor ?
//             </label>
//             {/* arrow */}
//             <div
//               className="absolute top-[15px] right-[30px]
//             rotate-0 peer-checked:rotate-180 duration-200 "
//             >
//               <IonIcon name="chevron-down-outline"></IonIcon>
//             </div>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
//               <p className="p-[20px] text-sm">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>
//           {/* 4th qn */}
//           <div
//             className="relative w-[400px] bg-[#e3edf7]
//             shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15),
//             -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
//             rounded-xl m-[15px]"
//           >
//             <input
//               type="checkbox"
//               id="input3"
//               className="absolute peer opacity-0"
//             />
//             <label
//               htmlFor="input3"
//               className="font-bold tracking-[1px]
//               mx-[20px] h-[50px] flex items-center"
//             >
//               {" "}
//               how is the system working ?
//             </label>
//             {/* arrow */}
//             <div
//               className="absolute top-[15px] right-[30px]
//             rotate-0 peer-checked:rotate-180 duration-200 "
//             >
//               <IonIcon name="chevron-down-outline"></IonIcon>
//             </div>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
//               <p className="p-[20px] text-sm">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>
//           {/* 5th q.n */}
//           <div
//             className="relative w-[400px] bg-[#e3edf7]
//             shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15),
//             -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
//             rounded-xl m-[15px]"
//           >
//             <input
//               type="checkbox"
//               id="input4"
//               className="absolute peer opacity-0"
//             />
//             <label
//               htmlFor="input4"
//               className="font-bold tracking-[1px]
//               mx-[20px] h-[50px] flex items-center"
//             >
//               {" "}
//               when ut labore et dolore ?
//             </label>
//             {/* arrow */}
//             <div
//               className="absolute top-[15px] right-[30px]
//             rotate-0 peer-checked:rotate-180 duration-200 "
//             >
//               <IonIcon name="chevron-down-outline"></IonIcon>
//             </div>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
//               <p className="p-[20px] text-sm">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>
//           {/* 6th qn */}
//           <div
//             className="relative w-[400px] bg-[#e3edf7]
//             shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15),
//             -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
//             rounded-xl m-[15px]"
//           >
//             <input
//               type="checkbox"
//               id="input5"
//               className="absolute peer opacity-0"
//             />
//             <label
//               htmlFor="input5"
//               className="font-bold tracking-[1px]
//               mx-[20px] h-[50px] flex items-center"
//             >
//               {" "}
//               how can i integrate it with my company ?
//             </label>
//             {/* arrow */}
//             <div
//               className="absolute top-[15px] right-[30px]
//             rotate-0 peer-checked:rotate-180 duration-200 "
//             >
//               <IonIcon name="chevron-down-outline"></IonIcon>
//             </div>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
//               <p className="p-[20px] text-sm">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>
//           {/* 7th qn */}
//           <div
//             className="relative w-[400px] bg-[#e3edf7]
//             shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15),
//             -6px_-6px_10px_-1px_rgba(255,255,255,0.8)]
//             rounded-xl m-[15px]"
//           >
//             <input
//               type="checkbox"
//               id="input6"
//               className="absolute peer opacity-0"
//             />
//             <label
//               htmlFor="input6"
//               className="font-bold tracking-[1px]
//               mx-[20px] h-[50px] flex items-center"
//             >
//               {" "}
//               how do your company help me ?
//             </label>
//             {/* arrow */}
//             <div
//               className="absolute top-[15px] right-[30px]
//             rotate-0 peer-checked:rotate-180 duration-200 "
//             >
//               <IonIcon name="chevron-down-outline"></IonIcon>
//             </div>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
//               <p className="p-[20px] text-sm">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </div>
//           </div>
//         </div>
//         <script
//           type="module"
//           src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
//         ></script>
//       </body>
//     </>
//   );
// };
// export default FAQ;
