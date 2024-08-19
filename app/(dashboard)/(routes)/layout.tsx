import { HeadNavbar } from "@/components/head-nav";
import Head from "next/head";
import { ReactNode } from "react";


export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-full">
            <div className="h-[80px] inset-y-0 w-full z-50">
                <HeadNavbar />
            </div>
            <main className="h-full mx-4">
                {children}
            </main>
        </div>
    )
}
