import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allServices = [
  { title: "Diabetes Mellitus", desc: "Manage all forms including gestational diabetes.", icon: "🩸", category: "Chronic", image: "https://images.pexels.com/photos/7579830/pexels-photo-7579830.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Pre-diabetes", desc: "Prevent full diabetes through guided lifestyle.", icon: "📉", category: "Chronic", image: "https://images.pexels.com/photos/5468193/pexels-photo-5468193.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Weight Management", desc: "Sustainable and practical weight loss guidance.", icon: "⚖️", category: "Wellness", image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Renal Disease", desc: "Tailored renal diets for all stages of kidney disease.", icon: "🧫", category: "Chronic", image: "https://images.pexels.com/photos/5999834/pexels-photo-5999834.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Hypertension", desc: "Sodium-controlled and heart-smart meal plans.", icon: "💓", category: "Chronic", image: "https://images.pexels.com/photos/1001897/pexels-photo-1001897.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Heart Disease", desc: "Supportive cardiac nutrition for better recovery.", icon: "❤️", category: "Chronic", image: "https://images.pexels.com/photos/3735732/pexels-photo-3735732.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Nutrition in Pregnancy", desc: "Trimester-specific meal plans for a healthy pregnancy.", icon: "🤰", category: "Women", image: "https://images.pexels.com/photos/5428866/pexels-photo-5428866.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Nutrition in Lactation", desc: "Support for mothers and weaning baby foods.", icon: "🍼", category: "Women", image: "https://images.pexels.com/photos/6475906/pexels-photo-6475906.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Rheumatoid Arthritis", desc: "Anti-inflammatory and micronutrient strategies.", icon: "🦴", category: "Chronic", image: "https://images.pexels.com/photos/4266945/pexels-photo-4266945.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Gout", desc: "Low-purine diet and hydration-focused plans.", icon: "🧬", category: "Chronic", image: "https://images.pexels.com/photos/4058229/pexels-photo-4058229.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Women's Health", desc: "Special diets for PCOS, menopause and more.", icon: "👩‍⚕️", category: "Women", image: "https://images.pexels.com/photos/4669283/pexels-photo-4669283.jpeg?auto=compress&cs=tinysrgb&h=200" },
  { title: "Yoga-Based Nutrition", desc: "Integrate food and mindfulness with yogic science.", icon: "🧘‍♀️", category: "Wellness", image: "https://images.pexels.com/photos/3822197/pexels-photo-3822197.jpeg?auto=compress&cs=tinysrgb&h=200" },
];

const steps = [
  { step: 1, title: "Book a Consultation", desc: "Reach out via WhatsApp or form." },
  { step: 2, title: "Initial Assessment", desc: "We evaluate your lifestyle and goals." },
  { step: 3, title: "Customized Plan", desc: "A tailored plan is designed for you." },
  { step: 4, title: "Weekly Follow-up", desc: "Adjustments and support every week." },
  { step: 5, title: "Sustainability", desc: "You’ll build habits for life." },
];

export default function Services() {
  const [filter, setFilter] = useState("All");
  const [activeService, setActiveService] = useState(null);
  const filtered = filter === "All" ? allServices : allServices.filter(s => s.category === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white text-gray-800 font-sans">

      {/* HEADER with Full Nav and 'About' before 'Services' */}
      <header className="flex justify-between items-center px-6 md:px-20 py-4 border-b sticky top-0 bg-white z-10">
        <div className="flex items-center">
         <img src={process.env.PUBLIC_URL + "/logo-navbar.png"} alt="Logo" className="h-12 w-auto object-contain" />
        </div>
        <nav className="space-x-3 text-sm">
          <a href="/" className="hover:text-teal-600">Home</a>
          <a href="/about" className="hover:text-teal-600">About</a>
          <a href="/services" className="hover:text-teal-600">Services</a>
          <a href="/testimonials" className="hover:text-teal-600">Testimonials</a>
          <a href="/contact" className="hover:text-teal-600">Contact</a>
        </nav>
      </header>


      {/* Filter */}
      <section className="text-center py-10 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-2">Explore My Services</h2>
        <p className="text-gray-600 mb-6">Scientifically-backed nutrition plans for all needs.</p>
        <div className="flex justify-center flex-wrap gap-3">
          {["All", "Chronic", "Women", "Wellness"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full border text-sm ${filter === cat ? "bg-teal-600 text-white" : "bg-white border-teal-300 text-teal-700 hover:bg-teal-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 pb-20">
        <AnimatePresence>
          {filtered.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setActiveService(s)}
            >
              <img src={s.image} alt={s.title} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">{s.icon} {s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
            onClick={() => setActiveService(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img src={activeService.image} alt={activeService.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">{activeService.title}</h3>
              <p className="text-gray-700">{activeService.desc}</p>
              <button className="absolute top-2 right-3 text-xl" onClick={() => setActiveService(null)}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline */}
      <section className="px-6 md:px-20 py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-10">Your Nutrition Journey</h3>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition border-l-4 border-teal-500 text-left"
            >
              <h4 className="font-bold mb-1">Step {step.step}</h4>
              <p className="text-sm text-gray-600">{step.title}</p>
              <p className="text-xs mt-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-12 bg-white text-sm text-gray-500 text-center border-t">
        &copy; {new Date().getFullYear()} Chitra Mahesh. All rights reserved.
      </footer>
    </motion.div>
  );
}
