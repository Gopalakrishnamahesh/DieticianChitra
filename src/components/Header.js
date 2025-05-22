import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 md:px-20 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Chitra Mahesh</h1>
      <nav className="space-x-4 text-sm font-medium text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
