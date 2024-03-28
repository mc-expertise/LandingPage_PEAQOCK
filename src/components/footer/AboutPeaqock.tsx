import React from 'react';
import { SocRe } from '../../data/socRes';

const LinkAbout = [
  {
    name: 'Privacy Statement',
  },
  {
    name: 'Term and condition',
  },
  {
    name: 'Accessibility',
  },
  {
    name: 'F.A.Q.',
  },
];
const AboutPeaqock = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <h1 className="text-[#127682] font-bold text-[24px]">About Peaqock</h1>
      <ul className="flex flex-col gap-6">
        {LinkAbout.map((link, index) => (
          <li key={index} className="flex items-center gap-4">
            {link.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        {SocRe.map((icon) => (
          <img src={icon.icon} key={icon.icon} />
        ))}
      </div>
    </div>
  );
};

export default AboutPeaqock;
