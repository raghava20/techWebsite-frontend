import React from "react";
import {
  InsightArrowIcon,
  ResearchIcon1,
  ResearchIcon2,
  ResearchIcon3,
  ResearchIcon4,
} from "../assets/svg/_index";

const B2bMarketResearch = () => {
  return (
    <main className="py-10 px-20 2xl:px-40 flex flex-col bg-[#ECECEC] min-h-screen ">
      <div className="font-semibold text-3xl ">
        We’re a full-service B2B market research thought partner committed to
        strengthening your strategies with deep, subject matter expertise.
      </div>

      <section className="flex flex-col w-full h-full mt-10 gap-5 ">
        <div className="flex gap-4 flex-wrap w-full h-full">
          <div className="flex-[0.3] bg-[#EBFFD8] p-10 rounded-md min-w-fit lg:min-w-[250px] relative overflow-hidden">
            <p className="font-semibold mb-2">
              Branding and Advertising Communication
            </p>
            <p className="z-10 relative leading-5">
              We help brands resonate. From brand perception and awareness to
              message testing and ad effectiveness, our research empowers you to
              communicate with clarity and impact. Backed by qualitative
              insights and robust tracking, we ensure your brand voice connects
              with the right audience.
            </p>
            <InsightArrowIcon className="w-10 h-10 fill-black mt-3 cursor-pointer" />
            <div className="absolute right-0 top-[75%] w-full h-full flex justify-end items-end">
              <ResearchIcon1 className=" w-full h-full " />
            </div>
          </div>

          <div className="flex-1 bg-[#F4F0FF] p-10 rounded-md min-w-fit lg:min-w-[450px] relative overflow-hidden">
            <div className="w-[50%]">
              <p className="font-semibold mb-2 w-1/2">
                Market Opportunity Research
              </p>
              <p className="z-10 relative leading-5">
                Find your edge before you enter. Our market opportunity research
                identifies whitespace, tests feasibility, and maps competitive
                dynamics. Whether you are planning a launch or exploring new
                segments, we provide the insights to make bold, informed moves.
              </p>
            </div>
            <InsightArrowIcon className="w-10 h-10 fill-black mt-3 cursor-pointer" />
            <div className="absolute -right-[50%] bottom-0 w-full h-full flex justify-center items-center">
              <ResearchIcon2 className=" w-[80%] h-[80%] " />
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="flex gap-4 flex-wrap w-full h-full">
          <div className="flex-1 bg-gradient-to-r from-[#DDDDDD] via-[#F5F5F5] to-[#FFFFFF]  p-10 rounded-md min-w-fit lg:min-w-[450px] justify-start flex  items-center relative overflow-hidden">
            <div className="w-[50%]">
              <p className="font-semibold mb-2 w-1/2">
                Customer Research and Segmentation
              </p>
              <p className="z-10 relative leading-5">
                {
                  "  Know who you're talking to — and why it matters. We uncover the motivations, behaviors, and needs of your customers, then segment them meaningfully to guide strategy. Our blend of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity."
                }
              </p>
            </div>
            <InsightArrowIcon className="w-10 h-10 fill-black mt-3 cursor-pointer" />
            <div className="absolute -right-[80%] bottom-0 top-[10%]  w-full h-full flex ">
              <ResearchIcon3 className=" w-full h-full " />
            </div>
          </div>

          <div className="flex-[0.4] bg-[#FFEAEB] p-10 py-24  min-w-fit lg:min-w-[250px]  rounded-md w-fit relative overflow-hidden">
            <p className="font-semibold mb-2">Product Research</p>
            <p className="z-10 relative leading-5">
              Build products that solve real problems. From concept testing and
              feature prioritization to in-use feedback, we support every phase
              of product development. Our insights help you align innovation
              with user expectations — minimizing risk and maximizing relevance.
            </p>
            <InsightArrowIcon className="w-10 h-10 fill-black mt-3 cursor-pointer" />
            <div className="absolute right-[10%] top-[8%] w-full h-full flex justify-end items-start">
              <ResearchIcon4 className=" w-[40%] h-[40%] " />
            </div>
            <div className="absolute right-[10%] top-0 w-full h-full flex justify-end items-end">
              <ResearchIcon4 className=" w-[30%] h-[30%] " />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default B2bMarketResearch;
