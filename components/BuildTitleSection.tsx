import React from "react";
import { Badge } from "./ui/badge";

type Props = {}

const BuildTitleSection = ({title, desc, badges}: { 
    title: string;
    desc: string;
    badges: string[];}) => {
    return(
        <div className="flex w-full justify-center">
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">{title}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default BuildTitleSection;