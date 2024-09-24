// src/components/ExpandableSection.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandableSection = ({ title, content, isExpanded, onToggle }) => {
  return (
    <div className="mb-4">
      <div
        className="cursor-pointer flex justify-between items-center py-2 border-b border-gray-700"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-yellow-500">{title}</h3>
        <span className="text-yellow-500">{isExpanded ? '-' : '+'}</span>
      </div>

      {/* AnimatePresence ensures the exit animation happens */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="mt-4 ml-6 space-y-2 text-gray-300 list-disc list-inside">
              {content.map((item, index) => (
                <li key={index} className="leading-relaxed text-left">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableSection;
