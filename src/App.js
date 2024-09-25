// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import FlippableCard from './components/FlippableCard';
import Footer from './components/Footer';
import ExpandableSection from './components/ExpandableSection';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import cardImage1 from './assets/card1.png';


function App() {
  // State to track if each card's checkbox is checked
  const [checkedCards, setCheckedCards] = useState([false, false, false, false]);
  const [openSectionIndex, setOpenSectionIndex] = useState(null); // Track the currently open section

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

  const advisorySections = [
    {
      title: 'General Advisory',
      content: [
        'Comprehensive consulting on integrating tokenized game assets into gaming IPs',
        'End-to-end project management for token design and launch on any blockchain',
        'Strategic consulting on the use of ERC-20 tokens for in-game currencies and funding',
        'Advisory on utilizing NFTs to represent in-game assets, rights, and ownership',
        'Blockchain selection guidance to align with specific game mechanics and scalability needs',
      ],
    },
    {
      title: 'Circular Economy Design',
      content: [
        'Design and architecture of gaming token economies that drive engagement and retention',
        'Mechanism design for ERC-20-based in-game currency sinks and faucets',
        'Economic modeling for balancing token emissions and in-game rewards',
        'NFT-based ownership models for assets, cosmetics, and user-generated content (UGC)',
        'Dynamic revenue-sharing models between players, creators, and developers using fungible and non-fungible tokens',
      ],
    },
    {
      title: 'Market Integration',
      content: [
        'Centralized and decentralized exchange integration for in-game ERC-20 token liquidity',
        'NFT marketplace consulting for in-game item trading, rentals, and secondary sales',
        'Seamless integration of wallets and other tools for frictionless user experience',
        'Bridging strategies between different blockchains to allow cross-game asset transfers',
        'Structuring liquidity for in-game currencies and assets via staking, pools, and market makers',
      ],
    },
    {
      title: 'GTM Strategy',
      content: [
        'User acquisition and engagement strategies tailored to crypto-native and traditional players',
        'Community building and incentivization models using ERC-20 and NFT rewards',
        'Best practices for integrating NFT drops and token generation events (TGEs) into launch plans',
        'Aligning with and incentivizing influencers, streamers, and gaming communities to drive early adoption',
        'Developing partnerships with other gaming projects to create cross-game experiences',
      ],
    },
  ];

  // Handle which section is expanded or collapsed
  const handleToggleSection = (index) => {
    setOpenSectionIndex(index === openSectionIndex ? null : index); // Collapse if the same section is clicked again
  };

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
              ChainSafe introduces the Elite Innovation Partners Program to foster <span className="text-yellow-500 font-semibold">strategic collaborations</span> with <span className="text-yellow-500 font-semibold">game studios</span> and <span className="text-yellow-500 font-semibold">publishers</span> exploring the potential of <span className="text-yellow-500 font-semibold">Web3 technologies</span>.
            </p>
            {/* Expandable Sections for Advisory Services */}
            <div className="container mx-auto px-5">
              {advisorySections.map((section, index) => (
                <ExpandableSection
                  key={index}
                  title={section.title}
                  content={section.content}
                  isExpanded={openSectionIndex === index} // Pass down the current open state
                  onToggle={() => handleToggleSection(index)} // Toggle the section on click
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria Section with Flippable Cards */}
      <Section id="eligibility" title="High Calibre Partnerships">
        <div className="container mx-auto px-5">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center">
            At ChainSafe, we're proud to have developed deep expertise in Web3 technologies. We believe that the best results come from partnering with equally dedicated and innovative teams in the gaming industry. Together, we can explore new possibilities and create meaningful advancements in Web3 and gaming.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <FlippableCard
            frontTitle="Proven Excellence"
            //frontText="Are you among the best?"
            cardIcon={<i className="fas fa-crown card-icon"></i>} /* Example icon */
            backgroundImage={cardImage1}
            backText="Your studio sets trends. With each title, you push the boundaries of what’s possible, delivering experiences that shape the future of gaming."
            onCheck={(isChecked) => handleCheck(0, isChecked)}
          />
          <FlippableCard
            frontTitle="Visionary Leadership"
            //frontText="Leading the charge with bold ideas and foresight."
            cardIcon={<i className="fas fa-heart card-icon"></i>} /* Example icon */
            backgroundImage={cardImage1}
            backText="You not only navigate the industry’s landscape but shape it. Your strategic vision guides the future of gaming, always staying ahead of the curve."
            onCheck={(isChecked) => handleCheck(1, isChecked)}
          />
          <FlippableCard
            frontTitle="Pioneering Technology"
            //frontText="Pushing boundaries through cutting-edge tech."
            cardIcon={<i className="fas fa-graduation-cap card-icon"></i>} /* Example icon */
            backgroundImage={cardImage1}
            backText="Your studio thrives at the intersection of technology and creativity, using the latest tools to redefine gaming and create immersive ecosystems."
            onCheck={(isChecked) => handleCheck(2, isChecked)}
          />
          <FlippableCard
            frontTitle="Sustained Growth"
            //frontText="Focused on building lasting legacies."
            cardIcon={<i className="fas fa-seedling card-icon"></i>} /* Example icon */
            backgroundImage={cardImage1}
            backText="You’re committed to creating games that endure. Your projects cultivate communities that thrive, ensuring long-term relevance and engagement."
            onCheck={(isChecked) => handleCheck(3, isChecked)}
          />
        </div>
      </Section>


      {/* Program Benefits Section */}
      <Section id="benefits" title="Joint Benefits">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Priority Collaboration</h3>
            <p>Direct access to ChainSafe's top-tier development teams and resources.</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Customized Solutions</h3>
            <p>Tailored Web3 integration and development services aligned with your strategic objectives.</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Technological Edge</h3>
            <p>Early adoption of cutting-edge technologies, positioning you ahead of the competition.</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Strategic Insights</h3>
            <p>Exclusive industry insights and thought leadership from ChainSafe's experts.</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Dedicated Support</h3>
            <p>Premium support services ensuring seamless project execution and delivery.</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Exclusive Networking</h3>
            <p>Opportunities to connect with other elite partners and industry leaders.</p>
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
              <p>Organizations are invited to initiate contact directly and confidentially.</p>
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
              <p>Strategic discussion between executive teams to assess alignment and objectives.</p>
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
              <p>Development of a customized partnership proposal outlining the scope and terms of collaboration.</p>
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
              <p>Formalization of the partnership, setting the foundation for a successful collaboration.</p>
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
              <p>Commencement of work with a dedicated team ensuring consistent communication and excellence.</p>
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
            <p>Discord: <span className="text-yellow-500">Mcsellerie</span></p>
          </div>
        </Section>
      )}

      <Footer />
    </div>
  );
}

export default App;
