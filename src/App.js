// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import FlippableCard from './components/FlippableCard';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll'; // Import the scroller from react-scroll
import './index.css';

function App() {
  // State to track if each card's checkbox is checked
  const [checkedCards, setCheckedCards] = useState([false, false, false, false]);
  
  // Function to handle checkbox changes
  const handleCheck = (index, isChecked) => {
    const newCheckedCards = [...checkedCards];
    newCheckedCards[index] = isChecked;
    setCheckedCards(newCheckedCards);
  };

  // Check if all checkboxes are checked
  const allChecked = checkedCards.every((isChecked) => isChecked);

  // Function to scroll to the contact section
  const scrollToContact = () => {
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70, // Adjust offset if needed to align correctly
    });
  };

  // Scroll to contact section when all cards are completed
  useEffect(() => {
    if (allChecked) {
      scrollToContact(); // Directly call the scroll function when all are checked
    }
  }, [allChecked]);

  return (
    <div className="bg-gray-900">
      {/* Pass the contact availability state to Navbar */}
      <Navbar isContactAvailable={allChecked} />
      <Header />

      {/* Custom Styled Section */}
      <section id="overview" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
              Redefining the Future of Gaming Through Exclusive Collaboration
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              ChainSafe Gaming proudly presents the <span className="text-yellow-500 font-semibold">Elite Innovation Partners Program</span> - an exclusive initiative designed to forge strategic alliances with visionary game studios and publishers. This program is reserved for <span className="text-yellow-500 font-semibold">industry leaders committed to pioneering advancements in Web3 gaming technology.</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              As one of the top five global companies in full-stack Web3 gaming solutions, ChainSafe Systems offers unparalleled expertise and resources. Our mission is to collaborate with select partners to shape the future of gaming, pushing the boundaries of what's possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria Section with Flippable Cards */}
      <Section id="eligibility" title="Eligibility Criteria">
        <div className="grid md:grid-cols-3 gap-2">
          <FlippableCard
            frontTitle="Proven Excellence"
            frontText="Established studios with a distinguished track record of success and innovation."
            backText="Your studio consistently delivers groundbreaking titles that set the benchmark in the industry."
            onCheck={(isChecked) => handleCheck(0, isChecked)}
          />
          <FlippableCard
            frontTitle="Strategic Vision"
            frontText="Partners with a forward-thinking approach to game development."
            backText="You lead with a bold, strategic vision that shapes the future of gaming with clear foresight."
            onCheck={(isChecked) => handleCheck(1, isChecked)}
          />
          <FlippableCard
            frontTitle="Technical Leadership"
            frontText="Studios that leverage advanced technologies to push gaming boundaries."
            backText="Your team pioneers new technologies, setting the pace for innovation in the gaming sector."
            onCheck={(isChecked) => handleCheck(2, isChecked)}
          />
          <FlippableCard
            frontTitle="Financial Stability"
            frontText="Financially robust studios ready to invest in high-impact projects."
            backText="Your financial strength empowers ambitious ventures, supporting sustained innovation and growth."
            onCheck={(isChecked) => handleCheck(3, isChecked)}
          />
        </div>
      </Section>

      {/* Program Benefits Section */}
      <Section id="benefits" title="Program Benefits">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Priority Collaboration</h3>
            <p>
              Direct access to ChainSafe's top-tier development teams and resources.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Customized Solutions</h3>
            <p>
              Tailored Web3 integration and development services aligned with your strategic objectives.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Technological Edge</h3>
            <p>
              Early adoption of cutting-edge technologies, positioning you ahead of the competition.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Strategic Insights</h3>
            <p>
              Exclusive industry insights and thought leadership from ChainSafe's experts.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Dedicated Support</h3>
            <p>
              Premium support services ensuring seamless project execution and delivery.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Exclusive Networking</h3>
            <p>
              Opportunities to connect with other elite partners and industry leaders.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Engagement Process Section */}
      <Section id="process" title="Engagement Process">
        <div className="space-y-12">
          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-black font-bold text-2xl">
                1
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">Confidential Inquiry</h3>
              <p>
                Qualified organizations are invited to initiate contact directly and confidentially.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-black font-bold text-2xl">
                2
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">Executive Consultation</h3>
              <p>
                Strategic discussion between executive teams to assess alignment and objectives.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-black font-bold text-2xl">
                3
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">Tailored Proposal</h3>
              <p>
                Development of a customized partnership proposal outlining the scope and terms of collaboration.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-black font-bold text-2xl">
                4
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">Formal Agreement</h3>
              <p>
                Formalization of the partnership, setting the foundation for a successful collaboration.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-500 text-black font-bold text-2xl">
                5
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">Initiation of Project</h3>
              <p>
                Commencement of work with a dedicated team ensuring consistent communication and excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Conditional Rendering of Hidden Contact Details */}
      {allChecked && (
        <Section id="contact" title="Contact Information">
          <div className="text-center max-w-2xl mx-auto">
            <p className="mb-8">
              Congratulations! You've unlocked the contact information for the Elite Innovation Partners Program.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Martin Maurer</h3>
            <p className="mb-2">
              Email: <a href="mailto:martin@chainsafe.io" className="text-yellow-500 hover:underline">martin@chainsafe.io</a>
            </p>
            <p className="mb-2">
              Telegram: <a href="https://t.me/cmdmcsellerie" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">@cmdmcsellerie</a>
            </p>
            <p>
              Discord: <span className="text-yellow-500">Mcsellerie</span>
            </p>
          </div>
        </Section>
      )}

      <Footer />
    </div>
  );
}

export default App;
