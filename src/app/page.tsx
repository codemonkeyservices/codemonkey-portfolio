import Hero from "./hero";
import OurClient from "./components/ourClients";
import WhatWeDoSection from "./components/whatWeDoSection";
import Services from "./components/services";
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-[96%] flex flex-col items-center">
      <Hero/>
      <div className="w-[90%] flex flex-col gap-14">
      <OurClient/>
      <WhatWeDoSection/>
      <Services/>
      </div>
      <Footer/>
      </div>

    </main> 
  );
}
