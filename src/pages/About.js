import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <motion.div
      className="bg-white text-gray-800 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>About | Chitra Mahesh</title>
        <meta
          name="description"
          content="Meet Chitra Mahesh, a clinical dietitian and certified diabetes educator with 30+ years of experience. Explore her journey, affiliations, and research work."
        />
        <meta property="og:title" content="About Chitra Mahesh" />
        <meta property="og:image" content="https://images.pexels.com/photos/8376300/pexels-photo-8376300.jpeg" />
      </Helmet>

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


      {/* ABOUT */}
      <motion.section
        className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-20 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Chitra Mahesh</h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Chitra Mahesh is a registered dietitian and certified diabetes educator with over 30 years of experience in clinical nutrition. She holds an MSc in Dietetics & Food Service Management, a PG Diploma in Nutrition and Dietetics, and is a Certified Nutrition Support Dietitian (CNSD).
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            Chitra has worked at Tamilnad Hospital (now Gleneagles Global Hospital) for 8 years and currently serves as the Head of Department, Nutrition at Chennai Meenakshi Multispeciality Hospital. She is a dedicated mentor, teaching nursing students and offering internships to undergraduate and postgraduate nutrition students.
          </p>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <img
            src="https://images.pexels.com/photos/8376300/pexels-photo-8376300.jpeg"
            alt="Chitra Mahesh"
            className="rounded-xl shadow-xl max-w-sm w-full"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

      {/* TIMELINE */}
      <section className="px-6 md:px-20 pb-20">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Career Timeline</h3>
        <div className="space-y-4">
          {[
            { year: "1990s", event: "Completed MSc and PGDND; began clinical work" },
            { year: "2000", event: "Published in Nutrition journal on enteral nutrition" },
            { year: "2003", event: "Won Sagarmal Goenka Award at IDA Conference" },
            { year: "2005–2012", event: "HOD, Tamilnad Hospital" },
            { year: "2013–Present", event: "HOD, Chennai Meenakshi Hospital" },
            { year: "2022", event: "Faculty at PENSA Congress, Hyderabad" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="border-l-4 border-teal-500 pl-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="font-bold">{item.year}</p>
              <p className="text-gray-600">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AFFILIATIONS */}
      <section className="px-6 md:px-20 pb-20">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Affiliations & Recognition</h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Life Member — Indian Dietetic Association</li>
          <li>Faculty & Founding Member — ISPEN</li>
          <li>Annual Member — ASPEN (USA)</li>
          <li>Member — Nutrition Society of India</li>
        </ul>
      </section>

      {/* PUBLICATIONS */}
      <section className="px-6 md:px-20 pb-20">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Publications & Research</h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>
            “External Indications of Enteral Nutritional Support” — Nutrition Journal (2000)
          </li>
          <li>
            Co-author of textbook chapters on:
            <br />“Enteral Nutrition: Physiological Benefits” & “Refeeding Syndrome”
          </li>
          <li>
            Contributing Author — Joshi & Benjamin’s Textbook of Clinical Nutrition (2025)
          </li>
        </ul>
      </section>

      {/* YOGA */}
      <section className="px-6 md:px-20 pb-20">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Yoga & Mindfulness</h3>
        <p className="text-gray-700 leading-relaxed">
          Trained under Dr. Krishnaraman, Chitra has practiced and taught yoga for over 15 years. Her holistic practice combines mindful eating with asanas for physical and mental wellness.
        </p>
      </section>
    </motion.div>
  );
}
