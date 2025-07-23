import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="py-6 fixed z-50">
      <div className="flex w-[1200px] py-2 px-6 items-center justify-between rounded-full backdrop-blur-lg border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.1),_0_0_5px_rgba(255,255,255,0.2)]"> 
        <Link to="/"><Logo /></Link> 
          <div></div>
        <nav>
          <ul className="flex gap-10 text-xl">
            <li className="font-light hover:text-red-500 transition-colors">
              <Link to="/services#about">About</Link>
            </li>
            <li className="font-light hover:text-red-500 transition-colors">
              <Link to="/services#services">Services</Link>
            </li>
            <li className="font-light hover:text-red-500 transition-colors">
              <Link to="/services#budgets">Ongoing budgets</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


