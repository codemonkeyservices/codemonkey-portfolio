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
        <div className="flex pt-20 mb-[-40px] justify-between w-full">
          <div className="px-20 w-[62%]">
            <p className="text-5xl font-extrabold leading-tight">
              Start your digital journey with CodeMonkey today
            </p>
            <br />
            <p className="text-lg font-sans">
            Begin your digital journey with CodeMonkey! Our expert tech team is ready to build and support your digital platforms. Get your dedicated tech team today and bring your vision to life!
            </p>
            <br />
            <br />
            <div className="flex gap-2">
                <Link href="mailto: codemonkeyservices@gmail.com" target="_blank">
              <button className="py-2 pr-10 flex gap-2 items-center rounded-lg drop-shadow-lg hover:bg-gray-100 hover:px-6 transition-all duration-700">
                <MdOutlineMailOutline className="size-8" />
                <p className="font-semibold text-lg">email us</p>
              </button>
                </Link>
                <Link href="https://wa.me/919168391923" target="_blank">
              <button className="py-2 pr-10 flex gap-2 items-center rounded-lg drop-shadow-lg hover:bg-gray-100 hover:px-6 transition-all duration-700">
                <MdOutlineWhatsapp className="size-8" />
                <p className="font-semibold text-lg">whatsapp us</p>
              </button>
              </Link>
            </div>
          </div>
          <div className="w-[45%] h-[500px] mb-1">
            <Image src="/gorillafooter.png" width={500} height={500} className="object-contain w-full h-full" />
          </div>
        </div>
        <footer className="w-full">
          <div className="relative">
            <Image
              src="/wave-mask-salmon-top.svg"
              alt=""
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
                top: -10,
              }}
            />
            <Image
              src="/wave-mask-purple-top.svg"
              alt=""
              width={500}
              height={500}
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
              alt=""
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                position: "absolute",
              }}
            />
            <div className="w-full h-auto">
              <Image
                src="/wave-mask-space-top.svg"
                alt=""
                width={1}
                height={1}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>

          <section className="flex justify-around pt-10 bg-[#01011e] text-white px-10 pb-14">
            <div className="flex flex-col">
              <svg
                className="fill-gray-600 my-3"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <p className="text-white font-sans text-2xl font-bold py-2">
                CodeMonkey Services
               </p>
               <p>
                Providing reliable tech since 2022
              </p>
              <p className="text-white font-sans">
                Copyright © 2024 - All rights reserved
              </p>
            </div>
            <div className="flex flex-col  gap-1 font-sans">
              <h1 className="my-3 font-semibold text-lg">Company</h1>
              <p className="hover:font-semibold transition-all duration-200">get to know us</p>
              <p className="hover:font-semibold transition-all duration-200">check our Projects</p>
              <p className="hover:font-semibold transition-all duration-200">inquire about Services</p>
              <p className="hover:font-semibold transition-all duration-200">read blogs</p>
              <p className="hover:font-semibold transition-all duration-200">Careers - join our team</p>
            </div>
            <div className="flex flex-col gap-2 font-sans">
              <h1 className="my-3 text-lg font-medium">Socials</h1>
              <div className="flex">
                <Link className="mr-2" href="https://www.facebook.com/profile.php?id=61553948190570" target="_blank">
                <MdOutlineFacebook className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link className="mx-2" href="https://wa.me/919168391923" target="_blank">
                <MdOutlineWhatsapp className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link className="mx-2" href="https://www.linkedin.com/company/codemonkey-solution/posts/?feedView=all">
                <FaLinkedin  className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link className="mx-2" href="mailto: codemonkeyservices@gmail.com" target="_blank">
                <MdOutlineMailOutline  className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                
              </div>
              <h1>codemonkeyservices@gmail.com</h1>
              <h1>+91 9518542917</h1>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
