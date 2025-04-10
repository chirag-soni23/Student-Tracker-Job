import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-white font-semibold text-xl">JobTracker</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="text-white md:flex hidden items-center gap-10">
        <li>
          <Link to="/" className="hover:text-white/70 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="hover:text-white/70 transition">
            All Jobs
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white/70 transition">
            About
          </Link>
        </li>
      </ul>

      <Link
        to="/applied"
        className="hidden md:flex bg-white text-gray-700 text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full items-center justify-center"
      >
        Applied Job
      </Link>

      <button
        aria-label="menu-btn"
        type="button"
        className="md:hidden active:scale-90 transition text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li>
              <Link
                to="/"
                className="text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
           
            <li>
              <Link
                to="/jobs"
                className="text-sm"
                onClick={() => setMenuOpen(false)}
              >
                All Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>

          <Link
            to="/applied"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-gray-700 mt-6 text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full flex items-center justify-center"
          >
            Applied Job
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
