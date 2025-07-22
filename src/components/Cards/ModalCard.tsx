import type { ModalCardProps } from "../../types/types";

export default function ModalCard({ modal, setModal, label }: ModalCardProps){
    const getMessage = () => {
        if(label.toLocaleLowerCase().includes("pages")){
            return "This option adds more pages to your website.";
        } else if(label.toLocaleLowerCase().includes("languages")){
            return "This option adds more languages to your website.";
        } else {
            return "This option customizes your website.";
        }
    };
    
    return(
        <div className="relative">
            <p 
                className="text-xs hover:text-red-500 cursor-pointer"
                onMouseEnter={() => setModal(true)}
                onMouseLeave={() => setModal(false)}
            >[i]</p>
            {modal && (
                <div className="absolute top-6 left-0 w-[200px] text-sm p-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 z-50">
                    <p>{getMessage()}</p>
                </div>
            )}
        </div>
    );
}