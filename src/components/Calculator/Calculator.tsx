import ServiceCard from "../Cards/ServiceCard";
import type { CalculatorProps } from "../../types/types";
import { services } from "../../data/services";

export default function Calculator({ selectedServices, setSelectedServices, total }: CalculatorProps ){

    const handleToggle = (type : string) => {
        if(type === "web"){
            setSelectedServices((prev) => ({ 
                ...prev, 
                web: { ...prev.web, selected: !prev.web.selected },
            }))
        } else {
            setSelectedServices((prev) => ({ 
                ...prev, 
                [type]: !prev[type as "seo" | "ads"],
            }))
        }
    };

    const handleWebOptionChange = (options: { languages: number; translations: number }) => {
        setSelectedServices((prev) => ({
            ...prev,
            web: { ...prev.web, ...options },
        }));
    };

    return (
    <div>
        <div className="flex flex-row gap-5">
            {services.map((service) => (
                <ServiceCard
                    key={service.type}
                    {...service}
                    selected={
                    service.type === "web"
                        ? selectedServices.web.selected
                        : selectedServices[service.type as "seo" | "ads"]
                    }
                    onToggle={() => handleToggle(service.type)}
                    webOptions={service.type === "web" ? selectedServices.web : undefined}
                    onOptionsChange={service.type === "web" ? handleWebOptionChange : undefined}
                />
            ))}
        </div>
        <div className="flex justify-end text-4xl font-bold -mt-32">Budgeted price: {total} €</div>
    </div>
  );
};