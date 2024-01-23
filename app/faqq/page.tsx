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
      title: " how do your company help me ? ",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "when ut labore et dolore ? ",
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
      <section className="mt-[250px] lg:p-4 my-20 ">
        <div className="container mx-auto p-8">
          <p className="text-5xl text-center font-medium text-black mt-[-300px] mb-16 ">
            Frequently Asked Questions{" "}
          </p>
          <div className="flex flex-col items-center  max-w-sm  mx-auto px-[40px] sm:max-w-[600px] lg:max-w-[800px] ">
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
        </div>
      </section>
    </>
  );
};
export default FAQ;
