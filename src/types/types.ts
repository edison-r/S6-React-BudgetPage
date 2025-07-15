export type ServiceType = "seo" | "ads" | "web";

export type ServiceCardData = {
    type: ServiceType;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    price: number;
};

export type SelectedServices = {
    seo: boolean;
    ads: boolean;
    web: {
        selected: boolean;
        languages: number;
        translations: number;
    };
};

export type CalculatorProps = {
    selectedServices: SelectedServices;
    setSelectedServices: React.Dispatch<React.SetStateAction<SelectedServices>>;
    total: number;
};

export type BudgetFormData = {
  name: string;
  phone: string;
  email: string;
};
