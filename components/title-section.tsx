import { Badge } from "./ui/badge";

export function BuildTitleSection({ title, desc, badges }: {
    title: string;
    desc: string;
    badges: string[];
}) {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex items-end gap-x-2">
                    {
                        badges.map((badge, index) => {
                            return (
                                <Badge
                                    key={index}
                                    variant={"outline"}>
                                    {badge}
                                </Badge>
                            )
                        })
                    }
                </div>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">{title}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                    {desc}
                </p>
            </div>
        </div>
    )
} 