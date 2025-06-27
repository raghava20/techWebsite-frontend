import React from "react";
import { InsightArrowIcon } from "../assets/svg/_index";
import Image from "next/image";

const BlogSection = () => {
  const CardData = [
    {
      image: "/image1.png",
      name: "Blog",
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
    {
      image: "/image 2.png",
      name: "Blog",
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
    {
      image: "/image 3.png",
      name: "Blog",
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
    {
      image: "/image 4.png",
      name: "Blog ",
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
  ];

  return (
    <main className="flex py-20 gap-10 bg-[#EAFFD6] justify-center min-h-screen items-start px-20 2xl:px-40 w-full  lg:flex-nowrap flex-col">
      <p className="text-3xl font-semibold">
        Fresh Ideas to Help You Reach New Heights.
      </p>
      <div className="flex gap-5 flex-wrap w-full justify-evenly">
        {CardData.map((each, index) => {
          return <Cards key={index} {...each} />;
        })}
      </div>
    </main>
  );
};

export default BlogSection;

const Cards = ({ image, name, description }) => {
  return (
    <section className="flex flex-col min-w-[220px] max-w-[250px] h-[350px] border border-black rounded-md relative overflow-hidden">
      <div>
        <Image
          src={`${image}`}
          width={250}
          height={80}
          alt="Picture of the blog"
        />
      </div>
      <div className="p-3">
        <div className="text-base font-base bg-[#BBFDF5] px-3 py-1 w-fit">
          {name}
        </div>
        <div className="text-base font-base leading-5 mt-3">{description}</div>
      </div>

      <button className="bg-primary p-2 rounded-tl-md absolute bottom-0 right-0 w-[60px] hover:cursor-pointer flex justify-center">
        <InsightArrowIcon className="w-10 h-6" />
      </button>
    </section>
  );
};
