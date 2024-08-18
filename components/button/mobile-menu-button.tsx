import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigationItems } from "../head-nav"


export function MobileMenuButton() {

    const location = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                    <Menu className="h-4 w-4" />
                </Button>
            </SheetTrigger>

            <SheetContent>
                <div className="mt-5 flex px-2 space-y-1 flex-col">
                    {
                        navigationItems.map((eachItem, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={eachItem.href}
                                    className={cn(location === eachItem.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75',
                                        "group flex items-center px-2 py-2 text-md rounded-md font-semibold"
                                    )}>
                                    {eachItem.name}
                                </Link>
                            )
                        })
                    }
                </div>

                <SheetFooter className="mt-5">
                    <SheetClose asChild>
                        <Button type="submit">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}