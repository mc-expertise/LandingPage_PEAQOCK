import React from 'react';
import logo from '../../assets/logo.svg';
import { listLinks } from '../../data/listLinks.json';
import arrDown from '../../assets/arroDown.svg';
import chat from '../../assets/chat.svg';
import profile from '../../assets/profile.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-white relative z-20 flex items-center justify-between pl-16">
      <img src={logo} alt="log" width={295} height={59} />
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
          {listLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-2">
              <li className="min-w-[105px] uppercase">{link.name}</li>
              <img src={arrDown} alt="arrdown" className="w-5 h-5" />
            </div>
          ))}
        </ul>
        <div className="flex items-center bg-gradient-to-r from-[#00cdc0] to-[#17a990] px-5 py-4 gap-6">
          <Link to="/" className="flex items-center gap-2 text-sm uppercase">
            <img src={chat} alt="chat" className="w-4 h-4 bg-transparent" />
            Let's Talk
          </Link>
          <div className="absolut w-[1px] h-[80px] bg-white" />
          <Link to="/" className="flex items-center gap-2 text-sm">
            <img src={profile} alt="chat" className="w-7 h-7" />
            <img src={arrDown} alt="arrdown" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
