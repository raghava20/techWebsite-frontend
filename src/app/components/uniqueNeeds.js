"use client";
import Image from "next/image";
import React from "react";

const UniqueNeeds = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);
  const data = [
    {
      id: 1,
      title: "FMCG",
      subTitle: "Meet Your Customers' Needs Every Time",
      description:
        "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Sago can guide you to success",
      content: [
        "Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
      ],
      image: "/fcmg.png",
    },
    {
      id: 2,
      title: "Retail and Merchandising",
      subTitle: "Drive Smarter Decisions on the Shop Floor",
      description:
        "In retail, every display, promotion, and product placement counts. Thought Metrics helps you",
      content: [
        "Stay in tune with changing shopper behaviors and preferences.",
        "Optimize in-store and online experiences based on real insights.",
        "Test pricing, promotions, and layouts quickly to boost conversions",
      ],
      image: "/Retail and merchandising.png",
    },
    {
      id: 3,
      title: "Financial Services",
      subTitle: "Build Trust with Every Transaction",
      description:
        "In a space where confidence drives choices, our research gives you the edge to",
      content: [
        " Understand what drives customer loyalty and defection.",
        "Segment your audience to tailor services that truly resonate.",
        "Refine messaging and product offerings to build long-term trust.",
      ],
      image: "/Financial Services.png",
    },
    {
      id: 4,
      title: "Insurance",
      subTitle: "Simplify the Complex, Earn Customer Confidence",
      description: "Insurance decisions are personal and complex — we help you",
      content: [
        " Decode the motivations and anxieties behind insurance choices.",
        "Test policy concepts, channels, and messaging before launch.",
        "Build clarity and trust through research-led communication.",
      ],
      image: "/Insurance.png",
    },
    {
      id: 5,
      title: "Investors",
      subTitle: "See the Market Before It Moves",
      description:
        "Whether you're sizing up a new market or evaluating a venture",
      content: [
        " Use rigorous market assessments to make informed investment decisions.",
        "Gauge brand traction and customer sentiment with real-time insights.",
        "Back your thesis with evidence, not just instinct.",
      ],
      image: "/Investors.png",
    },
    {
      id: 6,
      title: "Media",
      subTitle: "Create Content That Captures Minds",
      description: "In media, engagement is everything. Our insights help you",
      content: [
        " Understand audience preferences across platforms and formats.",
        "Test content, characters, and story arcs before the launch.",
        "Track media consumption shifts and stay ahead of trends.",
      ],
      image: "/Media.png",
    },
    {
      id: 7,
      title: "Technology",
      subTitle: "Design for Humans, Not Just Users",
      description:
        "Innovation is only as good as its adoption. Thought Metrics enables you to",
      content: [
        "  Discover what real users want from your tools and platforms.",
        "Uncover usability gaps through qualitative testing.",
        "Optimize UX and messaging for clarity, trust, and adoption.",
      ],
      image: "/Tech.png",
    },
    {
      id: 8,
      title: "Automotive",
      subTitle: "From Test Drive to Loyalty — Know the Journey",
      description:
        "Buyers are evolving — from EV interest to digital-first expectations. We help you",
      content: [
        "Understand the full decision-making journey, from research to purchase.",
        "Test features, designs, and positioning for different segments.",
        "Navigate category shifts and competitive dynamics with confidence.",
      ],
      image: "/Automobile.png",
    },
    {
      id: 9,
      title: "Advertising and Marketing",
      subTitle: "Make Every Message Matter",
      description:
        "Buyers are evolving — from EV interest to digital-first expectations. We help you",
      content: [
        "Understand the full decision-making journey, from research to purchase.",
        "Test features, designs, and positioning for different segments.",
        "Navigate category shifts and competitive dynamics with confidence.",
      ],
      image: "/Advertising.png",
    },
    {
      id: 10,
      title: "Human Resources",
      subTitle: "Shape Cultures People Want to Belong To",
      description:
        "Buyers are evolving — from EV interest to digital-first expectations. We help you",
      content: [
        "Understand the full decision-making journey, from research to purchase.",
        "Test features, designs, and positioning for different segments.",
        "Navigate category shifts and competitive dynamics with confidence.",
      ],
      image: "/HR.png",
    },
    {
      id: 11,
      title: "Education",
      subTitle: "Design Learning That Sticks",
      description:
        "Buyers are evolving — from EV interest to digital-first expectations. We help you",
      content: [
        "Understand the full decision-making journey, from research to purchase.",
        "Test features, designs, and positioning for different segments.",
        "Navigate category shifts and competitive dynamics with confidence.",
      ],
      image: "/Mask group.png",
    },
    {
      id: 12,
      title: "Healthcare and Life Sciences",
      subTitle: "Build Empathy Into Every Innovation",
      description:
        "Buyers are evolving — from EV interest to digital-first expectations. We help you",
      content: [
        "Understand the full decision-making journey, from research to purchase.",
        "Test features, designs, and positioning for different segments.",
        "Navigate category shifts and competitive dynamics with confidence.",
      ],
      image: "/Pharma.png",
    },
  ];
  return (
    <main className="py-10 px-20 2xl:px-40 flex flex-col bg-white min-h-screen ">
      <div className="font-semibold text-3xl ">
        Designed to meet your unique needs.​
      </div>

      <section className="flex mt-10 w-full h-full gap-5 flex-wrap-reverse  xl:flex-wrap justify-center">
        <div className="flex flex-1 w-full  border rounded-md py-10 px-10 pb-20 ">
          {[data[currentIndex]].map((each, index) => {
            return (
              <div
                key={index}
                className={`flex gap-2 justify-center items-center h-full relative flex-wrap-reverse lg2:flex-nowrap ${
                  animate ? "animate-fadein" : ""
                }  `}
              >
                <div className="w-full h-full py-10 pr-5">
                  <p className="font-semibold text-xl">{each.title}</p>
                  <p className="font-semibold text-base mt-3">
                    {each.subTitle}
                  </p>
                  <p className="font-normal text-base mt-3">
                    {each.description}:
                  </p>
                  <ul className="list-disc ml-10 mt-3">
                    {each.content.map((eachContent, index) => {
                      return <li key={index}>{eachContent}</li>;
                    })}
                  </ul>
                </div>
                <div className="w-[300px] lg2:w-[600px] h-[250px] overflow-hidden">
                  <Image
                    src={each.image}
                    alt="image"
                    className="object-cover rounded-md w-full h-full"
                    width={700}
                    height={700}
                  />
                </div>

                <div className="absolute left-0 -bottom-16 bg-primary rounded-full px-3 py-2 font-semibold">
                  {currentIndex < 9 ? 0 : ""}
                  {currentIndex + 1}
                </div>
                <div className="absolute right-0 -bottom-16 bg-primary rounded-md px-5 py-2 font-semibold">
                  See More
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-[0.4] w-full flex-wrap xl:flex-col gap-3 ">
          {data.map((each, index) => {
            return (
              <div
                key={index}
                className={`px-3 py-2 bg-[#ECECEC] hover:bg-primary font-semibold rounded-md text-center cursor-pointer ${
                  currentIndex == index ? "!bg-primary" : ""
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setAnimate(true);
                  setTimeout(() => {
                    setAnimate(false); // Remove the class after animation triggers
                  }, 500);
                }}
              >
                {each.title}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default UniqueNeeds;
