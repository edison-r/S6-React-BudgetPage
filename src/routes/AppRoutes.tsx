import Home from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
        </Routes>
    );
}