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
        pages: number;
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

export type CounterProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

export type QuotationProps = {
    budgets: BudgetFormData[];
    //setBudgets: React.Dispatch<React.SetStateAction<BudgetFormData>>;
}

export type ModalCardProps = {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    label: string;
};