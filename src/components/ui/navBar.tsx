import React from 'react';
import { listLinks } from '../../data/listLinks.json';
import arrDown from '../../assets/arroDown.svg';

type NavBarProps = {
  className?: string;
  img?: string;
};

const NavBar = ({ className, img }: NavBarProps) => {
  return (
    <>
      <ul className="flex items-center gap-6">
        {listLinks.map((link) => (
          <div key={link.name} className="flex items-center gap-2">
            <li className={`min-w-[105px] uppercase ${className}`}>
              {link.name}
            </li>
            <img
              src={img ? img : arrDown}
              alt="arrdown"
              className={`h-5 w-5 ${className}`}
            />
          </div>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
