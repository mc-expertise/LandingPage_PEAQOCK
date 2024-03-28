import React from 'react';
import play from '../../assets/play.svg';
import Button from '../../components/ui/Button';
import next from '../../assets/next.svg';
import previous from '../../assets/previous.svg';
const BotSection = () => {
  return (
    <div className="relative z-20 text-white h-[35%] flex items-center">
      <div className="w-full bg-[#25252525] absolute inset-0 h-full backdrop-blur-sm" />
      <div className="relative z-10 flex items-center justify-between w-full px-[4rem] ">
        <div className="flex flex-col gap-3">
          <h1 className="text-[45px] uppercase">
            Manage <br /> Operations
          </h1>
          <div className="flex items-center justify-between gap-3">
            <Button
              className="text-[#127682] uppercase font-semibold w-[221px]"
              backgroundColor="white">
              Learn more
            </Button>
            <img src={play} alt="play" width={55} height={55} />
          </div>
        </div>
        <div className="w-[708px] flex flex-col gap-6">
          <div className="flex items-center justify-between border-b-2 py-2 ">
            <p className="text-2xl">01.</p>
            <div className="flex items-center gap-2">
              <img src={previous} alt="" />
              <img src={next} alt="" />
            </div>
          </div>
          <p className="w-[600px]">
            Discover market access rules, check regulatory compliance, latest
            customs duties, shipping requirements and other documentation.
            Africa-wide, harmonized, and aggregated trade and investment
            regulatory information i.e., Foreign Trade Regulations (e.g.,
            Customs procedures, certification, licensing, etc.) and Market
            Access (trade agreements, tariffs, and non-tariff measures etc.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotSection;
