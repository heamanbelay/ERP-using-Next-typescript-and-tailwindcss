"use client";
import React, { useState } from "react";
import Accordion from "../components/faqq";

interface FAQData {
  title: string;
  desc: string;
}
const FAQ: React.FC = () => {
  const accordata: FAQData[] = [
    {
      title: "what is ERP ?",
      desc: "wertg asfg wqertg sdfg adfjhd djkafbs dxjdbwjsx kasd coabsdc iakjdbx wiajxkbd ciwkjaxbdc ijwd",
    },
    {
      title: " DO I need to worry about security? ",
      desc: "sweewce qsio iwnd iiqoe 9pql djd iwejr lqehru24e jchenis dqlewujd 2iquehfnd 2owiehrbnf ciewkiehrbf ci2 wiwoi ek0p isdnioewks dx eiwshnd xiewuvv hdno2 whdnxo2e",
    },
    {
      title: "how can i integrate it with my company ? ",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: " how is the system working ? ",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "when ut labore et dolore ? ",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: " how do your company help me ? ",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Why Lorem ipsum dolor ? ",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      setOpen(null);
    } else setOpen(index);
  };

  return (
    <>
      <section className="mt-[150px] flex justify-center ">
        {/* <div
          className="relative w-[500px] bg-[#e3edf7] 
            shadow-lg [6px_6px_10px_-1px_rgba(0,0,0,0.15), 
            -6px_-6px_10px_-1px_rgba(255,255,255,0.8)] 
            rounded-xl m-[15px]"
        > */}
        <p className="text-5xl text-center font-medium text-black ">
          Explore more about us
        </p>
        <div className=" px-[40px] max-w-[800px]">
          {accordata.map((data, index) => {
            return (
              <Accordion
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default FAQ;
