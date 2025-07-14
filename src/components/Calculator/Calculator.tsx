import { useState } from "react";
import ServiceCard from "../Cards/ServiceCard";
import { services } from "../../data/services";


export default function Calculator(){
    const [selectedServices, setSelectedServices] = useState({
        seo: false,
        ads: false,
        web: {
            selected: false,
            languages: 0,
            translations: 0,
        },
    });

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

    const calculateTotal = () => {
        let total = 0;
        if(selectedServices.seo) total += 300;
        if(selectedServices.ads) total += 200;
        if(selectedServices.web.selected) {
            total += 500;
            total += selectedServices.web.languages * 30;
            total += selectedServices.web.translations * 30;
        }
        return total;
    }

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
        <div className="text-white text-5xl font-bold mt-8">Total: {calculateTotal()} €</div>
    </div>
  );
};