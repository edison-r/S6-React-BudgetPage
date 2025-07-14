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
        const ads = services.find((s) => s.type === "ads");
        const seo = services.find((s) => s.type === "seo");
        const web = services.find((s) => s.type === "web");

        if(selectedServices.ads && ads) total += ads.price;
        if(selectedServices.seo && seo) total += seo.price;
        if(selectedServices.web.selected && web) {
            total += web.price;
            total += selectedServices.web.languages * 50;
            total += selectedServices.web.translations * 50;
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
        <div className="flex justify-end text-4xl font-bold -mt-32">Total: {calculateTotal()} €</div>
    </div>
  );
};