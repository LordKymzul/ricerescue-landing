import { BusinessCardProps } from "@/components/card/business-card";
import { FundingCardProps } from "@/components/card/funding-card";
import { HardwareCardProps } from "@/components/card/hardware-card";
import { MemberCardProps } from "@/components/card/member-card";
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
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png"
        ],
        items: [
            "ECF", "P2P", "Goverment", "Bank Loan"
        ]
    },
    {
        title: "Partnership",
        images: [
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png",
            "/features/ai.png"
        ],
        items: [
            "Companies", "Goverments"
        ]
    },
    {
        title: "Revenue",
        images: [
            "/features/ai.png",
            "/features/ai.png",

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
        image: "https://firebasestorage.googleapis.com/v0/b/bee-rescue-9c61f.appspot.com/o/test%2F5A9E6057-5E3A-4739-BAD4-D3E2F6C8390D_1_105_c.jpeg?alt=media&token=c75c63fb-f754-4ff8-a518-b46ed4fec0e5",
        url: "https://www.linkedin.com/in/haziqhakimimazlisham/",
        about: "The road to success is paved with resilience and innovation. Stay committed to your goals, and let your passion guide you through every challenge."
    },
    {
        name: "Irfan Ghapar",
        position: "Tech Lead",
        image: "https://firebasestorage.googleapis.com/v0/b/bee-rescue-9c61f.appspot.com/o/test%2Firfandp.jpeg?alt=media&token=56e72581-3032-4557-89a6-6be4146c3b4f",
        url: "https://www.linkedin.com/in/irfan-ghapar-08b897210/",
        about: "Every setback is a setup for a stronger comeback. Embrace failure as a stepping stone to success in your entrepreneurial journey."


    },
    {
        name: "Muhammad Hakim",
        position: "Software Developer",
        image: "https://firebasestorage.googleapis.com/v0/b/bee-rescue-9c61f.appspot.com/o/test%2F12CC0BF1-678B-4523-9A8C-178DDDFC17B4_1_105_c.jpeg?alt=media&token=ec00d75d-d3e9-46c5-b669-febcd4eaeab9",
        url: "https://www.linkedin.com/in/muhammad-hakim-523748272/",
        about: "Technology may change, but the passion for creating something meaningful stays constant. Keep your passion alive, and let it drive you to new heights.",
    },

    {
        name: "Haris Azhari",
        position: "AI Engineer",
        image: "https://firebasestorage.googleapis.com/v0/b/bee-rescue-9c61f.appspot.com/o/test%2FCB6832CB-689F-41DB-B4B0-5EC053161178_1_105_c.jpeg?alt=media&token=292c175f-901f-4e88-9f19-62f4d0a55034",
        url: "https://www.linkedin.com/in/haris-azhari-27aa952a4/",
        about: "Innovation distinguishes between a leader and a follower.Keep pushing the boundaries of technology, and you'll pave the way for the future."
    }
];

export const listHardware: HardwareCardProps[] = [
    {
        title: "Industry Drone",
        desc: "We tailor our mobile apps to meet your specific business needs, ensuring they align with your brand and goals.",
        image: "/hardware/DronePic.png"
    },
    {
        title: "Rasberry PI",
        desc: "We tailor our mobile apps to meet your specific business needs, ensuring they align with your brand and goals.",
        image: "/hardware/pestDetector.png"
    },
    {
        title: "IOT Device",
        desc: "We tailor our mobile apps to meet your specific business needs, ensuring they align with your brand and goals.",
        image: "/hardware/SoilHumidity&TempSensor.png"
    }
];

export const listFunding: FundingCardProps[] = [
    {
        title: "Industry Drone",
        desc: "We tailor our mobile apps to meet your specific business needs, ensuring they align with your brand and goals.",
        image: "/hardware/DronePic.png"
    },
    {
        title: "Rasberry PI",
        desc: "We tailor our mobile apps to meet your specific business needs, ensuring they align with your brand and goals.",
        image: "/hardware/pestDetector.png"
    },
    {
        title: "IOT Device",
        desc: "We tailor our mobile apps to meet your specific business needs, ensuring they align with your brand and goals.",
        image: "/hardware/SoilHumidity&TempSensor.png"
    }
];

