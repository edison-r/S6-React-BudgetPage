import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Quotation from "../components/Sections/Quotation";
import Services from "../components/Sections/Services";
import About from "../components/Sections/About";
import Navbar from "../components/SharedComponents/layout/Navbar";
import Cursor from "../components/SharedComponents/layout/Cursor";

export default function ServicesPage(){
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if(hash){
            const element = document.querySelector(hash);
            if(element) element.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return(
        <main className="max-w-[1200px] mx-auto text-white">  
            <Cursor cursorVariant="default" />
            <Navbar />
            <About />
            <Services />
        </main>
    );
}