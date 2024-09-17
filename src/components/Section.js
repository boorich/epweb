// src/components/Section.js
import React from 'react';
import { motion } from 'framer-motion';

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="text-lg leading-relaxed max-w-4xl mx-auto">{children}</div>
      </div>
    </section>
  );
}

export default Section;
