import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const integrations = [
  { name: 'JavaScript', icon: '/path/to/javascript-icon.svg' },
  { name: 'Java', icon: '/path/to/java-icon.svg' },
  { name: 'Python', icon: '/path/to/python-icon.svg' },
  // add other integrations here...
];

export default function TechStack() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start px-8 py-16">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-6xl font-bold mb-4 leading-tight">
          Build with the best Tech available
        </h2>
        <p className="text-lg mb-4">
        At CodeMonkey, we leverage cutting-edge technology to deliver top-tier performance and unbeatable security.
        </p>
        <button className='py-4  group hover:bg-gray-50 hover:pr-7 rounded-xl drop-shadow-md'>
        <div className='text-lg flex items-center gap-2 font-semibold text-blue-600 transition-custom transform group-hover:translate-x-4'>
        <p>Explore all our integrations and languages</p>
        <FaArrowRight className="size-4" />
        </div>
        </button>
        
      </div>
      <div className="md:w-1/2 grid grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex justify-center items-center p-4">
            <Image src={integration.icon} alt={integration.name} width={64} height={64} />
          </div>
        ))}
      </div>
    </div>
  );
};
