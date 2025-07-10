import type { ServiceCardData } from "../../types/types";
import ServicesFeatures from "../SharedComponents/ServicesFeatures";

export default function ServicesCard({ title, tagline, description, features, price, isSelected }: ServiceCardData){
    return(
        <>
        <div className="z-50 flex flex-row gap-5 my-[168px]">
            <div className="flex flex-col justify-between w-[388px] h-[487px] rounded-2xl p-6 backdrop-blur bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]">
        
            <div>
            <h1 className="text-white text-6xl font-extrabold">SEO</h1>
            <p className="text-white text-2xl font-bold mt-2">Be seen. Or be invisible.</p>
            <p className="text-white text-2xl font-extralight">We make Google love your site.</p>
            </div>

            <hr className="my-4 border-white/20" />

            <div className="space-y-4">
                    <ServicesFeatures />
                    <ServicesFeatures />
                    <ServicesFeatures />
                    <ServicesFeatures />
            </div>

            <div className="flex justify-between items-center mt-6">
            <h2 className="text-white text-5xl font-bold">300€</h2>
            <div className="flex items-center gap-4">
                <h2 className="text-white text-5xl font-bold">Add</h2>
                <input type="checkbox" className="w-8 h-8 accent-white" />
            </div>
            </div>

        </div>
    </div>
</>
    );
}