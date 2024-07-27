import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import BookButton from "./components/bookButton";

const Hero = () => {
  return (
    <section className="relative w-full h-[800px] min-[1600px]:h-screen">
      <div className="hero-bottom-wave fill-transparent-to-white  absolute inset-0 w-full h-full bg-blue-600">
        <Image
          src="/hero-bg-planet.svg"
          alt=""
          priority
          layout="fill" // Change `fill` to `layout="fill"`
          objectFit="cover"
          objectPosition="bottom"
          style={{
            color: "transparent",
          }}
        />
        <div className="h-full w-full absolute inset-0 flex justify-center">
            <div className=" flex flex-col pt-20 items-center gap-4 text-center w-[80%] lg:max-w-[1000px]">
            <button className="group border-4 rounded-full border-gray-400 flex gap-3 px-6 py-2 items-center mb-4 text-white hover:border-cyan-300 hover:text-sky-500 transition-all duration-300 ease-in-out relative">
            <p className="text-pink-600 text-lg font-medium">New</p>
            <p className="font-bold text-lg">
              codemonkey announces new month and yearly plans{" "}
            </p>
            <div className="w-8 text-sky-500 flex transition-custom transform group-hover:translate-x-4">
              <FaArrowRight className="size-5" />
            </div>
          </button>
          <p className="text-6xl font-extrabold text-yellow-300 leading-tight">
            Turning Your Vision into a Stunning Online Reality
          </p>
          <p className="font-medium text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, veniam omnis facilis pariatur explicabo eaque perspiciatis voluptates. Nostrum aliquid molestias sapiente voluptatem saepe deleniti, necessitatibus adipisci </p>
          <div className="pt-4 flex gap-4 text-lg font-semibold">
            <BookButton/>
            <button className="text-sky-300  py-3 hover:px-4 hover:bg-[#9191912f] transition-custom flex items-center gap-3">
                <p className="light-blue-text-gradient" >learn about codemonkey</p>
                <FaArrowRight className="size-4" />
            </button>
          </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
