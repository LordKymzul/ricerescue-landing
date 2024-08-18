import Image from "next/image"
import { Badge } from "../ui/badge";
import Link from "next/link";


export interface MemberCardProps {
    position: string;
    name: string;
    about: string;
    image: string;
    url: string;
}

export function MemberCard({
    name,
    image,
    position,
    about,
    url
}: MemberCardProps) {
    return (
        <div className="flex flex-col w-full items-center ">
            <Link href={url} target="_blank">
                <Image
                    height={300}
                    width={300}
                    alt={name}
                    className="h-[400px] rounded-xl  hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out"
                    src={image} />
            </Link>

            <div className="flex flex-col mt-4 items-center gap-2">
                <Badge
                    variant={"default"}>
                    {position}
                </Badge>

                <p className="font-semibold text-base md:text-xl">
                    {name}
                </p>
            </div>
        </div>
    )
}


