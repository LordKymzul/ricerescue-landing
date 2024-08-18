import { Item } from "@radix-ui/react-dropdown-menu";
import { Check, CircleCheckBig } from "lucide-react";
import Image from "next/image"




export interface BusinessCardProps {
    title: string;
    images: string[];
    items: string[];
}

export function BusinessCard({
    title,
    images,
    items
}: BusinessCardProps) {
    return (
        <div className="hover:bg-primary hover:text-white rounded-xl hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="flex flex-col w-full p-8 border rounded-xl h-[340px]">

                <div className="flex justify-center">
                    <h1 className="font-extrabold text-2xl md:text-3xl tracking-tighter">
                        {title}
                    </h1>
                </div>

                <div className="flex items-center gap-4 mt-6 justify-center flex-wrap">
                    {
                        images.map((image, index) => {
                            return (
                                <Image
                                    key={index}
                                    height={30}
                                    width={30}
                                    alt={index + image}
                                    src={'/features/ai.png'} />
                            )
                        })
                    }
                </div>


                <div className="grid grid-cols-1 gap-4 mt-6">
                    {
                        items.map((item, index) => {
                            return (
                                <BuildBusinessItem item={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


function BuildBusinessItem({ item }: {
    item: string
}) {
    return (
        <div className="flex items-center gap-x-4">
            <CircleCheckBig />
            <p className="font-normal text-base">{item}</p>
        </div>
    )
}
// return (
//     <div className="flex items-center gap-x-4">
//         <Image
//             height={30}
//             width={30}
//             alt={'/features/ai.png'}
//             src={'/features/ai.png'} />
//         <p className="font-normal text-base">{item}</p>
//     </div>
// )