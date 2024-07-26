import Image from "next/image";
import ArrowButton from "./arrowButton";

export default function Services() {
  return (
    <div>
      {serviceData.map((d, index) => (
        <div
          key={index}
          className={`flex gap-4 items-center justify-between ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="h-[530px] w-[630px]">
            <Image
              src={d.service_img}
              alt={d.service_name}
              width={500}
              height={500}
              className={`object-${d.service_img_fit} w-full h-full`}
            />
          </div>

          <div className="w-[50%] px-6">
            <h1 className="service-name justify-start text-5xl font-extrabold w-full py-6">
              {d.service_name.split("").map((char, index) => (
                <span key={index} className="char">
                  {char === " " ? (
                    <span className="space-char">&nbsp;</span>
                  ) : (
                    char
                  )}
                </span>
              ))}
            </h1>

            <p className="text-lg font-normal pr-6">{d.service_description}</p>
            <ArrowButton name={d.service_button_name} />
          </div>
        </div>
      ))}
    </div>
  );
}

const serviceData = [
  {
    service_name: "Web Devopelopment",
    service_img: "/webdev1.svg",
    service_img_fit: "cover",
    service_description:
      "We develop all kinds of websites and web apps, including complex features like e-commerce, interactive graphs, chat systems, and more.",
    service_button_name: "learn more about our web development",
  },
  {
    service_name: "App Devopelopment",
    service_img: "/app_development.png",
    service_img_fit: "contain",
    service_description:
      "We create a wide range of mobile applications for both Android and iOS, incorporating advanced features such as e-commerce, interactive graphs, chat systems, and more.",
    service_button_name: "learn more about our App development",
  },
  {
    service_name: "Automation",
    service_img: "/automation.svg",
    service_img_fit: "cover",
    service_description:
      "We can automate your manual processes using Python, delivering efficient solutions to streamline your operations and increase productivity.",
    service_button_name: "learn more about Automation",
  },
];
