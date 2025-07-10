import type { ServiceCardData } from "../../types/types";

export default function ServicesCard({ title, tagline, description, features, price, isSelected }: ServiceCardData){
    return(
        <div className="z-50 flex flex-1 flex-row gap-5 my-[168px]">
            <div className="w-[388px] h-[487px] rounded-2xl p-6 backdrop-blur bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]">
                <h1>SEO</h1>
                <p>Be seen. Or be invisible.</p>
                <p>We make Google love your site.</p>
                <hr></hr>
                <div className="flex flex-row items-center font-extralight gap-2 ">
                    <img src="./public/CheckFeatureMol.svg" />
                    <p>Boost your position on Google</p>
                </div>
                <div className="flex flex-row items-center font-extralight gap-2 ">
                    <img src="./public/CheckFeatureMol.svg" />
                    <p>Brings organic traffic</p>
                </div>
                <div className="flex flex-row items-center font-extralight gap-2 ">
                    <img src="./public/CheckFeatureMol.svg" />
                    <p>Improves page speed and structure</p>
                </div>
                <div className="flex flex-row items-center font-extralight gap-2 ">
                    <img src="./public/CheckFeatureMol.svg" />
                    <p>Helps users (and bots) find what matters</p>
                </div>
                <div className="flex flex-row items-center font-extralight gap-2 ">
                    <h2>300€</h2>
                    <h2>Add</h2> 
                    <input type="checkbox"></input>
                </div>
            </div>
        </div>
    );
}