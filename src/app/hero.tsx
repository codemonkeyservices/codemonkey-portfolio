import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import BookButton from "./components/bookButton";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[800px] min-[1600px]:h-screen">
      <div className="hero-bottom-wave fill-transparent-to-white  absolute inset-0 w-full h-full bg-blue-600 ">
        <img
          src="/hero-bg-planet.svg"
          alt="hero background image"
          // priority
          width={800}
          height={800}
          className="object-cover object-bottom w-full h-full"
        />
        <div className="h-full w-full absolute inset-0 flex justify-center">
          <div className=" flex flex-col pt-20 items-center gap-4 text-center px-2 md:px-0 md:w-[80%] lg:max-w-[1000px]">
            <button 
            aria-label="CodeMonkey announces new month and yearly plans"
            className="group border-[3px] md:border-4 rounded-full border-gray-400 flex gap-3 px-6 py-2 items-center mb-4 text-white hover:border-cyan-300 hover:text-sky-500 transition-all duration-300 ease-in-out relative">
              <p className="text-pink-600 text-sm md:text-lg font-medium">
                New
              </p>
              <p className="font-bold text-xs md:text-lg">
                codemonkey announces new month and yearly plans{" "}
              </p>
              <div className="w-8 text-sky-500 flex transition-custom transform group-hover:translate-x-4">
                <FaArrowRight className="size-4 md:size-5" />
              </div>
            </button>
            <header>
            <h1 className="text-3xl md:text-6xl font-extrabold text-yellow-300 leading-tight" aria-label="codemonkey tagline">
              Turning Your Vision into a Stunning Online Reality
            </h1>
            <h2 className="text-sm md:text-base font-medium text-white" aria-label="company discription">

            Elevate your digital presence with CodeMonkey. We specialize in innovative websites, web apps, and mobile apps for Android and iOS, plus automation solutions that boost efficiency. Partner with us to transform your vision into impactful, real-world results.            </h2>
            </header>
            <div className="pt-4 flex flex-col md:flex-row gap-4 text-lg font-semibold">
              <BookButton />
              <Link href="#clients" 
              aria-label="learn about codemonkey"
              className="text-sky-300  py-3 hover:px-4 hover:bg-[#9191912f] transition-custom flex items-center gap-3">
                <p className="light-blue-text-gradient">
                  learn about codemonkey
                </p>
                <FaArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
