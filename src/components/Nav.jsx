import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  transition-all ${
        scrolled ? "backdrop-blur bg-slate-900/80 shadow-lg" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${scrolled ? "h-14" : "h-16"}`}>
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-10 w-auto" src="/logo.png" alt="Nova Coders logo" />
              <span className="ml-3 text-xl font-bold font-roboto bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                Nova Coders
              </span>
            </Link>
          </div>


          <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-emerald-400 transition-colors ${
                isActive ? "text-emerald-500 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
         
            <NavLink to="/about" className={({ isActive }) =>
              `hover:text-emerald-400 transition-colors ${
                isActive ? "text-emerald-500 font-semibold" : ""
              }`
            }>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) =>
              `hover:text-emerald-400 transition-colors ${
                isActive ? "text-emerald-500 font-semibold" : ""
              }`
            }>
              Services
            </NavLink>
            <NavLink to="/team" className={({ isActive }) =>
              `hover:text-emerald-400 transition-colors ${
                isActive ? "text-emerald-500 font-semibold" : ""
              }`
            }>
              Team
            </NavLink>

            <NavLink to="/signup">
              <Button variant="primary">Sign Up</Button>
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-3 pt-2 pb-3 space-y-1 bg-slate-900/95">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-slate-800">
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded hover:bg-slate-800">
            About Us
          </Link>
          <Link to="/services" className="block px-3 py-2 rounded hover:bg-slate-800">
            Services
          </Link>
          <Link to="/team" className="block px-3 py-2 rounded hover:bg-slate-800">
            Team
          </Link>
          <Link to="/signup" className="block px-3 py-2">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
