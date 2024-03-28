import React from 'react';
import ContactUs from '../../components/footer/contactUs';
import AboutPeaqock from '../../components/footer/AboutPeaqock';
import Location from '../../components/footer/Location';

const Footer = () => {
  return (
    <div className="bg-[#E8EDF5] pt-[6rem] pb-[6rem] px-[8rem]">
      <div className="grid grid-cols-3 gap-6 text-[#585E66]">
        <ContactUs />
        <AboutPeaqock />
        <Location />
      </div>
      <p className="font-bold text-[18px] text-black whitespace-nowrap pt-[4rem] flex justify-center">
        Copyright © 2022 . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
