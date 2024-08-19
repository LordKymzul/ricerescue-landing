

import { BusinessCard } from "@/components/card/business-card"
import { FundingCard } from "@/components/card/funding-card"
import { HardwareCard } from "@/components/card/hardware-card"
import { MemberCard } from "@/components/card/member-card"
import { SolutionCard } from "@/components/card/solution-card"
import { BuildTitleSection } from "@/components/title-section"
import { Badge } from "@/components/ui/badge"
import { useIsVisible } from "@/hooks/use-isvisible"
import {
    listBusinessCard,
    listHardware,
    listSolution,
    listTeams
} from "@/lib/constant"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"



export default function AboutPage() {

    return (
        <div className="grid grid-cols-1 items-start p-2 w-full pb-10">
            <BuildProfileInformation />
            <BuildSolutionFeatures />
            <BuildBusinesses />
            <BuildSoftwareArchitecture />
            <BuildHardware />
            <BuildTeamMembers />
            <section className="flex flex-col w-full pt-12 md:pt-24">
                <BuildTitleSection
                    title="Funding"
                    desc="Our team of skilled professionals is dedicated to delivering exceptional IT solutions that help our clients succeed."
                    badges={
                        ["Our Team", "ECF", " Venture Capital"]
                    } />
                <div className="grid grid-cols-1 md:grid-cols-3 w-full items-center gap-6 mt-6">

                    {
                        listHardware.map((funding, index) => {
                            return (
                                <FundingCard
                                    key={index}
                                    image={funding.image}
                                    title={funding.title}
                                    desc={funding.desc}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}


function BuildProfileInformation() {
    return (
        <section className="w-full pt-6  md:pt-12 ">
            <div className="container space-y-10 xl:space-y-16">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Rice Rescue
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            We are a leading IT solutions provider, delivering innovative and reliable services to businesses of
                            all sizes.
                        </p>
                    </div>
                </div>
                <Image
                    src={'/ricerescueabout.png'}
                    width={1200}
                    height={400}
                    alt="hero"
                    className="mx-auto aspect-[2/1] overflow-hidden  rounded-xl object-cover object-center" />


            </div>
        </section>
    )
}

function BuildSolutionFeatures() {
    return (
        <section className="flex flex-col w-full pt-12 md:pt-24">

            <BuildTitleSection
                title="Unique Value Proposition"
                desc="We leverage our unique solution features to deliver unparalleled value, setting us apart from the competition and ensuring exceptional outcomes for our clients."
                badges={
                    ["Solution Features"]
                } />


            <div className="grid grid-cols-1 md:grid-cols-2 w-full items-start gap-6 mt-12 ">

                {
                    listSolution.map((solution, index) => {
                        return (
                            <SolutionCard
                                key={index}
                                image={solution.image}
                                title={solution.title}
                                desc={solution.desc} />
                        )
                    })
                }
            </div>


        </section>
    )
}


function BuildBusinesses() {
    return (
        <section className="flex flex-col w-full pt-12 md:pt-24">
            <BuildTitleSection
                title="Business Values"
                desc="We offer a wide range of IT Services to help the financial records."
                badges={
                    ["SaaS", "B2B"]
                } />
            <div className="grid grid-cols-1 md:grid-cols-3 w-full items-start mt-12 gap-6">
                {
                    listBusinessCard.map((business, index) => {
                        return (
                            <BusinessCard
                                title={business.title}
                                items={business.items}
                                images={business.images}
                                key={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

function BuildTeamMembers() {
    return (
        <section className="flex flex-col w-full pt-12 md:pt-24">
            <BuildTitleSection
                title="Meet the Experts Behind Rice Rescue"
                desc="Our team of skilled professionals is dedicated to delivering exceptional IT solutions that help our clients succeed."
                badges={
                    ["Our Team"]
                } />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full items-start gap-6 mt-6">

                {
                    listTeams.map((team, index) => {
                        return (
                            <MemberCard
                                key={index}
                                image={team.image}
                                name={team.name}
                                position={team.position}
                                url={team.url}
                                about={team.about} />
                        )
                    })
                }
            </div>
        </section>
    )
}

function BuildSoftwareArchitecture() {
    return (
        <section className="flex flex-col w-full pt-12 md:pt-24 items-center">
            <BuildTitleSection
                title="Software Architecture"
                desc="Utilize a widely recognized and industry-standard technology stack to ensure robust, scalable, and efficient development."
                badges={["Our Software Architecture"]} />

            <Image
                height={300}
                width={1200}
                alt="Software Architecture"
                style={{
                    objectFit: "cover"
                }}
                src={'/software-architecture.png'}
                className="mt-6" />
        </section>
    )
}

function BuildHardware() {
    return (
        <section className="flex flex-col w-full pt-12 md:pt-24 items-center">
            <BuildTitleSection
                title="Hardware Configuration"
                desc="Our hardware configuration leverages advanced technologies such as drones, IoT devices, and sensors to provide innovative and efficient solutions tailored to meet specific industry needs."
                badges={["Our Hardware Configuration"]} />

            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mt-6 items-start">
                {
                    listHardware.map((hardware, index) => {
                        return (
                            <HardwareCard
                                key={index}
                                title={hardware.title}
                                desc={hardware.desc}
                                image={hardware.image} />
                        )
                    })
                }

            </div>


        </section>
    )
}





{/* <img
    src="/profileportfolio.png"
    alt="Profile Picture"
    className="rounded-lg  h-[150px]  lg:h-[250px] w-[150px] lg:w-[250px] object-cover "
/> */}


