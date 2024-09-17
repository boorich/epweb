// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ isContactAvailable }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle navbar background change on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo with Scroll-to-Top Action */}
        <Link
          to="header" // Use the id of the header section or "top"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={() => setNavbarOpen(false)} // Optional: close the navbar on click
        >
          <img src={logo} alt="ChainSafe Systems Logo" className="h-8" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {navbarOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:items-center ${navbarOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-6">
            <li className="mt-3 md:mt-0">
              <Link
                activeClass="text-white font-bold"
                to="overview"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setNavbarOpen(false)}
              >
                Overview
              </Link>
            </li>
            <li className="mt-3 md:mt-0">
              <Link
                activeClass="text-white font-bold"
                to="eligibility"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setNavbarOpen(false)}
              >
                Eligibility
              </Link>
            </li>
            <li className="mt-3 md:mt-0">
              <Link
                activeClass="text-white font-bold"
                to="benefits"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setNavbarOpen(false)}
              >
                Benefits
              </Link>
            </li>
            <li className="mt-3 md:mt-0">
              <Link
                activeClass="text-white font-bold"
                to="process"
                spy={true}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setNavbarOpen(false)}
              >
                Process
              </Link>
            </li>
            {/* Conditional Contact Link */}
            <li className={`mt-3 md:mt-0 ${isContactAvailable ? '' : 'opacity-50 pointer-events-none'}`}>
              <Link
                activeClass="text-white font-bold"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className={`text-gray-300 hover:text-white cursor-pointer ${
                  isContactAvailable ? '' : 'cursor-not-allowed'
                }`}
                onClick={() => setNavbarOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
