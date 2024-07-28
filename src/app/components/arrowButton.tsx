import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ArrowButtonProps {
    name: string;
    url?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ name, url }) => {
    const validUrl = url || '#'; // Fallback to '#' if url is undefined

    return (
        <Link href={validUrl} className='py-4 group hover:bg-gray-50 hover:pr-7 rounded-xl drop-shadow-md' aria-label={name}>
            <div className='text-lg flex flex-col sm:flex-row items-center gap-2 font-semibold text-blue-600 transition-custom transform group-hover:translate-x-4'>
                <p>{name}</p>
                <FaArrowRight className="size-4" />
            </div>
        </Link>
    );
};

export default ArrowButton;
