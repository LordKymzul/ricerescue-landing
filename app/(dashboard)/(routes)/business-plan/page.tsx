import BuildTitleSection from '@/components/BuildTitleSection';
import React from 'react'

type Props = {}

const BusinessPlan = (props: Props) => {
    return (
        <div className='grid grid-cols-1 items-start p-2 w-full pb-10'>
            <BusinessHero />
            <BusinessModel />
        </div>
    )
}

export default BusinessPlan;

function BusinessModel() {
    return(
        <section>
            <BuildTitleSection
                title='bg-' 
                desc='Here is our business strategy to sustain our business in order to keep giving impact to rice agricultural industry' 
                badges={['']} />
                    <div>Test</div>
        </section>

    )
}

function BusinessHero() {
    return(
        <section className="bg-[url('')]">
            <div className='mt-6 mb-10'>
                <h1 className='text-7xl font-bold tracking-tighter sm:text-5xl md:text-7xl text-center'>Business Plan</h1>
            </div>
        </section>
    )
}