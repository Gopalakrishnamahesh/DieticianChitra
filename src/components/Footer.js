import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-10 bg-gray-100 text-sm text-gray-700 mt-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-base mb-2">Services</h3>
          <ul className="space-y-1">
            <li>Diabetes</li>
            <li>Renal Nutrition</li>
            <li>Women's Health</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base mb-2">Specialties</h3>
          <ul className="space-y-1">
            <li>Yoga & Lifestyle</li>
            <li>Pre-diabetes</li>
            <li>Weight Management</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base mb-2">Contact</h3>
          <p>📞 +91 9840216770</p>
          <p>✉️ chitramagi@yahoo.co.in</p>
        </div>
      </div>
      <p className="text-center mt-8">&copy; {new Date().getFullYear()} Chitra Mahesh. All rights reserved.</p>
    </footer>
  );
}
