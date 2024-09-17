// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
// Import the image from the local file system
import headerBackground from '../assets/header-background.png'; // Adjust the path as necessary

function Header() {
  return (
    <header
      id="header" // Ensure this matches the 'to' prop in the Link
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${headerBackground})` }} // Use the imported local image
    >
      <div className="h-full w-full bg-black bg-opacity-60 flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-7xl text-white font-bold mb-5 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elite Innovation Partners
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Join an exclusive circle of visionaries shaping the future of gaming.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="overview" // Replace 'overview' with the ID of your target section
            smooth={true}
            duration={500}
            className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition duration-300 cursor-pointer"
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
