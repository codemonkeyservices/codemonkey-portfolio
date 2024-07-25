import React from 'react'
import Image from "next/image";
import Link from "next/link";
import discord from "@/../public/discord_grey.png"
import whatsapp from "@/../public/whatsapp_grey.png"
import gmail from "@/../public/gmail_grey.png"


const Footer = () => {
  return (
    <>
    <footer className='w-full'>
  <div className='relative'>
      <Image
        src="/wave-mask-salmon-top.svg"
        alt=""
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: -10
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
          bottom: 0
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
      <div className='w-full h-auto'>
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

<section className='flex justify-between pt-10 bg-[#01011e] text-white px-10'>
        <div className='flex flex-col'>
        <svg className='fill-gray-600 my-3' width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
      </path>
    </svg>
    <p className='text-white'>CodeMonkey<br/>Providing reliable tech since 2023</p>
    <p className='text-white'>Copyright © 2024 - All rights reserved</p>

        </div>
        <div className='flex flex-col'>
          <h1 className='my-3'>Company</h1>
          <p>About Us</p>
          <p>Projects</p>
          <p>Services</p>
          <p>Blogs</p>
          <p>Careers</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='my-3'>Socials</h1>
          <div className='flex'>
          <Link className='mr-2' href="/" >
            <Image
              src={whatsapp}
              width={25}
              height={25}
            />
          </Link>
          <Link className='mx-2' href="/" >
            <Image
              src={gmail}
              width={25}
              height={25}
            />
          </Link>
        </div>
        <h1>codemonkeyservices@gmail.com</h1>
        <h1>+91 9518542917</h1>
        </div>
</section>

</footer>
        
    </>
  )
}

export default Footer