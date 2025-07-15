import BudgetCard from "../Cards/BudgetCard";

export default function Quotation() {
    return (
        <section id="quotation" className="relative min-h-screen flex flex-col">
            <h1 className="absolute right-[-255px] z-0 text-8xl font-bold">Request quotation</h1>
            <div className="mt-[60px]">
                <BudgetCard />
            </div>
        </section>
    );
}