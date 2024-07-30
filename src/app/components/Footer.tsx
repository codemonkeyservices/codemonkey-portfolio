import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
      <section className="bg-slate-200 rounded-t-3xl w-full mt-6" aria-label="footer section">
        <div className="flex pt-6 md:pt-20  justify-between w-full text-center md:text-start md:-mb-24 lg:-mb-10">
          <div className="px-4 md:px-6 lg:px-20 w-full md:w-[62%]">
            <article>
              <header>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold md:font-extrabold leading-tight md:leading-tight lg:leading-tight" aria-label="Start your digital journey with CodeMonkey today">
                  Start your digital journey with CodeMonkey today
                </h2>
              </header>
              <br />
              <p className="text-sm md:text-lg font-sans mb-6" aria-label="begin your journey with codemonkey">
                Begin your digital journey with CodeMonkey! Our expert tech team
                is ready to build and support your digital platforms. Get your
                dedicated tech team today and bring your vision to life!
              </p>
            </article>

            <address className="flex justify-around md:justify-start gap-2 mb-10 md:mb-0 not-italic" aria-label="contact us options">
              <Link
                href="mailto: services@codemonkey.co.in"
                accessKey="m"
                target="_blank"
                className="py-2 md:pr-10 flex gap-2 items-center rounded-lg drop-shadow-lg hover:md:bg-gray-100 hover:md:px-6 transition-all duration-700"
                aria-label="codemonkey email link"
              >
                <MdOutlineMailOutline className="size-8" />
                <p className="font-semibold text-base md:text-lg">email us</p>
              </Link>
              <Link
                href="https://wa.me/919168391923"
                target="_blank"
                accessKey="w"
                className="py-2 md:pr-10 flex gap-2 items-center rounded-lg drop-shadow-lg hover:md:bg-gray-100 hover:md:px-6 transition-all duration-700"
                aria-label="codemonkey whatsapp link"
              >
                <MdOutlineWhatsapp className="size-8" />
                <p className="font-semibold text-base md:text-lg">
                  whatsapp us
                </p>
              </Link>
            </address>
          </div>
          <figure className="hidden md:block w-[40%] lg:w-[45%] h-[500px] mb-1">
            <img
              src="/gorillafooter.png"
              alt="gorilla image"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
          </figure>
        </div>
        <footer className="w-full">
          <figure className="relative">
            <img
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
            <img
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
            <img
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
            <figure className="w-full h-auto">
              <img
                src="/wave-mask-space-top.svg"
                alt="wave-space"
                width={1}
                height={1}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </figure>
          </figure>

          <section className="flex  flex-col-reverse gap-10 md:gap-2 md:flex-row justify-around pt-10 bg-[#01011e] text-white px-10 pb-14">
            <section className="flex flex-col" aria-label="codemonkey company details">
              <div>
                <div className="w-40 h-40 p-4 mb-1">
                  <img
                    src="/LogoColor.png"
                    alt="codemonkey logo"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full  hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>
              <h2 className="text-white font-sans text-2xl font-bold py-2">
                CodeMonkey Services
              </h2>
              <h3>Providing reliable tech since 2022</h3>
              <p className="text-white font-sans">
                Copyright © 2024 - All rights reserved
              </p>
            </section>
            <nav className="flex flex-col  gap-1 font-sans">
              <h2 className="my-3 font-semibold text-lg">Company</h2>
              <Link href="#clients">
                <p className="hover:font-semibold transition-all duration-200">
                  get to know us
                </p>
              </Link>
              <Link href="#clients">
                <p className="hover:font-semibold transition-all duration-200">
                  check our Projects
                </p>
              </Link>
              <Link href="/book-a-call">
                <p className="hover:font-semibold transition-all duration-200">
                  inquire about Services
                </p>
              </Link>
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
                  aria-label="facebook link"
                >
                  <MdOutlineFacebook className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link
                  className="mx-2"
                  href="https://wa.me/919168391923"
                  target="_blank"
                  aria-label="whatsapp link"
                >
                  <MdOutlineWhatsapp className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link
                  className="mx-2"
                  href="https://www.linkedin.com/company/codemonkey-solution/posts/?feedView=all"
                  target="_blank"
                  aria-label="linkedin link"
                >
                  <FaLinkedin className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
                <Link
                  className="mx-2"
                  href="mailto: services@codemonkey.co.in"
                  target="_blank"
                  aria-label="e-mail link"
                >
                  <MdOutlineMailOutline className="size-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200" />
                </Link>
              </div>
              <p>services@codemonkey.co.in</p>
              <p>+91 9518542917</p>
            </address>
          </section>
        </footer>
      </section>
  );
};

export default Footer;
