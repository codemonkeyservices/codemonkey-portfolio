import React from 'react'
import Link from "next/link";
// import Image from "next/image";
// import { PiSquaresFourLight, PiPuzzlePiece  } from "react-icons/pi";
// import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// import { RiContactsBook2Line } from "react-icons/ri";


const Navbar = () => {

  return (
    <div className='sticky top-0 z-[100] navbar-morphism'>
    <div className='2xl:max-w-[1430px] mx-auto px-2'>
    <nav className='w-full flex justify-between py-2'>
            <Link className="mr-2 relative flex items-center" href="/">
                {/* <div className='w-auto h-12 p-2 mt-2 items-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                    <Image src="/logo.png" 
                    alt='logo' 
                    width={300} height={300} 
                    className="object-cover w-full h-full"
                    />
                </div> */}
                <p className='text-lg sm:text-2xl font-extrabold '>CodeMonkey</p>
            </Link>
            <div className='flex'>
                {/* <button aria-label="About Us"  onClick={(e) => handleScroll(e, 'whatwedo')} className='hidden md:flex my-auto text-mg font-semibold  items-center px-5 py-2 hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <PiSquaresFourLight size={28} className='mr-1'/> <p>About Us</p>
                </button>
                <button aria-label="Services" onClick={(e) => handleScroll(e, 'services')} className='hidden md:flex  my-auto text-mg font-semibold  items-center px-5 py-2 hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <PiPuzzlePiece size={28} className='mr-1' /> <p>Services</p>
                </button>
                <button aria-label="Projects" onClick={(e) => handleScroll(e, 'clients')} className='hidden md:flex  my-auto text-mg font-semibold  items-center px-5 py-2 hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <AiOutlineFundProjectionScreen size={28} className='mr-1' /> <p>Projects</p>
                </button>
                <button  aria-label="Contact Us" onClick={(e) => handleScroll(e, 'clients')} className='hidden md:flex px-5 py-2 my-auto text-mg font-semibold  items-center hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <RiContactsBook2Line size={28} className='mr-1' /> <p>Contact Us</p>
                </button> */}

                <Link href="/book-a-call" className='flex  sm:mx-3 my-auto text-mg font-semibold  items-center blue-button-gradient text-white px-2 sm:px-6  py-1 sm:py-3 rounded-md hover:bg-blue-800 cursor-pointer'>
                    Book a call
                </Link>
            </div>
    </nav>
    </div>
    </div>


  )
}

export default Navbar