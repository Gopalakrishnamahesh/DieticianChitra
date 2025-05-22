import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-teal-700 font-semibold underline"
      : "hover:text-teal-600 transition";

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-4 flex justify-between items-center text-sm font-medium sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-gray-800">Chitra Mahesh</Link>
      <div className="space-x-4 text-gray-700">
        <Link to="/" className={linkStyle("/")}>Home</Link>
        <Link to="/about" className={linkStyle("/about")}>About</Link>
        <Link to="/services" className={linkStyle("/services")}>Services</Link>
        <Link to="/testimonials" className={linkStyle("/testimonials")}>Testimonials</Link>
        <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
      </div>
    </nav>
  );
}
