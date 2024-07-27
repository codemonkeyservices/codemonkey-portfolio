import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ArrowButtonProps {
    name: string;
    url?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ name, url }) => {
    return(
        <Link href="#">
        <button className='py-4  group hover:bg-gray-50 hover:pr-7 rounded-xl drop-shadow-md'>
        <div className='text-lg flex items-center gap-2 font-semibold text-blue-600 transition-custom transform group-hover:translate-x-4'>
        <p>{name}</p>
        <FaArrowRight className="size-4" />
        </div>
        </button></Link>
    )
};

export default ArrowButton

