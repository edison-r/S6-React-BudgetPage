import { useState } from "react";
import QuotationForm from "../Cards/QuotationForm";
import Calculator from "../../components/Calculator/Calculator";
import { services } from "../../data/services";
import type { SelectedServices, BudgetFormData } from "../../types/types";

export default function Services() {
    const [budgets, setBudgets] = useState<BudgetFormData[]>([]);

    const [selectedServices, setSelectedServices] = useState<SelectedServices>({
        seo: false,
        ads: false,
        web: {
            selected: false,
            languages: 0,
            translations: 0,
        },
    });

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
    const total = calculateTotal();

    return (
        <>
            <section id="services" className="relative min-h-screen py-16">
                <h1 className="absolute left-1/2 -translate-x-1/2 z-0 text-10xl font-bold">Services</h1>
                <Calculator 
                    selectedServices={selectedServices}
                    setSelectedServices={setSelectedServices}
                    total={total}
                />
            </section>

            <section id="quotation" className="relative pb-16 flex flex-col">
                <h1 className="absolute right-[-255px] z-0 text-8xl font-bold">Request quotation</h1>
                <div className="mt-[60px]">
                    <QuotationForm 
                        onSubmitBudget={(data) => {
                            const newBudget = {
                                ...data,
                                services: selectedServices,
                                total,
                            };
                            setBudgets([...budgets, newBudget]);
                            console.log("✅ Nuevo presupuesto generado:", newBudget);
                            console.log("📋 Lista completa de presupuestos:", [...budgets, newBudget]);
                        }}
                    />
                </div>
            </section>
        </>
    );
}