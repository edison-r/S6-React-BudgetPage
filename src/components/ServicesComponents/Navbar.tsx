import { Link } from "react-router-dom";
import Logo from "../SharedComponents/Logo";

export default function Navbar() {
  return (
    <header className="w-full py-9 flex items-center justify-between">
        <Logo />
        <div></div>
      <nav>
        <ul className="flex gap-10">
          <li className="font-light hover:text-red-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="font-light hover:text-red-500 transition-colors">
            <Link to="/#about">About</Link>
          </li>
          <li className="font-light hover:text-red-500 transition-colors">
            <Link to="/#services">Services</Link>
          </li>
          <li className="font-light hover:text-red-500 transition-colors">
            <Link to="/#budgets">Ongoing budgets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
