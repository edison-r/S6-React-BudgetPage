import "./BudgetCard.css";

export default function BudgetCard(){
    return(
        <>
            <div className="z-10">
                <div className="flex flex-col justify-center font-[DotGothic16] w-full h-[300px] font-['Fragment_Mono'] rounded-2xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_10px_rgba(255,255,255,0.2)]">
                    <form className="w-full z-50">
                        <div className="flex items-center text-white text-3xl gap-5 py-2">
                            <input className="inputStyle w-1/3 placeholder-white/30 hover:border-b-red-500 transition-colors focus:outline-none" type="text" placeholder="Name" >
                            </input>
                            <input className="inputStyle w-1/4 placeholder-white/30 hover:border-b-red-500 transition-colors focus:outline-none" type="text" placeholder="Phone number" >
                            </input>
                            <input className="inputStyle w-1/2 placeholder-white/30 hover:border-b-red-500 transition-colors focus:outline-none" type="text" placeholder="Mail" >
                            </input>
                        </div>
                        <div className="flex justify-center mt-12">
                            <button className="text-4xl hover:text-red-500 transition-colors">
                                [ Request quotation ]
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
