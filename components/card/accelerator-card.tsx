import Image from "next/image"

export interface AcceleratorCardProps {
    title: string;
    desc: string;
    image: string;
}

export function AcceleratorCard({title, desc, image}: AcceleratorCardProps) {
    return(
        <div className="p-5 flex flex-col w-full items-center hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="relative w-full h-0 pb-[20.25%]">
                <Image 
                    src={image} 
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            <div className="flex flex-col gap-2 text-center">
                <p className="font-bold text-xl md:text-2xl">
                    {title}
                </p>
                <p className="font-light text-sm max-w-[600px] md:text-base">
                    {desc}
                </p>
            </div>
        </div>
    )
}