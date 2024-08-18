interface MainHeaderProps {
    title: string
}

export function MainHeader({ title }: MainHeaderProps) {
    return (
        <div className="flex flex-col gap-1 ">
            <h1 className="font-bold xs:text-md md:text-2xl">{title}</h1>
            <div className="w-10 h-[5px] bg-primary rounded-full"></div>
        </div>
    )
}