// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Digital Skill Test</h2>
          <p className="text-gray-400 text-sm">
            Empowering your future through tech literacy and skill
            certification.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-primary transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/faq" className="hover:text-primary transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/guidelines" className="hover:text-primary transition">
                Guidelines
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-primary transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-primary transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Digital Skill Test. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
