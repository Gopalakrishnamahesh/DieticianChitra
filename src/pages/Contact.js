import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xvgabqbz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.div
      className="bg-white text-gray-800 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 md:px-20 py-4 border-b sticky top-0 bg-white z-10">
        <div className="flex items-center">
          <img src="/logo-navbar.png" alt="Logo" className="h-12 w-auto object-contain" />
        </div>
        <nav className="space-x-3 text-sm">
          <a href="/" className="hover:text-teal-600">Home</a>
          <a href="/about" className="hover:text-teal-600">About</a>
          <a href="/services" className="hover:text-teal-600">Services</a>
          <a href="/testimonials" className="hover:text-teal-600">Testimonials</a>
          <a href="/contact" className="text-teal-600 font-semibold underline">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <motion.section
        className="px-6 md:px-20 py-20 text-center bg-gradient-to-br from-gray-100 to-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether you have a health concern or a curiosity about nutrition, Chitra Mahesh is here to help you take the next step toward a healthier life.
        </p>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        className="px-6 md:px-20 py-16 bg-white"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Info Block */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            <p className="text-gray-700">📞 +91 9840216770</p>
            <p className="text-gray-700">✉️ chitramagi@yahoo.co.in</p>
            <p className="text-gray-700">📍 Chennai Meenakshi Multispeciality Hospital</p>
            <div className="mt-6 rounded-lg shadow-xl overflow-hidden">
              <iframe
                title="Location"
                className="w-full h-60"
                src="https://maps.google.com/maps?q=chennai%20meenakshi%20multispeciality%20hospital&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          {/* Right Form Block */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-2xl space-y-5 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Send a Message</h3>

            {submitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded border border-green-300">
                <strong>Thank You!</strong> Your message has been sent successfully.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded shadow-sm focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded shadow-sm focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 border rounded shadow-sm focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                name="message"
                required
                className="w-full px-4 py-2 border rounded shadow-sm focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="grid md:grid-cols-3 px-6 md:px-20 py-12 bg-gray-50 border-t text-sm text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="font-bold text-base mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base mb-2 mt-8 md:mt-0">Resources</h3>
          <ul className="space-y-1">
            <li>Nutrition Blog</li>
            <li>Patient Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base mb-2 mt-8 md:mt-0">Reach Out</h3>
          <p>+91 9840216770</p>
          <p>chitramagi@yahoo.co.in</p>
        </div>
      </motion.footer>
    </motion.div>
  );
}
