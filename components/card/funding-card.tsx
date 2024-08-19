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
        <div className="border hover:border-green-600 hover:bg-primary hover:text-white rounded-xl hover:scale-105 transition-all duration-500 ease-in-out shadow-sm hover:shadow-xl">
            <div className="flex items-center gap-x-6 p-4">
                <Image
                    height={220}
                    width={220}
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