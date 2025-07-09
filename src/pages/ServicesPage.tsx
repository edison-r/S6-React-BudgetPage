import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Services from "../components/ServicesComponents/Services";
import About from "../components/ServicesComponents/About";
import Navbar from "../components/ServicesComponents/Navbar";
import Cursor from "../components/SharedComponents/Cursor";

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