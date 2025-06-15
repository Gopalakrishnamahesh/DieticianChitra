import React from "react";
import { motion } from "framer-motion";

export default function Home() {
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
    <img src= {process.env.PUBLIC_URL + "/logo-navbar.png"} alt="Logo" className="h-16 w-auto object-contain" />
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
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-24 pb-16"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">Chitra Mahesh</h1>
          <p className="text-lg text-gray-600">Clinical Dietitian & Certified Diabetes Educator</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
          >
            Book Consultation
          </motion.button>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10 md:mt-0"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.pexels.com/photos/8376300/pexels-photo-8376300.jpeg?auto=compress&cs=tinysrgb&h=400"
            alt="Chitra Mahesh"
            className="rounded-xl shadow-2xl hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition duration-500 w-full max-w-xs mx-auto"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

      {/* CORE SPECIALTIES */}
      <motion.section
        className="px-6 md:px-20 py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Core Specialties</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Weight Management",
              desc: "Balanced plans to help you sustainably reach your fitness goals.",
              icon: "⚖️"
            },
            {
              title: "Renal Nutrition",
              desc: "Specialized diets for all stages of kidney conditions.",
              icon: "🩺"
            },
            {
              title: "Pre-diabetes",
              desc: "Prevent progression with nutrition and lifestyle change.",
              icon: "🩸"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white/80 backdrop-blur-md"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TIMELINE / JOURNEY */}
      <motion.section
        className="px-6 md:px-20 py-20 bg-gray-50 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-10">Your Nutrition Journey</h3>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            "Book a Consultation",
            "Initial Assessment",
            "Personalized Plan",
            "Weekly Follow-ups",
            "Long-term Success"
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition border-l-4 border-teal-500 text-left"
            >
              <h4 className="font-bold mb-1">Step {i + 1}</h4>
              <p className="text-sm text-gray-600">{step}</p>
            </motion.div>
          ))}
        </div>
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
            <li>Heart Health</li>
            <li>Women's Wellness</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base mb-2 mt-8 md:mt-0">Specialties</h3>
          <ul className="space-y-1">
            <li>Hypertension</li>
            <li>Rheumatoid Arthritis</li>
            <li>Sports Nutrition</li>
            <li>Yoga-Based Diets</li>
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
