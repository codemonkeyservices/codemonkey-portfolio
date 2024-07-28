import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-200 rounded-t-3xl w-full mt-6">
        <div className="flex pt-6 md:pt-20  justify-between w-full text-center md:text-start md:-mb-24 lg:-mb-10">
          <div className="px-4 md:px-6 lg:px-20 w-full md:w-[62%]">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold md:font-extrabold leading-tight">
              Start your digital journey with CodeMonkey today
            </p>
            <br />
            <p className="text-sm md:text-lg font-sans mb-6">
              Begin your digital journey with CodeMonkey! Our expert tech team
              is ready to build and support your digital platforms. Get your
              dedicated tech team today and bring your vision to life!
            </p>
    
            <address className="flex justify-around md:justify-start gap-2 mb-10 md:mb-0 not-italic">
              <Link href="mailto: codemonkeyservices@gmail.com" accessKey="m" target="_blank" className="py-2 md:pr-10 flex gap-2 items-center rounded-lg drop-shadow-lg hover:md:bg-gray-100 hover:md:px-6 transition-all duration-700">
                  <MdOutlineMailOutline className="size-8" />
                  <p className="font-semibold text-base md:text-lg">email us</p>
              </Link>
              <Link href="https://wa.me/919168391923" target="_blank" accessKey="w" className="py-2 md:pr-10 flex gap-2 items-center rounded-lg drop-shadow-lg hover:md:bg-gray-100 hover:md:px-6 transition-all duration-700">
                  <MdOutlineWhatsapp className="size-8" />
                  <p className="font-semibold text-base md:text-lg">whatsapp us</p>
              </Link>
            </address>
          </div>
          <div className="hidden md:block w-[40%] lg:w-[45%] h-[500px] mb-1">
            <Image
              src="/gorillafooter.png"
              alt="gorilla image"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <footer className="w-full">
          <div className="relative">
            <Image
              src="/wave-mask-salmon-top.svg"
              alt="wave-salmon"
              width={200}
              height={200}
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: -10,
              }}
            />
            <Image
              src="/wave-mask-purple-top.svg"
              alt="wave-purple"
              width={200}
              height={200}
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                mixBlendMode: "multiply",
                bottom: 0,
              }}
            />
            <Image
              src="/wave-mask-space-top.svg"
              alt="wave-top"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
              }}
            />
            <div className="w-full h-auto">
              <Image
                src="/wave-mask-space-top.svg"
                alt="wave-space"
                width={1}
                height={1}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>

          <section className="flex  flex-col-reverse gap-10 md:gap-2 md:flex-row justify-around pt-10 bg-[#01011e] text-white px-10 pb-14">
            <div className="flex flex-col">
              <div>
                <div className="w-40 h-40 p-4 mb-1">
                  <Image
                    src="/logo.png"
                    alt="codemonkey logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full invert opacity-25 hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>
              <p className="text-white font-sans text-2xl font-bold py-2">
                CodeMonkey Services
              </p>
              <p>Providing reliable tech since 2022</p>
              <p className="text-white font-sans">
                Copyright © 2024 - All rights reserved
              </p>
            </div>
            <nav className="flex flex-col  gap-1 font-sans">
              <h1 className="my-3 font-semibold text-lg">Company</h1>
              <p className="hover:font-semibold transition-all duration-200">
                get to know us
              </p>
              <p className="hover:font-semibold transition-all duration-200">
                check our Projects
              </p>
              <p className="hover:font-semibold transition-all duration-200">
                inquire about Services
              </p>
              <p className="hover:font-semibold transition-all duration-200">
                read blogs
              </p>
              <p className="hover:font-semibold transition-all duration-200">
                Careers - join our team
              </p>
            </nav>
            <address className="flex flex-col decoratop gap-2 font-sans not-italic">
              <h1 className="my-3 text-lg font-medium">Socials</h1>
              <div className="flex ">
                <Link
                  className="mr-2"
                  href="https://www.facebook.com/profile.php?id=61553948190570"
                  target="_blank"
                >
                  <MdOutlineFacebook className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link
                  className="mx-2"
                  href="https://wa.me/919168391923"
                  target="_blank"
                >
                  <MdOutlineWhatsapp className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link
                  className="mx-2"
                  href="https://www.linkedin.com/company/codemonkey-solution/posts/?feedView=all"
                >
                  <FaLinkedin className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link
                  className="mx-2"
                  href="mailto: codemonkeyservices@gmail.com"
                  target="_blank"
                >
                  <MdOutlineMailOutline className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
              </div>
              <p>codemonkeyservices@gmail.com</p>
              <p>+91 9518542917</p>
            </address>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
