import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="w-full py-9 flex items-center justify-between">
       <Link to="/"><Logo /></Link> 
        <div></div>
      <nav>
        <ul className="flex gap-10">
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
    </header>
  );
}
