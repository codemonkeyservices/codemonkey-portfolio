import Image from "next/image";

export default function AppDevelopment() {
  return (
    <div className="w-full px-4 lg:w-[90%] flex flex-col gap-14 bg-slate-100 rounded-lg text-center">
      <h1 className="text-3xl sm:text-5xl font-extrabold mx-auto my-5 blue-text-gradient ">
        App development services we provide
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
    service_name: "Machine Learning",
    service_img: "/automation/machine-learning.svg",
    service_img_fit: "contain",
    service_description:
      "We do machine learning to develop algorithms that enable computers to learn from data, identify patterns, make decisions, and predict outcomes. This technology powers advancements in various fields, from healthcare and finance to entertainment and autonomous systems.",
  },
  {
    service_name: "AI integrated Chat bot",
    service_img: "/automation/chatbot.svg",
    service_img_fit: "contain",
    service_description:
      "AI-integrated chatbots use artificial intelligence to provide human-like interactions, answer questions, and perform tasks. They improve customer service, automate repetitive tasks, and provide instant support. These chatbots learn from conversations to enhance their responses over time, making interactions more efficient and personalized.",
  },
  {
    service_name: "CI/CD",
    service_img: "/automation/cicd.svg",
    service_img_fit: "cover",
    service_description:
      "CI/CD (Continuous Integration and Continuous Deployment) automates software development processes, integrating code changes frequently and deploying them quickly. This practice ensures code quality through automated testing and enables rapid, reliable delivery of new features and bug fixes, enhancing development efficiency and product stability.",
  },
  {
    service_name: "Task Automation",
    service_img: "/automation/process.svg",
    service_img_fit: "cover",
    service_description:
      "Manual process automation using Python streamlines repetitive tasks by scripting solutions that increase efficiency and reduce errors. Python's versatility and extensive libraries enable the automation of tasks such as data entry, web scraping, and report generation, freeing up time for more complex, value-added activities.",
  },
];
