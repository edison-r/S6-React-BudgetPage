import type { ServiceCardData } from "../types/types";

export const services: ServiceCardData[] = [
    {
        type: "seo",
        title: "SEO",
        tagline: "Be seen. Or be invisible.",
        description: "We make Google love your site.",
        features: [
            "Boost your position on Google",
            "Brings organic traffic",
            "Improves page speed and structure",
            "Helps users (and bots) find what matters"
        ],
        price: 300,
    },
    {
        type: "ads",
        title: "ADS",
        tagline: "Stop scrolling. Start clicking.",
        description: "Smart ads. No bullshit.",
        features: [
            "Quick visibility with measurable results",
            "Target exactly who you want",
            "Optimize in real time",
            "Scales with your budget"
        ],
        price: 400,
    },
    {
        type: "web",
        title: "WEB",
        tagline: "Websites that actually work.",
        description: "Fast. Responsive. Brutal.",
        features: [
            "Fully responsive (mobile & desktop)",
            "Fast load times, no bloated code",
            "Built with modern, scalable tech",
            "Tailored to your brand - no templates"
        ],
        price: 500,
    },
];