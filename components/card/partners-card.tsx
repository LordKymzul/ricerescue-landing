'use client'
import Image from 'next/image'
import { useState } from 'react';

export interface PartnersCardProps {
    title: string;
    image: string;
    desc: string
}

export function PartnerCard({ title, image, desc }: PartnersCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`p-3 relative flex flex-col items-center w-full cursor-pointer transition-transform duration-500 ease-in-out transform rounded-xl hover:scale-105
                ${hovered ? 'border hover:border-2 hover:border-green-300' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ height: '275px' }}
        >
            {/* Logo */}
            <div className="relative w-full h-0 pb-[30.25%]">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            {/* Hover Card */}
            {hovered && (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-lg p-4 shadow-lg transition-opacity duration-1000">
                    <h1 className="text-lg font-semibold text-center w-full">{title}</h1>
                    <p className="mt-2  text-gray-700 text-center w-full">{desc}</p>
                </div>
            )}
        </div>
    );
}