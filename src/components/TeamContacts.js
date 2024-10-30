// src/components/TeamContacts.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import martinImage from '../assets/mm.jpeg';
import nikolaImage from '../assets/ng.jpeg';
import robelImage from '../assets/rg.jpeg';
import oleksandrImage from '../assets/on.jpeg';

const teamMembers = [
  {
    name: 'Martin',
    email: 'martin@chainsafe.io',
    linkedin: 'https://www.linkedin.com/in/martin-maurer-hh/',
    github: 'https://github.com/boorich',
    x: 'https://x.com/martinmaurer',
    image: martinImage,
  },
  {
    name: 'Nikola',
    email: 'nikola@chainsafe.io',
    linkedin: 'https://www.linkedin.com/in/ngarabandic/',
    github: 'https://github.com/kantagara',
    x: 'https://x.com/janedoe',
    image: nikolaImage,
  },
  {
    name: 'Robel',
    email: 'robel@chainsafe.io',
    linkedin: 'https://www.linkedin.com/in/robel-getnet-geremew/',
    github: 'https://github.com/rob1997',
    x: 'https://x.com/rob1997',
    image: robelImage,
  },
  {
    name: 'Oleksandr',
    email: 'oleksandr@chainsafe.io',
    linkedin: 'https://www.linkedin.com/in/oleksandr-nelipa-65b77a135/',
    github: 'https://github.com/creeppak',
    x: 'https://x.com/creeppak',
    image: oleksandrImage,
  },
  // ToDo: Add Sneakz and Jay
];

function TeamContacts() {
  return (
    <section id="team-contacts" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">{member.name}</h3>
              <p className="mb-2">
                <a href={`mailto:${member.email}`} className="text-yellow-500 hover:underline">{member.email}</a>
              </p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href={member.x} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamContacts;