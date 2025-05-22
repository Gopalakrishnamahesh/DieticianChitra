import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Priya",
      text: "I was chubby and looking for someone genuine to guide me. Chitra ma'am gave me a comfortable, easy-to-follow plan that brought real change. She’s flexible, kind, and truly cares.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Anonymous Family",
      text: "After my mom’s surgery, Chitra Mahesh’s diet guidance extended her health and comfort by years. Even our doctors insisted we follow her advice. Her smile and empathy make her so approachable.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
  ];

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
          <img src="/logo-navbar.png" alt="Logo" className="h-16 w-auto object-contain" />
        </div>
        <nav className="space-x-3 text-sm">
          <a href="/" className="hover:text-teal-600">Home</a>
          <a href="/about" className="hover:text-teal-600">About</a>
          <a href="/services" className="hover:text-teal-600">Services</a>
          <a href="/testimonials" className="hover:text-teal-600">Testimonials</a>
          <a href="/contact" className="hover:text-teal-600">Contact</a>
        </nav>
      </header>



      {/* HERO */}
      <motion.section
        className="px-6 md:px-20 py-20 text-center bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Honest stories from individuals and families who’ve experienced real results and comfort with Chitra Mahesh's guidance.
        </p>
      </motion.section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-20 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          {feedbacks.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white border shadow-lg rounded-xl p-6 flex flex-col items-start"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 object-cover rounded-full mb-4 shadow-md"
              />
              <p className="text-gray-700 text-sm mb-2">"{t.text}"</p>
              <span className="text-teal-600 font-medium text-sm">— {t.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="px-6 md:px-20 py-20 text-center bg-gray-100"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-bold mb-4">Want to start your journey?</h3>
        <p className="text-gray-600 mb-6">Let’s personalize your nutrition and wellness plan today.</p>
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
        >
          Contact Now
        </a>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="grid md:grid-cols-3 px-6 md:px-20 py-16 bg-white border-t text-sm text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="font-bold text-base mb-2">Services</h3>
          <ul className="space-y-1">
            <li>Weight Management</li>
            <li>Renal Nutrition</li>
            <li>Diabetes & Pre-diabetes</li>
            <li>Pregnancy & Lactation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base mb-2 mt-8 md:mt-0">Testimonials</h3>
          <ul className="space-y-1">
            <li>Real success stories</li>
            <li>Personal attention</li>
            <li>Trusted by doctors</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base mb-2 mt-8 md:mt-0">Contact</h3>
          <p>📞 +91 9840216770</p>
          <p>✉️ chitramagi@yahoo.co.in</p>
        </div>
      </motion.footer>
    </motion.div>
  );
}
