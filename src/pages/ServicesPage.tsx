import About from "../components/ServicesComponents/About";
import Navbar from "../components/ServicesComponents/Navbar";
import Cursor from "../components/SharedComponents/Cursor";

export default function Main(){
    return(
        <main className="max-w-[1200px] mx-auto text-white">  
            <Cursor cursorVariant="default" />
            <Navbar />
            <About />
        </main>
    );
}