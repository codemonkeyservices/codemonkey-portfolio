import Image from "next/image";

export default function OurClient() {
  return (
    <section className="w-full flex flex-col items-center justify-center sm:p-4 mt-8 gap-6 text-center" id="clients">
      <header>
      <h2 className="text-2xl font-semibold">
        Clients using our software solutions
      </h2>
      </header>
      <div className="hidden md:flex flex-wrap justify-around gap-3 md:gap-5">
        {data.map((d, index) => (
          <figure className="p-3 md:p-5 h-10 md:h-16" key={index} aria-label={`client ${d.name}`}>
            <img
              src={d.image}
              alt={d.name}
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </figure>
        ))}
      </div>

      <div className="md:hidden w-full overflow-hidden">
        <div className="w-[420%] min-[400px]:w-[300%] flex">
          <figure className="flex justify-around w-full slide-animation-right" >
            {data.map((d) => (
              <img
                src={d.image}
                alt={d.name}
                width={80}
                height={80}
                key={d.name}
                className="object-contain drop-shadow-md"
                aria-label={`client ${d.name}`}
              />
            ))}
          </figure>
          <figure className="flex justify-around w-full gap-3 slide-animation-right">
            {data.map((d) => (
              <img
                src={d.image}
                alt={d.name}
                width={80}
                height={80}
                key={d.name}
                className="object-contain drop-shadow-md"
                aria-label={`client ${d.name}`}
              />
            ))}
          </figure>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    name: "OLA",
    image: "/maersk.svg",
  },
  {
    name: "OneShield",
    image: "/aspen.png",
  },
  {
    name: "bnbIndia",
    image: "/bnbIndia.png",
  },
  {
    name: "Bankai",
    image: "/virgin-hotels.svg",
  },
  {
    name: "Zedge",
    image: "/zedge.png",
  },
];
