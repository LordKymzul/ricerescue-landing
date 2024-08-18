import BuildTitleSection from '@/components/BuildTitleSection';
import React from 'react'
import { listFunding } from '@/lib/constant';
import { FundingCard } from '@/components/card/funding-card';
import Image from 'next/image';


type Props = {}

const BusinessPlan = (props: Props) => {
    return (
        <div className='grid grid-cols-1 items-start p-2 w-full pb-0'>
            <BusinessHero />
            <Funding />
            <AcceleratorProgramme />
        </div>
    )
}

export default BusinessPlan;

function Funding() {
    return(
        <section className='flex flex-col w-full pt-12 md:pt-24'>
            <BuildTitleSection
                title='Funding' 
                desc='Cultivating growth by partnering with specialized AgTech funders' 
                badges={['']} />

            <div className='grid grid-cols-2 md:grid-cols-2 w-full items-start mt-12 gap-6'>
                {
                    listFunding.map((funding, index) => {
                        return (
                            <FundingCard 
                                key={index}
                                image={funding.image} 
                                title={funding.title}
                                desc={funding.desc} />
                        )
                    })
                }
            </div>
        </section>
    )
}

function BusinessHero() {
    return(
        <section className="relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-700/70 to-green-400/70 z-10"></div>

            <Image
                src="/others/team.png"
                alt="team"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
                Business Plan
                </h1>
                <h2 className="mt-2 mx-auto max-w-[700px] text-base md:text-lg lg:text-xl">
                Here is our business strategy to sustain our business in order to keep giving impact to rice agricultural industry
                </h2>
            </div>
    </section>
    )
}

function AcceleratorProgramme() {
    return(
        <section>
            <div>test</div>
        </section>
    )
}