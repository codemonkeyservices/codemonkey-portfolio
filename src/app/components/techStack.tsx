import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";


export default function TechStack() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start px-8 py-16">
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
      <div className="px-6">
      {groupedTechData.map((group, rowIndex) => (
        <div key={rowIndex} className="flex justify-end items-center mb-4">
          {group.map((tech) => (
            <button key={tech.name} className="relative flex flex-col justify-center items-center p-4 group">
            <span className="absolute top-0 left-0 right-0 mx-auto text-center text-black text-sm font-bold opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all duration-300">{tech.name}</span>
            <Image src={tech.icon} alt={tech.name} width={50} height={50} />
          </button>
          ))}
        </div>
      ))}
    </div>
    </section>
  );
};




const TechData = [
    { name: 'type script', icon: '/tech/ts.png' },
    { name: 'java script', icon: '/tech/js.png' },
    { name: 'react',       icon: '/tech/react.png' },
    { name: 'Next.js',     icon: '/tech/next.png' },
    { name: 'flutters', icon: '/tech/flutter.png' },
    { name: 'tailwind', icon: '/tech/tailwind.png' },
    { name: 'aws', icon: '/tech/aws.png' },
    { name: 'html', icon: '/tech/html.png' },
    { name: 'css', icon: '/tech/css.png' },
    { name: 'firebase', icon: '/tech/firebase.png' },
    { name: 'sql', icon: '/tech/sql.png' },
    { name: 'postgreSQL', icon: '/tech/postgreSQL.png' },
    { name: 'MySql', icon: '/tech/mysql.png' },
    { name: 'mongo', icon: '/tech/mongo.png' },
    { name: 'vercel', icon: '/tech/vercel.png' },
    { name: 'jenkins', icon: '/tech/jenkin.png' },
    { name: 'docker', icon: '/tech/docker.png' },
    { name: 'linux', icon: '/tech/linux.png' },
    { name: 'python', icon: '/tech/python.png' },
    { name: 'c', icon: '/tech/c.png' },
    { name: 'c++', icon: '/tech/c++.png' },
    { name: 'photoshop', icon: '/tech/photoshop.png' },
    { name: 'illustrator', icon: '/tech/illustrator.png' }
    
  ];

  const groupedTechData = [
    TechData.slice(0, 8),
    TechData.slice(8, 14),
    TechData.slice(14, 19),
    TechData.slice(19, 23)
];
