"use client";
import React from "react";
import {
  LinkedInIcon,
  Logo,
  ScrollTop,
  TwitterIcon,
  VimeoIcon,
} from "../assets/svg/_index";

const Footer = () => {
  const NavData = [
    {
      title: "Research Methods",
      items: [
        "Qualitative Research",
        "Quantitative Research",
        "Fieldwork",
        "Surveys",
        "Focus Group Discussions",
        "Quality checks",
      ],
    },
    {
      title: "Capabilites",
      items: [
        "Branding and Advertising  Communication",
        "Market Opportunity Research",
        "Product Research",
        "Consumer Research and Segmentation",
      ],
    },
    {
      title: "Legal",
      items: [
        "Privacy",
        "AI Policy",
        "Business Conduct and Ethics",
        "Site Disclaimer",
      ],
    },
    {
      title: "Connect",
      items: ["Join Our Panel", "Request a Bid", "Careers", "Contact Us"],
    },
  ];

  const scrollToTop = (top) => {
    window.scrollTo({ top: top, behavior: "smooth" });
  };
  return (
    <main className="bg-primary text-white">
      <section className="flex pt-10 gap-10 bg-primary justify-center  items-start px-20 2xl:px-40 w-full flex-wrap lg:flex-nowrap flex-row ">
        <div>
          <Logo className="w-20 h-10 scale-200 ml-10" />
          <div className="flex gap-4 mt-5">
            <LinkedInIcon className="w-10 h-10" />
            <TwitterIcon className="w-10 h-10" />
            <VimeoIcon className="w-10 h-10" />
          </div>
        </div>
        <div className="flex gap-5 w-full">
          {NavData.map((each, index) => {
            return (
              <NavItems key={index} title={each.title} items={each.items} />
            );
          })}
        </div>
      </section>

      <p className="w-full h-0.5 bg-white inline-block"></p>

      <section className="px-40 text-xs font-light pb-3 pt-2 relative flex overflow-hidden">
        <p>© Copyright 2025. All Rights Reserved.</p>
        <p
          className="absolute right-7 hover:cursor-pointer -bottom-2  "
          onClick={() => scrollToTop(0)}
        >
          <ScrollTop className="w-12 h-12 " />
        </p>
      </section>
    </main>
  );
};

export default Footer;

const NavItems = ({ title, items }) => {
  return (
    <section>
      <div className="font-semibold mb-2 text-base">{title}</div>
      <div className="flex flex-col gap-2 font-light text-base max-w-[250px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="hover:underline hover:cursor-pointer transition-all duration-300 ease-in-out hover:opacity-85 hover:scale-101"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
