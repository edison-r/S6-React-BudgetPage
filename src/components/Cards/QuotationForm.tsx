import "./QuotationForm.css";
import type { BudgetFormData } from "../../types/types";
import { useState } from "react";

type RequestServiceCardProps = {
  onSubmitBudget: (data: BudgetFormData) => void;
};

export default function QuotationForm({ onSubmitBudget }: RequestServiceCardProps){
    const [formData, setFormData ] = useState<BudgetFormData>({
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitBudget(formData);
    };

    return(
        <>
            <div className="z-10">
                <div className="flex flex-col justify-center font-[DotGothic16] w-full h-[300px] rounded-2xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]">
                    <form onSubmit={handleSubmit} className="w-full z-50">
                        <div className="flex items-center text-white text-2xl gap-5 py-2">
                            <input 
                                name="name"
                                value={formData.name}
                                onChange={handleChange} 
                                type="text" 
                                placeholder="Name"                               
                                className="inputStyle w-1/3 placeholder-white/30 hover:border-b-red-500 transition-colors focus:outline-none" 
                            />
                            <input 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="text"
                                placeholder="Phone number"
                                className="inputStyle w-1/4 placeholder-white/30 hover:border-b-red-500 transition-colors focus:outline-none"
                            />
                            <input 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="text"
                                placeholder="Mail"
                                className="inputStyle w-1/2 placeholder-white/30 hover:border-b-red-500 transition-colors focus:outline-none"
                            />
                        </div>
                        <div className="flex justify-center mt-12">
                            <button type="submit" className="text-4xl hover:text-red-500 transition-colors">
                                [ Request quotation ]
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
