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
        <div className="rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 hover:rounded-xl">

            <Link href={url} target="_blank">
                <Image
                    height={300}
                    width={300}
                    alt={name}
                    className="h-[400px] rounded-xl  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={image} />
            </Link>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{about}</p>

                <Link href={url} target="_blank">
                    <Badge
                        variant={"default"}
                        className="mt-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                        {position}
                    </Badge>
                </Link>


            </div>
        </div>
    )
}


