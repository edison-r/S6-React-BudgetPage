import Cursor from "../SharedComponents/Cursor";
import Logo from "../SharedComponents/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HeroBody(){

    const [cursorVariant, setCursorVariant] = useState<"default" | "text">("default")

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return(
        <div className="cursor-none">
            <Logo />
            <div className="absolute inset-0 z-10 flex flex-col justify-center text-white px-4">
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-4xl sm:text-8xl md:text-8xl lg:text-9xl font-extrabold self-start ml-4 sm:ml-8 md:ml-1 xl:ml-44 2xl:ml-96">
                    Take it to
                </h1>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-4xl sm:text-8xl md:text-8xl lg:text-9xl font-extrabold self-end mr-4 sm:mr-8 md:mr-1 xl:mr-44 2xl:mr-96 text-right">
                    the{" "}
                    <span className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-[Whisper] inline-block align-baseline">
                    N
                    </span>
                    ext level
                </h1>
            </div>
            <Cursor cursorVariant={cursorVariant} />
            <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="absolute text-9xl font-light bottom-8 right-4 z-10 text-white cursor-pointer hover:translate-x-4 transition-transform duration-300">
                <Link to="/services" className="cursor-none">{">>>>>>>>>>>>>>>>>>>>>>>>>"}</Link>
            </div>
        </div>
    );
}