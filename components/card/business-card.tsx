import { Item } from "@radix-ui/react-dropdown-menu";
import { Check, CircleCheckBig } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import { Badge } from "../ui/badge";




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
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 hover:rounded-xl">


            <div className="flex flex-col w-full p-8 border rounded-xl h-[280px] transition-transform duration-500  group-hover:scale-75 group-hover:blur-sm">
                <div className="flex justify-center">
                    <h1 className="font-extrabold text-2xl md:text-3xl tracking-tighter">
                        {title}
                    </h1>
                </div>

                <div className="flex  flex-wrap items-center gap-10 mt-6 justify-center ">
                    {
                        images.map((image, index) => {
                            return (
                                <Image
                                    key={index}
                                    height={80}
                                    width={80}
                                    alt={index + image}
                                    src={image}
                                    style={{
                                        objectFit: "cover"
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>


            <div className="absolute inset-0 bg-gradient-to-b x group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="grid grid-cols-1 gap-4 mt-6">
                    {
                        items.map((item, index) => {
                            return (
                                <BuildBusinessItem item={item} key={index} />
                            )
                        })
                    }
                </div>
                <Link href={'/business-plan'} >
                    <Badge
                        variant={"default"}
                        className="mt-6 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                        See Detail
                    </Badge>
                </Link>

            </div>
        </div>
    )
}




function BuildBusinessItem({ item }: {
    item: string
}) {
    return (
        <div className="flex items-center gap-x-4 text-white">
            <CircleCheckBig />
            <p className="font-normal text-base">{item}</p>
        </div>
    )
}


{/* <div className="hover:bg-primary hover:text-white rounded-xl hover:scale-105 transition-all duration-500 ease-in-out">
    <div className="flex flex-col w-full p-8 border rounded-xl h-[340px]">

        <div className="flex justify-center">
            <h1 className="font-extrabold text-2xl md:text-3xl tracking-tighter">
                {title}
            </h1>
        </div>

        <div className="flex items-center gap-10 mt-6 justify-center flex-wrap">
            {
                images.map((image, index) => {
                    return (
                        <Image
                            key={index}
                            height={70}
                            width={70}
                            alt={index + image}
                            src={image}
                            style={{
                                objectFit: "cover",

                            }}
                        />
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
</div> */}