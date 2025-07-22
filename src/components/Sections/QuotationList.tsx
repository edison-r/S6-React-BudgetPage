import { useState, useEffect } from "react";
import type { QuotationProps } from "../../types/types";
import BudgetCard from "../Cards/BudgetCard";
import BudgetSortControls from "../SharedComponents/BudgetSortControl";

export default function QuotationList({ budgets }: QuotationProps){
    const [sortedBudgets, setSortedBudgets] = useState(budgets);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setSortedBudgets(budgets);
    }, [budgets]);

    const filteredBudgets = sortedBudgets.filter((budget) =>
        budget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleSortByName = () => {
        const sorted = [...sortedBudgets].sort((a, b) =>
        a.name.localeCompare(b.name)
        );
        setSortedBudgets(sorted);
    };

    const handleSortByTotal = () => {
        const sorted = [...(sortedBudgets as any[])].sort((a, b) => b.total - a.total);
        setSortedBudgets(sorted);
    };

    const handleReset = () => {
        setSortedBudgets(budgets);
    }

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
            <h2 className="absolute left-1/3 -translate-x-1/2 top-[455px] z-0 text-8xl font-bold">Ongoing budgets</h2>
            <div className="flex flex-row font-[DotGothic16] items-center justify-center gap-6 my-8">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="absolute top-[150px] px-4 py-1 w-[300px] bg-transparent text-white  placeholder-white/50 border-b border-white focus:outline-none hover:border-red-500"
                />
                <BudgetSortControls 
                    onSortByName={handleSortByName}
                    onSortByTotal={handleSortByTotal}
                    onReset={handleReset}
                />
            </div>
            <div className="py-16">
                {filteredBudgets.map((budget, index) => (
                    <div key={index} className="flex flex-col justify-center w-full h-[300px] mb-8 rounded-2xl p-12 backdrop-blur-sm bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]">
                        <BudgetCard budget={budget} />
                    </div>
                ))}
            </div>
        </section>
    );
};