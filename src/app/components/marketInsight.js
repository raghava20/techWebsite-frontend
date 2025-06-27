import Image from "next/image";
import React from "react";
import {
  InsightArrowIcon,
  InsightIcon1,
  InsightIcon2,
  InsightIcon3,
  InsightImage,
} from "../assets/svg/_index";

const MarketInsight = () => {
  const CardData = [
    {
      icon: <InsightIcon1 className="w-14 h-11" />,
      name: "Audience",
      description:
        "Tap into a wide panel of respondents for any of your market research needs. ",
    },
    {
      icon: <InsightIcon2 className="w-14 h-11" />,
      name: "Qualitative Research",
      description:
        "Tap into a wide panel of respondents for any of your market research needs. ",
    },
    {
      icon: <InsightIcon3 className="w-14 h-11" />,
      name: "Quantitative Research",
      description:
        "Tap into a wide panel of respondents for any of your market research needs. ",
    },
    {
      icon: <InsightIcon2 className="w-14 h-11" />,
      name: "Quality Checks",
      description:
        "Tap into a wide panel of respondents for any of your market research needs. ",
    },
  ];
  return (
    <main className="flex py-20 gap-10 bg-white justify-center items-start xl:px-36 2xl:px-40 w-full flex-wrap 2xl:flex-nowrap font-Barlow">
      <div>
        <InsightImage className="w-80 h-80 scale-110 lg:scale-150 lg:mt-24" />
      </div>
      <div className="lg:max-w-[300px] mt-10 px-10 lg2:px-0">
        <p className="bg-lime p-4 py-5 text-xl font-medium rounded-lg font-Barlow">
          Unlock in-depth market insights
        </p>
        <p className="text-4xl font-semibold my-5 leading-12">
          Everything You Need, All in One Place
        </p>
        <p className="font-normal text-base leading-5">
          Harness our comprehensive solutions to unearth valuable insights that
          drive innovation, improve customer connections, and boost efficiency
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 place-content-center ">
        {CardData.map((each, index) => {
          return <Cards key={index} {...each} />;
        })}
      </div>
    </main>
  );
};

export default MarketInsight;

const Cards = ({ icon, name, description }) => {
  return (
    <section className="flex flex-col gap-2 min-w-[230px] max-w-[250px] h-[300px] border border-black p-3 rounded-md relative group overflow-hidden">
      <div className="z-10">{icon}</div>
      <div className="text-base font-semibold z-10">{name}</div>
      <div className="text-base font-normal leading-5 mt-3 z-10 ">
        {description}
      </div>

      <button className="bg-primary group-hover:bg-white  p-2 rounded-tl-md absolute bottom-0 right-0 w-[60px] hover:cursor-pointer z-10 flex justify-center">
        <InsightArrowIcon className="w-10 h-6  group-hover:fill-black fill-white" />
      </button>

      <div className="w-full h-full absolute bg-primary top-0 left-0 opacity-0 group-hover:opacity-90 transition-all duration-400 ease-in-out"></div>
    </section>
  );
};
