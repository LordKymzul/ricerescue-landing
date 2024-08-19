"use client"
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";

export interface HardwareBusinessCardProps {
    title: string;
    desc: string;
    image: string;
    price: string;
}

export function HardwareCard({
    title,
    desc,
    image,
    price,
}: HardwareBusinessCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="p-5 flex flex-col w-full items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                height={1000}
                width={1000}
                alt={title + image}
                style={{
                    objectFit: "cover",
                    height: 300
                }}
                src={image}
                className="p-10 hover:scale-105 transition-all duration-500 ease-in-out"
            />
            <div className="mt-2 text-sm flex items-end gap-x-2">
                <Badge
                    variant="outline"
                    className={`transition-all duration-500 ease-in-out ${
                        isHovered
                            ? "bg-green-500 text-white border-green-500 scale-125 shadow-lg shadow-green-400"
                            : "border-gray-300"
                    }`}
                >
                    {price}
                </Badge>
            </div>

            <div className="flex flex-col gap-2 text-center mt-3">
                <p className="font-bold text-xl md:text-2xl">
                    {title}
                </p>
                <p className="font-light text-sm md:text-base">
                    {desc}
                </p>
            </div>
        </div>
    );
}
