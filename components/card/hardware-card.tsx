import Image from "next/image"


export interface HardwareCardProps {
    title: string;
    desc: string;
    image: string;
}

export function HardwareCard({
    title,
    desc,
    image
}: HardwareCardProps) {
    return (
        <div className="flex flex-col w-full items-center">
            <Image
                height={1000}
                width={1000}
                alt={title + image}
                style={{
                    objectFit: "cover",
                    height: 300
                }}
                src={image}
                className="hover:scale-105 transition-all duration-500 ease-in-out"
            />

            <div className="flex flex-col gap-2 text-center mt-3">
                <p className="font-bold text-xl md:text-2xl">
                    {title}
                </p>

                <p className="font-light text-sm md:text-base">
                    {desc}
                </p>
            </div>
        </div>
    )
}