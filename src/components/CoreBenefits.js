import React from 'react';
import { motion } from 'framer-motion';

function CoreBenefits() {
  return (
    <section id="core-benefits" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
            Benefits of Co-Development
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Co-developing games unlocks new opportunities for studios to innovate, scale, and engage players at unprecedented levels.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Accelerated Innovation</h3>
            <p>Tap into diverse expertise and resources, enabling rapid innovation in gameplay mechanics and overall player experience.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Scalable Development</h3>
            <p>Expand your game’s reach and scale production efficiently by leveraging shared infrastructure, knowledge, and acces to  talent.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Enhanced Player Engagement</h3>
            <p>Create captivating and immersive experiences that drive long-term player loyalty through cutting-edge technology and collaborative design.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CoreBenefits;
