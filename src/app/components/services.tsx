import Image from "next/image"
export default function Services(){
    return(
        <div>
            <div className="h-[630px] w-[630px]">
            <Image
              src={"/webdev1.svg"}
              alt="discussion"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
        </div>
        </div>
    )
}