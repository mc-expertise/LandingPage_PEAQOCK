import React from 'react';
import TitleSection from '../../components/ui/TitleSection';
import Button from '../../components/ui/Button';

const rectangles = [
  { width: '250px', bgPosition: '0% 0%' },
  { width: '96px', bgPosition: '47% 0%' },
  { width: '82px', bgPosition: '63% 0%' },
  { width: '68px', bgPosition: '77% 0%' },
  { width: '55px', bgPosition: '89% 0%' },
  { width: '45px', bgPosition: '100% 0%' },
];

const AboutUs = () => {
  return (
    <div className="flex items-center justify-between py-14 PadddingLanding">
      <div className="w-[600px] flex flex-col gap-8">
        <TitleSection
          title="PEAQOCK is a member driven network"
          subTitle="About Us"
          className="max-w-[510px]"
        />
        <p className="text-[#585E66] text-[16px] leading-8">
          The purpose of TRADAR Club is to be a network of international
          businesses and executives dedicated to transforming Africa through the
          vehicles of trade and investment. TRADAR Club Members are global
          industry leaders, African corporates, intergovernmental organisations,
          policy makers and other influential stakeholders committed to the
          shared objective of unlocking growth and development for the African
          continent
        </p>
        <Button className="uppercase font-semibold w-[221px] !bg-[#127682] text-white mt-4">
          Learn More
        </Button>
      </div>
      <div className="flex items-center gap-6">
        {rectangles.map((rectangle, index) => (
          <div
            key={index}
            className={`bg-[url('/Rectangle.png')] h-[405px] rounded-lg`}
            style={{
              width: rectangle.width,
              backgroundPosition: rectangle.bgPosition,
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
