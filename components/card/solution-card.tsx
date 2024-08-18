import Image from "next/image"


export interface SolutionCardProps {
    image: string;
    title: string;
    desc: string;
}

export function SolutionCard({
    image,
    title,
    desc
}: SolutionCardProps) {
    return (
        <div className="hover:bg-primary hover:text-white rounded-xl hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-x-6 p-4">
                <Image
                    height={70}
                    width={70}
                    alt={title}
                    src={image} />
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