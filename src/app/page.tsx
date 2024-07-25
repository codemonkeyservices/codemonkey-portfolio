import Hero from "./hero";
import OurClient from "./components/ourClients";
import WhatWeDoSection from "./components/whatWeDoSection";
import Services from "./components/services";
import Footer from "./components/Footer";
import TechStack from "./components/techStack";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-[90%] flex flex-col gap-14">
        <OurClient />
        <WhatWeDoSection />
        <TechStack/>
        <Services />
      </div>
      <Footer />
    </>
  );
}
