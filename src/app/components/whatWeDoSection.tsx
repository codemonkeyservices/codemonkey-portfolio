import { Nunito } from "next/font/google";
const localfont = Nunito({ subsets: ["latin"] });
import Counter from "./counter";

export default function WhatWeDoSection() {
  return (
    <div className="w-full bg-gray-50 flex flex-col item-center text-center p-6 px-10">
      <p
        className={`${localfont.className}  p-4 text-lg text-sky-600 font-bold`}
      >
        WHAT IS CODEMONKEY
      </p>
      {/* <p className="text-4xl font-extrabold p-4">We Can Develop All your Go Digital Goals</p> */}
      <p className="text-lg px-10 font-medium">
        We’re a dynamic startup dedicated to delivering comprehensive software
        solutions tailored to your needs. Whether you're a startup or an
        established business, we collaborate closely with you to provide a
        complete suite of digital services. From cutting-edge web and mobile app
        development to e-commerce platforms, automation, dashboards, UI/UX
        design, and graphic design, we offer an all-in-one package to drive your
        success. Leveraging the latest technologies, we ensure top-notch
        performance and innovative solutions to keep your business ahead of the
        curve.
      </p>

      <div className="flex justify-between p-10 px-20">
        {counterData.map((d, index) => (
          <div className="flex flex-col justify-center items-center">
            <Counter start={d.startCount} end={d.count} />
            <p className="text-2xl font-bold">{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const counterData = [
  {
    title: "CLIENTS",
    count: 20,
    startCount: 5
  },
  {
    title: "PROJECTS",
    count: 100,
    startCount: 40
  },
  {
    title: "YEARS OF EXPERINCE",
    count: 5,
    startCount: 2
  },
];
