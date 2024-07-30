import Image from "next/image";

export default function webdevelopment() {
  return (
    <div className="w-full px-4 lg:w-[90%] flex flex-col gap-14 bg-slate-100 rounded-lg text-center">
      <h1 className="text-3xl sm:text-5xl font-extrabold mx-auto my-5 blue-text-gradient ">
        web development services we provide
      </h1>
      {serviceData.map((d, index) => (
        <section
          key={index}
          className={`flex gap-8 lg:gap-4 items-center flex-col lg:flex-row justify-between ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
          aria-label={`${d.service_name} service discription`}
        >
          <figure className="h-auto lg:h-[530px] w-[80%] lg:w-[630px]">
            <Image
              src={d.service_img}
              alt={d.service_name}
              width={400}
              height={400}
              className={`object-${d.service_img_fit} w-full h-full mix-blend-darken`}
              aria-label={`${d.service_name} illustration image`}
            />
          </figure>

          <article className="w-full md:w-[70%] lg:w-[50%] md:px-6 text-center md:text-start">
            <header>
              <h1 className="hidden xl:block service-name justify-start text-5xl font-extrabold w-full ">
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

            <p className="text-lg font-normal pr-6">{d.service_description}</p>
          </article>
        </section>
      ))}

      <section className="text-center flex flex-col gap-3 mb-6 py-10">
        <h2 className="text-2xl sm:text-4xl font-bold blue-text-gradient ">
          Can't find the services you need?
        </h2>
        <h2 className="text-lg sm:text-3xl">
          no worries reach out to us and we can make it happen
        </h2>
      </section>
    </div>
  );
}

const serviceData = [
  {
    service_name: "E-Commerce Platform",
    service_img: "/webdevelopment/ecommerce.svg",
    service_img_fit: "contain",
    service_description:
      "We build robust e-commerce platforms that drive sales and enhance user experience, helping clients boost their online business.",
  },
  {
    service_name: "Website Maintenance",
    service_img: "/webdevelopment/maintaince.svg",
    service_img_fit: "contain",
    service_description:
      "We ensure your website is always up-to-date and running smoothly, allowing clients to focus on their core business without technical worries.",
  },
  {
    service_name: "UI/UX",
    service_img: "/webdevelopment/UIUX.svg",
    service_img_fit: "cover",
    service_description:
      "We design intuitive and engaging user interfaces that improve customer satisfaction and retention, transforming client visions into reality.",
  },
  {
    service_name: "Dashboard",
    service_img: "/webdevelopment/dashboard.svg",
    service_img_fit: "cover",
    service_description:
      "We create comprehensive dashboards that provide real-time insights, helping clients make informed decisions and streamline operations.",
  },
  {
    service_name: "SEO",
    service_img: "/webdevelopment/SEO.svg",
    service_img_fit: "cover",
    service_description:
      "We implement effective SEO strategies that increase visibility and drive organic traffic, significantly improving clients' online presence.",
  },
  {
    service_name: "Chat System",
    service_img: "/webdevelopment/chat.svg",
    service_img_fit: "cover",
    service_description:
      "We develop advanced chat systems that enhance customer engagement and support, providing clients with seamless communication solutions.",
  },
];
