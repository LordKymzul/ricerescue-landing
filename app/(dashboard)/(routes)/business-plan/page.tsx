import BuildTitleSection from '@/components/BuildTitleSection';
import React from 'react'
import { listFunding, listAccelerator, listPartners, listHardware, listHardwareBusiness,} from '@/lib/constant';
import { FundingCard } from '@/components/card/funding-card';
import Image from 'next/image';
import { AcceleratorCard } from '@/components/card/accelerator-card';
import { PartnerCard } from '@/components/card/partners-card';
import { PricingSubscription } from '@/components/component/pricing-subscription';
import { HardwareBusinessCardProps, HardwareCard } from '@/components/card/hardware-business.card';

type Props = {}

const BusinessPlan = (props: Props) => {
    return (
        <>
        <BusinessHero />
        <div className='grid grid-cols-1 items-start p-2 w-full pb-0'>
            <Funding />
            <AcceleratorProgramme />
            <StrategicPartners />
            <RevenueStream />
            <PricingDevice />
        </div>     
        
        </>

    )
}

export default BusinessPlan;

function BusinessHero() {
    return(
        <section className="relative h-[600px]">
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
                <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl">
                Business Plan
                </h1>
                <h2 className="mt-2 mx-auto max-w-[700px] text-base md:text-lg lg:text-xl">
                Here is our business strategy to sustain our business in order to keep giving impact to rice agricultural industry
                </h2>
            </div>
    </section>
    )
}

function Funding() {
    return (
        <section className='flex flex-col w-full pt-12 mb-10 mt-10 md:pt-10 container'>
            <BuildTitleSection
                title='Funding'
                desc='Cultivating growth by partnering with specialized AgTech funders'
                badges={['']} />

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-start mt-12 gap-6">
                {listFunding.slice(0, 2).map((funding, index) => (
                    <FundingCard
                        key={index}
                        image={funding.image}
                        title={funding.title}
                        desc={funding.desc}
                    />
                ))}
                <div className="lg:col-span-2 flex justify-center mt-2">
                    <div className="w-full lg:w-1/2">
                        <FundingCard
                            image={listFunding[2].image}
                            title={listFunding[2].title}
                            desc={listFunding[2].desc}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

function AcceleratorProgramme() {
    return (
        <section className='pb-20 mt-10 flex flex-col w-full pt-12 md:pt-15 bg-gray-100/50'>
            <BuildTitleSection
                title='Accelerator Programme'
                desc='Boosting our growth to empower more farmers'
                badges={['']} />

            <div className="grid  grid-cols-1 md:grid-cols-2 w-full gap-6 mt-6 items-start">
                {
                    listAccelerator.map((accelerator, index) => {
                        return (
                            <AcceleratorCard
                                key={index}
                                title={accelerator.title}
                                desc={accelerator.desc}
                                image={accelerator.image} />
                        )
                    })
                }
            </div>
        </section>
    )
}

function StrategicPartners() {
    return (
      <section className="pb-20 mt-10 flex flex-col w-full pt-12 md:pt-15 container">
        <BuildTitleSection
          title="Strategic Partners"
          desc="Establish strategic partnership with leading tech company for R&D"
          badges={['']}
        />
  
        <div className="mt-10 mb-10 pt-12 grid grid-cols-4 md:grid-cols-4 w-full gap-6 mt-6 items-start sm:grid-cols-2">
          {listPartners.map((partner, index) => (
            <PartnerCard
              key={index}
              title={partner.title}
              image={partner.image}
              desc={partner.desc}
            />
          ))}
        </div>
      </section>
    );
  }
  
  function RevenueStream() {
    return(
        <section className="relative h-[800px]">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-700/70 to-green-400/70 z-10"></div>

            <Image
                src="/others/paddy-field.png"
                alt="team"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-0"
            />
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
                <div>
                    <h1 className="text-6xl font-bold tracking-tighter sm:text-6xl">
                    Revenue Stream
                    </h1>
                    <h2 className="mt-2 mx-auto max-w-[700px] text-base md:text-lg lg:text-xl">
                    Here is our business strategy to sustain our business in order to keep giving impact to rice agricultural industry
                    </h2>
                </div>

                <PricingSubscription/>

            </div>
    </section>
    )
}

function PricingDevice() {
    return(
        <section>
               <div className="relative h-screen w-full">
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="/business-model/hardware.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>

                    {/* White Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70"></div>

                    {/* Content on Top of the Video */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mt-6 items-start">
                            {
                                listHardwareBusiness.map((hardware, index) => {
                                    return (
                                        <HardwareCard
                                            key={index}
                                            title={hardware.title}
                                            desc={hardware.desc}
                                            image={hardware.image}
                                            price={hardware.price}
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
        </section>
    )
}