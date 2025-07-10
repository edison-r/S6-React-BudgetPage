import { useState } from "react";
import { services } from "../../data/services";
import ServicesCard from "../Cards/ServiceCard";

export default function Services(){
    return(
        <section id="services" className="relative h-screen py-16">
            <h1 className="absolute left-1/2 -translate-x-1/2 z-0 text-10xl font-bold"> 
                Services 
            </h1>
            <ServicesCard />
        </section>
    );
}