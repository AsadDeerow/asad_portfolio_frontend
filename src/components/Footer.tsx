// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 to-emerald-500 to-90% py-6">
      <div className="container mx-auto px-4 flex flex-col justify-between h-full">
        <div>
          <p className="text-white text-lg">© {currentYear} Asad Deerow. All rights reserved.</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="footer-link">
            LinkedIn
          </a>
          <a href="#" className="footer-link">
            GitHub
          </a>
          <a href="#" className="footer-link">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
