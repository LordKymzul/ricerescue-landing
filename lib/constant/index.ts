import { AcceleratorCardProps } from "@/components/card/accelerator-card";
import { BusinessCardProps } from "@/components/card/business-card";
import { FundingCardProps } from "@/components/card/funding-card";
import { HardwareBusinessCardProps } from "@/components/card/hardware-business.card";
import { HardwareCardProps } from "@/components/card/hardware-card";
import { MemberCardProps } from "@/components/card/member-card";
import { PartnersCardProps } from "@/components/card/partners-card";
import { SolutionCardProps } from "@/components/card/solution-card";

import exp from "constants";

export const listSolution: SolutionCardProps[] = [
    {
        image: "/features/map.png",
        title: "Hyperlocalization Mapping",
        desc: "Using Google Maps API integration to help farmers by pinpointing IoT devices in different fields"
    },
    {
        image: "/features/analysis.png",
        title: "AI Plant Analysis",
        desc: "Provide insight on nutrient levels to disease detection with a simple snapsohot via mobile device"
    },
    {
        image: "/features/drone.png",
        title: "Drone Automation",
        desc: "Customize flight path wia Google Maps with one-click deploy for automated field surveys"
    },
    {
        image: "/features/ai.png",
        title: "Smart Pest Detection",
        desc: "Detects pest sounds for early intervention with audio classifier AI Model will be run continuously on-site"
    }
]

export const listBusinessCard: BusinessCardProps[] = [
    {
        title: "Funding",
        images: [
            "/business-model/seedinvest.png",
            "/business-model/AgFunder.png",
            "/business-model/Agrobank.png",
            "/business-model/Y-Combinator.png",
            "/business-model/AG-Launch.png"

        ],
        items: [
            "ECF", "P2P", "Accelerator Programme", "Bank Loan"
        ]
    },
    {
        title: "Partnership",
        images: [
            "/business-model/Raspberrypi.png",
            "/business-model/arduino.png",
            "/business-model/NXP.png",
            "/business-model/OpenAI.png",

        ],
        items: [
            "Tech Companies"
        ]
    },
    {
        title: "Revenue",
        images: [
            "/business-model/subscription.png",
            "/business-model/IoT.png"

        ],
        items: [
            "Subcription", "Sales", "Commission"
        ]
    }
];

export const listTeams: MemberCardProps[] = [
    {
        name: "Haziq Hakimi",
        position: "Project Manager",
        image: "/member/haziq.png",
        url: "https://www.linkedin.com/in/haziqhakimimazlisham/",
        about: "The road to success is paved with resilience and innovation. Stay committed to your goals, and let your passion guide you through every challenge."
    },
    {
        name: "Irfan Ghapar",
        position: "Tech Lead",
        image: "/member/Irfan.png",
        url: "https://www.linkedin.com/in/irfan-ghapar-08b897210/",
        about: "Every setback is a setup for a stronger comeback. Embrace failure as a stepping stone to success in your entrepreneurial journey."


    },
    {
        name: "Muhammad Hakim",
        position: "Software Developer",
        image: "/member/hakim.jpg",
        url: "https://www.linkedin.com/in/muhammad-hakim-523748272/",
        about: "Technology may change, but the passion for creating something meaningful stays constant. Keep your passion alive, and let it drive you to new heights.",
    },

    {
        name: "Haris Azhari",
        position: "AI Engineer",
        image: "/member/haris.jpeg",
        url: "https://www.linkedin.com/in/haris-azhari-27aa952a4/",
        about: "Innovation distinguishes between a leader and a follower.Keep pushing the boundaries of technology, and you'll pave the way for the future."
    }
];

export const listHardware: HardwareCardProps[] = [
    {
        title: "Autonomous Drone",
        desc: "Auto flying drone for user for spraying pesticide. Farmers will set the flight path through the apps and drone will follow the exact path. This will increase the farm efficiency by minimizng physical labor",
        specs: ["2 hours of Flight Time", "Max 3kg Pesticide Limit", "5 hours charge time", "4 Propeller"],
        image: "/hardware/DronePic.png",
        price: ""
    },
    {
        title: "PaddyX Pest Detector",
        desc: "Using AI embedded in IoT device to detect the sound of pests that will harm production. It will send alert to farmer through mobile and will notify the species of the pest and the GPS Coordinate it detects it.",
        specs: ["Tensorflow Audio Classifier", "Data transmission through mobile data or radio", "Water resistant", "GPS", "Sensitive Microphone", "Real-time"],
        image: "/hardware/pestDetector.png",
        price: ""
    },
    {
        title: "PaddyX Soil Sensor",
        desc: "Give realtime-data of the current soil condition. Enable farmer to strategically manage soil quality in order to gain maximum crop production",
        specs: ["Soil Moisture", "Soil Temperature", "Real-time data", "GPS", "50 Days Battery Life"],
        image: "/hardware/SoilHumidity&TempSensor.png",
        price: ""
    }
];

