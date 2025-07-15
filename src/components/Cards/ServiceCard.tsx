import type { ServiceCardData } from "../../types/types";
import { AnimatePresence, motion } from "framer-motion";
import ServicesFeatures from "../SharedComponents/ServicesFeatures";
import Counter from "../SharedComponents/Counter";

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
            <div className="z-50 flex flex-col gap-5 my-[168px]">
                <motion.div className="flex flex-col justify-between w-[388px] h-[487px] rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]"
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.5 },
                    }}
                    >
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
                </motion.div>

                <AnimatePresence>
                    {type === "web" && webOptions && onOptionsChange && selected && (
                        <motion.div
                            key="web-options"
                            className="flex justify-center gap-8 font-bold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }} 
                        >
                            <Counter 
                                label="programming languages"
                                value={webOptions.translations}
                                onChange={(newVal) =>
                                    onOptionsChange({ ...webOptions, translations: newVal})
                                }
                            />
                        <Counter 
                                label="number of pages"
                                value={webOptions.languages}
                                onChange={(newVal) =>
                                    onOptionsChange({ ...webOptions, languages: newVal})
                                }
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}