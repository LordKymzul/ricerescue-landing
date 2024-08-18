'use client'
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation";
import { ThemeButton } from "./button/theme-button";
import { MobileMenuButton } from "./button/mobile-menu-button";





interface BuildToggleProfileProps {
    handleSignOut: () => void;
    email: string;
    url: string
}


export const navigationItems = [

    {
        name: "About",
        href: "/about"
    },

    {
        name: "Portfolio",
        href: "/portfolio"
    },
    {
        name: "Contact",
        href: "/contact"
    },
]

export function HeadNavbar() {
    //const isMobile = useMediaQuery("(max-width: 639px)");

    const pathname = usePathname();
    //max-w-7xl mx-auto
    return (
        <nav className="mx-4 md:container px-4 md:px-8 py-5 grid grid-cols-12">
            <div className="col-span-6 flex md:col-span-3">
                <Link href={"/"}>
                    <h1 className="text-3xl font-semibold">
                        Rice <span className="text-green-500">Rescue</span>
                    </h1>
                </Link>
            </div>
            {/* 
            <div className="hidden sm:flex justify-center items-center col-span-6">
                <NavigationMenu>
                    <NavigationMenuList>
                        {
                            navigationItems.map((eachItem, index) => {
                                return (
                                    <NavigationMenuItem key={index}>
                                        <Link
                                            href={eachItem.href}
                                            legacyBehavior
                                            passHref>
                                            <NavigationMenuLink
                                                active={pathname === eachItem.href}
                                                className={navigationMenuTriggerStyle()}>
                                                {eachItem.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                )
                            })
                        }
                    </NavigationMenuList>
                </NavigationMenu>
            </div>


            <div className="flex items-center justify-end md:col-span-3 col-span-6">
                <ThemeButton />
                <div className="sm:hidden ml-2">
                    <MobileMenuButton />
                </div>
            </div> */}
        </nav>
    )
}







