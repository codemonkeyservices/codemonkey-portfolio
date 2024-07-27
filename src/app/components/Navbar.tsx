import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { PiSquaresFourLight, PiPuzzlePiece  } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiContactsBook2Line } from "react-icons/ri";
import { TbPuzzle } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className='sticky top-0 z-[100]'>
    <div className='2xl:max-w-[1450px] mx-auto navbar-morphism z-[100] sticky top-0'>
    <nav className='w-full flex justify-between py-2'>
            <Link className="mr-2" href="/">
                <div className='flex w-16 h-16 items-center hover:scale-110 transition-all duration-500 cursor-pointer'>
                    <Image src="/logo.png" 
                    alt='' 
                    width={300} height={300} 
                    />
                    <p className='ml-3 text-2xl font-bold'>Codemonkey</p>
                </div>
            </Link>
            <div className='flex'>
                <div className='my-auto text-mg font-semibold flex items-center px-5 py-2 hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <PiSquaresFourLight size={30} className='mr-1'/> <p>About Us</p>
                </div>
                <div className='my-auto text-mg font-semibold flex items-center px-5 py-2 hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <PiPuzzlePiece size={30} className='mr-1' /> <p>Services</p>
                </div>
                <div className='my-auto text-mg font-semibold flex items-center px-5 py-2 hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <AiOutlineFundProjectionScreen size={30} className='mr-1' /> <p>Projects</p>
                </div>
                <div className='px-5 py-2 my-auto text-mg font-semibold flex items-center hover:bg-cyan-100 hover:cursor-pointer hover:rounded-md hover:text-blue-800'>
                <RiContactsBook2Line size={30} className='mr-1' /> <p>Contact Us</p>
                </div>

                <div className='mx-3 my-auto text-mg font-semibold flex items-center bg-blue-600 text-white px-7 py-3 rounded-md hover:bg-blue-800 cursor-pointer'>
                    Book a call
                </div>
            </div>
    </nav>
    </div>
    </div>


  )
}

export default Navbar