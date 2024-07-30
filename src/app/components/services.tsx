import Image from "next/image";
import ArrowButton from "./arrowButton";

export default function Services() {
  return (
    <section id="services" aria-label="what services we provide at codemonkey section">
      {serviceData.map((d, index) => (
        <figure
          key={index}
          className={`flex gap-8 lg:gap-4 items-center flex-col lg:flex-row justify-between ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}

          aria-label={`about ${d.service_name} service`}
        >
          <figure className="h-auto lg:h-[530px] w-[80%] lg:w-[630px]">
            <Image
              src={d.service_img}
              alt={d.service_name}
              width={400}
              height={400}
              className={`object-${d.service_img_fit} w-full h-full`}
              aria-label={`${d.service_name} illustration image`}
            />
          </figure>

          <article className="w-full md:w-[70%] lg:w-[50%] md:px-6 text-center md:text-start" aria-label={`${d.service_name} service discription`}>
            <header>
              <h1 className="hidden xl:block service-name justify-start text-5xl font-extrabold w-full py-6 ">
                {d.service_name.split("").map((char, index) => (
                  <span key={index} className="char">
                    {char === " " ? (
                      <span className="space-char hidden xl:block">&nbsp;</span>
                    ) : (
                      char
                    )}
                  </span>
                ))}
              </h1>

              <h1 className="block xl:hidden text-3xl md:text-5xl font-extrabold break-words py-6">
                {d.service_name}
              </h1>
            </header>

            <figcaption className="text-lg font-normal pr-6">{d.service_description}</figcaption>
            <ArrowButton name={d.service_button_name} url={d.service_link} />
          </article>
        </figure>
      ))}
    </section>
  );
}

const serviceData = [
  {
    service_name: "Web Development",
    service_img: "/webdev.svg",
    service_img_fit: "cover",
    service_description:
      "We develop all kinds of websites and web apps, including complex features like e-commerce, interactive graphs, chat systems, and more.",
    service_button_name: "learn more about our web development",
    service_link: "/web-development",
  },
  {
    service_name: "App Development",
    service_img: "/app_development.png",
    service_img_fit: "contain",
    service_description:
      "We create a wide range of mobile applications for both Android and iOS, incorporating advanced features such as e-commerce, interactive graphs, chat systems, and more.",
    service_button_name: "learn more about our App development",
    service_link: "/app-development",
  },
  {
    service_name: "Automation",
    service_img: "/automation.svg",
    service_img_fit: "cover",
    service_description:
      "We can automate your manual processes using Python, delivering efficient solutions to streamline your operations and increase productivity.",
    service_button_name: "learn more about Automation",
    service_link: "/automation",
  },
];
