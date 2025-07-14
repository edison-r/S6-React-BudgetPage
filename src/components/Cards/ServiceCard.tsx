import type { ServiceCardData } from "../../types/types";
import ServicesFeatures from "../SharedComponents/ServicesFeatures";

type Props = ServiceCardData & {
    selected: boolean;
    onToggle: () => void;
    webOptions?: {
        languages: number;
        translations: number;
    };
    onOptionsChange?: (options: { languages: number; translations: number }) => void;
};

export default function ServiceCard({ title, tagline, description, features, price, selected, type, onToggle, webOptions, onOptionsChange }: Props){
    return(
        <>
            <div className="z-50 flex flex-row gap-5">
                <div className="flex flex-col justify-between w-[388px] min-h-[487px] rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]">
                    <div>
                        <h1 className="text-white text-7xl font-bold">{title}</h1>
                        <p className="text-white text-2xl font-bold mt-2">{tagline}</p>
                        <p className="text-white text-2xl font-extralight">{description}</p>
                    </div>
                    <hr className="my-4 border-white/20" />
                    <div className="space-y-4">
                        <ServicesFeatures features={features} />
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <h2 className="text-white text-5xl font-bold">{price}<span className="mx-1">€</span></h2>
                        <div className="flex items-center gap-4">
                            <h2 className="text-white text-5xl font-bold">Add</h2>
                            <input 
                                type="checkbox" 
                                checked={selected}
                                onChange={onToggle}
                                className="w-8 h-8 accent-white cursor-pointer" 
                            />
                        </div>
                    </div>
                </div>

                {type === "web" && webOptions && onOptionsChange && selected && (
                <div className="mt-4 flex gap-4 text-white">
                    <label>
                        Languages:
                        <input
                        type="number"
                        min="0"
                        value={webOptions.languages}
                        onChange={(e) =>
                            onOptionsChange({ 
                                languages: parseInt(e.target.value) || 0,
                                translations: webOptions.translations
                            })
                        }
                        className="ml-2 w-16 text-black"
                        />
                    </label>
                    <label>
                        Translations:
                        <input
                        type="number"
                        min="0"
                        value={webOptions.translations}
                        onChange={(e) =>
                            onOptionsChange({ 
                                translations: parseInt(e.target.value) || 0,
                                languages: webOptions.languages
                            })
                        }
                        className="ml-2 w-16 text-black"
                        />
                    </label>
                </div>
                )}
            </div>
        </>
    );
}