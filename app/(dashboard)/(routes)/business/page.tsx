import React from 'react'
import { listFunding } from '@/lib/constant';
import { FundingCard } from '@/components/card/funding-card';
import { BuildTitleSection } from '@/components/title-section';


type Props = {}

const BusinessPlan = (props: Props) => {
    return (
        <div className='grid grid-cols-1 items-start p-2 w-full pb-10'>
            <BusinessHero />
            <Funding />
            <AcceleratorProgramme />
        </div>
    )
}

export default BusinessPlan;

function Funding() {
    return (
        <section className='flex flex-col w-full pt-12 md:pt-24'>
            <BuildTitleSection
                title='Funding'
                desc='Here is our business strategy to sustain our business in order to keep giving impact to rice agricultural industry'
                badges={['ECF', 'Venture Capital']} />

            <div className='grid grid-cols-2 md:grid-cols-4 w-full items-start mt-12 gap-6'>
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
    return (
        <section className="bg-[url('')]">
            <div className='mt-6 mb-10'>
                <h1 className='text-7xl font-bold tracking-tighter sm:text-5xl md:text-7xl text-center'>Business Plan</h1>
                <h2 className='text-base font-medium tracking-tighter sm:text-base md:text-base text-center text-gray-500'>Here is our business strategy to sustain our business in order to keep giving impact to rice agricultural industry</h2>
            </div>
        </section>
    )
}

function AcceleratorProgramme() {
    return (
        <section>
            <div>test</div>
        </section>
    )
}