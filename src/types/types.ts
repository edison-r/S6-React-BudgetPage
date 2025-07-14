export type ServiceType = "seo" | "ads" | "web";

export type ServiceCardData = {
    type: ServiceType;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    price: number;
};
