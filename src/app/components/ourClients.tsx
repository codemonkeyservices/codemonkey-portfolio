import Image from "next/image"

export default function OurClient(){
    return(
        <div className="w-full flex flex-col items-center justify-center p-4 mt-8 gap-6">
            <p className="text-2xl font-semibold">Clients using our software solutions</p>
            <div className="flex  gap-5">
                {
                    data.map((d,index)=>(
                        <button className="p-5 h-16">
                            <Image src={d.image} alt={d.name} width={200} height={200} className="object-cover w-full h-full" />
                        </button>
                    ))
                }

            </div>
        </div>
    )
}

const data = [
    {
        "name": "OLA",
        "image": "/ola.png"
    },
    {
        "name": "OneShield",
        "image": "/oneshield.png"
    },
    {
        "name": "bnbIndia",
        "image": "/bnbIndia.png"
    },
    {
        "name": "Bankai",
        "image": "/Bankai.png"
    },
    {
        "name": "Zedge",
        "image": "/zedge.png"
    },
]