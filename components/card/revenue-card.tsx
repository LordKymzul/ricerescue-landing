import Image from "next/image";

export interface RevenueCardProps {
    title: string;
    desc: string;
    image: string;
}

export function RevenueCard({
    title,
    desc,
    image,
}: RevenueCardProps) {
    return (
        <div className="bg-white/40 text-gray-800 rounded-xl hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="relative w-full h-0 pb-[30.25%]">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>
            <div className="flex items-center gap-x-6 p-4">
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl md:text-2xl">
                        {title}
                    </p>
                    <p className="font-light text-xs md:text-base">
                        {desc}
                    </p>
                </div>
            </div>
        </div>

    )
}