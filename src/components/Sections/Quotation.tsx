import type { QuotationProps } from "../../types/types";
import BudgetCard from "../Cards/BudgetCard";

export default function Quotation({ budgets }: QuotationProps){
    return(
        <section id="budgets" className="relative min-h-screen py-16">
            <svg width="100%" height="2">
            <line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="24 24"
            />
            </svg>
            <h2 className="absolute left-1/2 -translate-x-1/2 top-[455px] z-0 text-7xl font-bold">Ongoing budgets</h2>
            <div className="py-32">
                {budgets.map((budget, index) => (
                    <div key={index} className="flex flex-col justify-center w-full h-[300px] mb-8 rounded-2xl p-12 backdrop-blur-sm bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]">
                        <BudgetCard 
                            budget={budget}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};