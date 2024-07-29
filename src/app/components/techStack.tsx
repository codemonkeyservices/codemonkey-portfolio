import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import "@/styles/marquee.css";

export default function TechStack() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-start lg:px-8 py-16 w-full">
      <div className="w-full lg:w-1/2 mb-8 md:mb-0">
        <header aria-label="what technology we use at codemonkey ?">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Build with the best Tech available
          </h2>
          <h3 className="text-lg mb-4">
            At CodeMonkey, we leverage cutting-edge technology to deliver
            top-tier performance and unbeatable security.
          </h3>
        </header>
        <button
          aria-label="Explore all our integrations and languages"
          className="py-4  group hover:bg-gray-50 hover:pr-7 rounded-xl drop-shadow-md"
        >
          <div className="text-lg flex items-center gap-2 font-semibold text-blue-600 transition-custom transform group-hover:translate-x-4">
            <p>Explore all our integrations and languages</p>
            <FaArrowRight className="size-4" />
          </div>
        </button>
      </div>
      <aside className="hidden lg:block px-6" aria-label="images of all the technologies we use">
        {groupedTechData.map((group, rowIndex) => (
          <div key={rowIndex} className="flex justify-end items-center mb-4">
            {group.map((tech) => (
              <figure aria-label={tech.name} key={tech.name}>
                <button
                  aria-label={tech.name}
                  className="relative flex flex-col justify-center items-center p-4 group"
                >
                  <figcaption className="absolute top-0 left-0 right-0 mx-auto text-center text-black text-sm font-bold opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all duration-300">
                    {tech.name}
                  </figcaption>
                  <figure className="w-6 h-6 xl:w-11 xl:h-11">
                    <img
                      src={tech.icon}
                      alt='tech icon'
                      width={50}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </figure>
                </button>
              </figure>
            ))}
          </div>
        ))}
      </aside>

      <div className="flex flex-col lg:hidden  gap-5  overflow-hidden" aria-label="images of all the technologies we use">
        <div className="w-[900%] flex">
          <figure className="flex justify-around w-full slide-animation-right">
            {TechData.map((d) => (
              <img
                src={d.icon}
                alt='techn icon'
                width={40}
                height={40}
                key={d.name}
                className="object-contain drop-shadow-md"
                aria-label={d.name}
              />
            ))}
          </figure>
          <figure className="flex justify-around w-full gap-3 slide-animation-right">
            {TechData.map((d) => (
              <img
                src={d.icon}
                alt='techn icon'
                width={40}
                height={40}
                key={d.name}
                className="object-contain drop-shadow-md"
                aria-label={d.name}
              />
            ))}
          </figure>
        </div>

        <div>
          <div className="h-14 w-[900%] flex">
            <figure className="flex justify-around w-full slide-animation-left">
              {[...TechData].reverse().map((d) => (
                <img
                  src={d.icon}
                  alt='techn icon'
                  width={40}
                  height={40}
                  key={d.name}
                  className="object-contain drop-shadow-md"
                  aria-label={d.name}
                />
              ))}
            </figure>
            <figure className="flex justify-around w-full gap-3 slide-animation-left">
              {[...TechData].reverse().map((d) => (
                <img
                  src={d.icon}
                  alt='techn icon'
                  width={40}
                  height={40}
                  key={d.name}
                  className="object-contain drop-shadow-md"
                  aria-label={d.name}
                />
              ))}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

const TechData = [
  { name: "type script", icon: "/tech/ts.png" },
  { name: "java script", icon: "/tech/js.png" },
  { name: "react", icon: "/tech/react.png" },
  { name: "Next.js", icon: "/tech/next.png" },
  { name: "flutters", icon: "/tech/flutter.png" },
  { name: "tailwind", icon: "/tech/tailwind.png" },
  { name: "aws", icon: "/tech/aws.png" },
  { name: "html", icon: "/tech/html.png" },
  { name: "css", icon: "/tech/css.png" },
  { name: "firebase", icon: "/tech/firebase.png" },
  { name: "sql", icon: "/tech/sql.png" },
  { name: "postgreSQL", icon: "/tech/postgreSQL.png" },
  { name: "MySql", icon: "/tech/mysql.png" },
  { name: "mongo", icon: "/tech/mongo.png" },
  { name: "vercel", icon: "/tech/vercel.png" },
  { name: "jenkins", icon: "/tech/jenkin.png" },
  { name: "docker", icon: "/tech/docker.png" },
  { name: "linux", icon: "/tech/linux.png" },
  { name: "python", icon: "/tech/python.png" },
  { name: "c", icon: "/tech/c.png" },
  { name: "c++", icon: "/tech/c++.png" },
  { name: "photoshop", icon: "/tech/photoshop.png" },
  { name: "illustrator", icon: "/tech/illustrator.png" },
];

const groupedTechData = [
  TechData.slice(0, 8),
  TechData.slice(8, 14),
  TechData.slice(14, 19),
  TechData.slice(19, 23),
];
