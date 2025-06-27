"use client";
import React, { useEffect } from "react";
import Navbar from "../common/navbar";
import Image from "next/image";

const HeroSection = () => {
  const [duration, setDuration] = React.useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (duration == 2) setDuration(0);
      else {
        setDuration((prev) => prev + 1);
      }
    }, 5000);
  }, [duration]);

  return (
    <div className="bg-[#fbeeee] w-full h-full min-h-screen ">
      <Navbar />

      {duration == 0 && (
        <section className="w-full h-full flex gap-10 items-center justify-center mt-10 animate-fadein-hero">
          <div>
            <Image src="/hero1.png" alt="hero image" width={500} height={500} />
          </div>
          <div className="text-5xl font-bold text-left w-1/2 leading-16">
            A Fresh Approach to Market Research
            <span className="text-primary">.</span>
          </div>
        </section>
      )}
      {duration == 1 && (
        <section className="w-full h-full flex gap-10 items-center justify-center mt-10 animate-fadein-hero">
          <div>
            <Image src="/hero2.png" alt="hero image" width={500} height={500} />
          </div>
          <div className="text-5xl font-bold text-left w-1/2 leading-16">
            From Data to Decisions: Tailored research as unique as your brand
            <span className="text-primary">.</span>
          </div>
        </section>
      )}
      {duration == 2 && (
        <section className="w-full h-full flex gap-10 items-center justify-center mt-10 animate-fadein-hero">
          <div className="">
            <Image
              src="/hero3.png"
              alt="hero image"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="text-5xl font-bold text-left w-1/2 leading-16">
            {
              " Your customers don't fit in a box, and neither does our approach"
            }
            <span className="text-primary">.</span>
          </div>
        </section>
      )}

      <div className="flex justify-center items-center gap-5 mt-10">
        <p
          className={`h-3 w-3 rounded-full ${
            duration == 0 ? "bg-primary" : "bg-[#C1C1C1]"
          }`}
        ></p>
        <p
          className={`h-3 w-3 rounded-full ${
            duration == 1 ? "bg-primary" : "bg-[#C1C1C1]"
          }`}
        ></p>
        <p
          className={`h-3 w-3 rounded-full ${
            duration == 2 ? "bg-primary" : "bg-[#C1C1C1]"
          }`}
        ></p>
      </div>
    </div>
  );
};

export default HeroSection;