export const listFunding: FundingCardProps[] = [
    {
        title: "ECF",
        desc: "Able to raise capital from a broad base of investors including no-accredited individual while handling much of the regulatory compliance",
        image: "/business-model/seedinvest.png",
    },
    {
        title: "Venture Capital",
        desc: "Specialize in agtech investment and have industry-specific expertise, valueable connections in agricultureal sector",
        image: "/business-model/AgFunder.png",
    },
    {
        title: "Bank Loan",
        desc: "Provide agricultural financing for business expansion and scaling. Can provide not only capital, but also valuable insights",
        image: "/business-model/Agrobank.png",
    }
]

export const listAccelerator: AcceleratorCardProps[] = [
    {
        title: 'YC Combinator',
        desc: "Access to world-class mentorship, a powerful network of founders and investors, and significant funding. The program's reputation can dramatically increase our visibility and credibility in the tech industry, potentially accelerating growth and opening doors to future investment opportunities",
        image: '/business-model/Y-Combinator.png'
    },
    {
        title: 'AG Launch',
        desc: "Specializes in agricultural technology, offering tailored mentorship and resources specific to our startup's niche. Their strong connections with farmers and agribusinesses provide invaluable opportunities for real-world testing and validation of our product",
        image: '/business-model/AG-Launch.png'
    }
]

export const listPartners: PartnersCardProps[] = [
    {
        title: 'AI Board Manufacturer',
        image: '/business-model/Raspberrypi.png',
        desc: 'Supply industry leading microcontroller board for PaddyX Pest Detector. Since Pest Detector are embedded with AI Audio Classifier model, it requires high computing power while maintaining low energy usage '
    },
    {
        title: 'Sensor Manufacturer',
        image: '/business-model/arduino.png',
        desc: 'Supply industry leading IoT Sensors for PaddyX Soil Humidity and Temperature. Crucial to deliver accurate and reliable real-time data'
    },
    {
        title: 'Drone Supplier',
        image: '/business-model/NXP.png',
        desc: 'Supply programable drone parts including microcontroller, body frames, and propeller. After assembling, our team will implement autonomous flying features for user customization'
    },
    {
        title: 'LLM',
        image: '/business-model/OpenAI.png',
        desc: 'Provide industry leading LLM model that will be enhanced and fine-tuned with paddy related information. This trained model will then be embedded in mobile apps Rice Rescue'
    }
]

export const listHardwareWithSpecs = [
    {
        title: "Autonomous Drone",
        desc: "Auto flying drone for user for spraying pesticide. Farmers will set the flight path through the apps and drone will follow the exact path. This will increase the farm efficiency by minimizng physical labor",
        specs: ["2 hours of Flight Time", "Max 3kg Pesticide Limit", "5 hours charge time", "4 Propeller"],
        image: "/hardware/DronePic.png"
    },
    {
        title: "PaddyX Pest Detector",
        desc: "Using AI embedded in IoT device to detect the sound of pests that will harm production. It will send alert to farmer through mobile and will notify the species of the pest and the GPS Coordinate it detects it.",
        specs: ["Tensorflow Audio Classifier", "Data transmission through mobile data or radio", "Water resistant", "GPS", "Sensitive Microphone", "Real-time"],
        image: "/hardware/pestDetector.png"
    },
    {
        title: "PaddyX Soil Sensor",
        desc: "Give realtime-data of the current soil condition. Enable farmer to strategically manage soil quality in order to gain maximum crop production",
        specs: ["Soil Moisture", "Soil Temperature", "Real-time data", "GPS", "50 Days Battery Life"],
        image: "/hardware/SoilHumidity&TempSensor.png"
    }
];

export const listHardwareBusiness : HardwareBusinessCardProps[] = [
    {
        title: "Autonomous Drone",
        desc: "Auto flying drone for user for spraying pesticide. Farmers will set the flight path through the apps and drone will follow the exact path. This will increase the farm efficiency by minimizng physical labor",
        image: "/hardware/DronePic.png",
        price: '$1300 USD / unit'
    },
    {
        title: "PaddyX Pest Detector",
        desc: "Using AI embedded in IoT device to detect the sound of pests that will harm production. It will send alert to farmer through mobile and will notify the species of the pest and the GPS Coordinate it detects it.",
        image: "/hardware/pestDetector.png",
        price: '$76.73 USD / unit'
    },
    {
        title: "PaddyX Soil Sensor",
        desc: "Give realtime-data of the current soil condition. Enable farmer to strategically manage soil quality in order to gain maximum crop production",
        image: "/hardware/SoilHumidity&TempSensor.png",
        price: '$11.26 USD / unit'
    }
];
