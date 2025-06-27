"use client";
import React from "react";
import { ArrowIcon } from "../assets/svg/_index";

const Navbar = () => {
  const [showContainer, setShowContainer] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navItems = [
    {
      name: "Research Methods",
      link: "/",
    },
    {
      name: "Capabilities",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
    {
      name: "Resources",
      link: "/",
    },
  ];
  return (
    <main className="h-16 w-full text-gray-700 text-center flex justify-center items-center gap-4 font-Inter tracking-tighter relative">
      <div className="flex justify-center gap-3">
        {navItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex group items-center hover:cursor-pointer "
              onClick={() => {
                setCurrentIndex((prev) => (prev = index));
                if (showContainer && currentIndex != index) {
                  return setShowContainer(true);
                }
                return setShowContainer(!showContainer);
              }}
            >
              <a
                key={index}
                href={"#"}
                className="pr-0.5 border-transparent  group-hover:border-b-[1px] group-hover:border-b-gray-500  group-hover:opacity-75 transition-all duration-300 transform ease-in-out group-hover:scale-[101%] leading-3.5 font-Inter "
              >
                {item.name}
              </a>
              <ArrowIcon
                className={`w-3 h-3 ${
                  showContainer && currentIndex == index
                    ? "rotate-180"
                    : "rotate-0"
                }`}
              />
            </div>
          );
        })}
      </div>

      <aside className="flex  pr-4 gap-2">
        <button
          className="border
         border-blue-700 text-blue-800 px-3 py-1 bg-white hover:cursor-pointer"
        >
          Start Your Research
        </button>
        <button className=" text-white bg-primary px-2 py-1 hover:cursor-pointer transition-all duration-400 transform ease-in-out hover:bg-blue-800">
          Join a Paid Focus Group
        </button>
      </aside>

      {showContainer && <NavComponents currentIndex={currentIndex} />}
    </main>
  );
};

export default Navbar;

const NavComponents = ({ currentIndex }) => {
  const navList = [
    {
      name: "Research Methods",
      link: [
        "Quantitative Research",
        "Online and Offline Surveys",
        "Qualitative Research",
        "Focus Group Discussions",
        "Recruitment and Fieldwork",
        "Quality Checks",
      ],
    },
    {
      name: "Capabilities",
      link: [
        {
          title: "Branding and Advertising Communication",
          contents: [
            "Brand Perception Research",
            "Brand Awareness Research",
            "Brand Tracking Research",
            "Message Testing",
            "Advertising Effectiveness Research",
          ],
        },
        {
          title: "Market Opportunity Research",
          contents: [
            "Go-to Market Research",
            "Market Feasibility Study",
            "Market Research",
            "Competitive Research",
          ],
        },
        {
          title: "Product Research",
          contents: [
            "Concept Testing Research",
            "Conjoint Analysis",
            "MaxDiff Analysis",
            "Product Validating Testing",
            "UI/UX Research",
          ],
        },
        {
          title: "Customer Research and Segmentation",
          contents: [
            "Customer Journey Research",
            "Customer Loyalty Research",
            "Customer Satisfaction Research",
            "Personal Research",
            "Pricing Research",
          ],
        },
      ],
    },
    {
      name: "Industries",
      link: [
        "FMCG",
        "Retail and Merchandising",
        "Healthcare and Life Sciences",
        "Advertising and Marketing",
        "Financial services and Institutions",
        "Insurance",
        "Investors",
        "Automotive",
        "Education",
        "Human Resources",
        "Media and Internet Publishers",
        "Technology",
      ],
    },
    {
      name: "Resources",
      link: ["Articles", "Reports", "Case studies", "Webinars"],
    },
  ];
  return (
    <div
      className={`bg-primary w-full ${
        currentIndex == 1 ? "h-72 -bottom-[450%]" : "h-48 -bottom-[300%]"
      } px-20 absolute  inline-block animate-fadeout text-white py-10 z-50`}
    >
      <div className="flex gap-4">
        {" "}
        <div className="flex flex-[0.3] items-start gap-4 flex-col">
          <p className="tracking-wide text-left w-3/4">
            Understand our approach to B2B and B2C research
          </p>
          <p className="uppercase underline decoration-dotted font-semibold tracking-widest">
            Overview
          </p>
        </div>
        <div className="w-full h-full flex-1">
          {currentIndex == 3 &&
            navList[currentIndex].link.map((item, index) => {
              return (
                <div key={index} className="flex flex-col mb-1">
                  <p className="font-Inter font-semibold tracking-wide text-base hover:underline hover:cursor-pointer hover:animate-zoomin text-left">
                    {item}
                  </p>
                </div>
              );
            })}
          <div className="grid grid-cols-3">
            {currentIndex == 2 &&
              navList[currentIndex].link.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col mb-1">
                    <p className="font-Inter font-semibold tracking-wide text-base hover:underline hover:cursor-pointer hover:animate-zoomin text-left">
                      {item}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="grid grid-cols-[30%_70%] ">
            {currentIndex == 0 &&
              navList[currentIndex].link.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col mb-1">
                    <p className="font-Inter font-semibold tracking-wide text-base hover:underline hover:cursor-pointer hover:animate-zoomin text-left">
                      {item}
                    </p>
                  </div>
                );
              })}
          </div>

          <div className="grid grid-cols-[30%_25%_45%] ">
            <div className="grid ">
              <p className="text-left text-xl font-semibold mb-2 w-2/3">
                {currentIndex == 1 && navList[currentIndex].link[0].title}
              </p>
              {currentIndex == 1 &&
                navList[currentIndex].link[0].contents.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col mb-1">
                      <p className="font-Inter font-semibold tracking-wide text-base hover:underline hover:cursor-pointer hover:animate-zoomin text-left">
                        {item}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="grid ">
              <p className="text-left text-xl font-semibold mb-2 w-2/3">
                {currentIndex == 1 && navList[currentIndex].link[1].title}
              </p>
              {currentIndex == 1 &&
                navList[currentIndex].link[1].contents.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col mb-1">
                      <p className="font-Inter font-semibold tracking-wide text-base hover:underline hover:cursor-pointer hover:animate-zoomin text-left">
                        {item}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="grid ">
              <p className="text-left text-xl font-semibold mb-2 w-2/3">
                {currentIndex == 1 && navList[currentIndex].link[2].title}
              </p>
              {currentIndex == 1 &&
                navList[currentIndex].link[2].contents.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col mb-1">
                      <p className="font-Inter font-semibold tracking-wide text-base hover:underline hover:cursor-pointer hover:animate-zoomin text-left">
                        {item}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
