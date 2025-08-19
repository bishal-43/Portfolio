"use client";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example icons

export default function Footer() {
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/projects', text: 'Projects' },
    { href: '/contact', text: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com', icon: <FaGithub size={24} /> },
    { href: 'https://linkedin.com', icon: <FaLinkedin size={24} /> },
    { href: 'https://twitter.com', icon: <FaTwitter size={24} /> },
  ];

  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Copyright Info */}
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Bishal Kumar Gupta. All Rights Reserved.</p>
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.text} 
                href={link.href} 
                className="hover:text-white transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a 
                key={social.href}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}