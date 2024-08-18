import Image from "next/image"


export interface FundingCardProps {
    image: string;
    title: string;
    desc: string;
}

export function FundingCard({
    image,
    title,
    desc
}: FundingCardProps) {
    return (
        <div className="border hover:border-gradient-to-r from-lime-400 to-green-300 hover:bg-primary hover:text-white rounded-xl hover:scale-105 transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-x-6 p-4">
                <Image
                    height={200}
                    width={200}
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