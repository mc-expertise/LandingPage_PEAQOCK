import React from 'react';
import Button from '../../components/ui/Button';
import ChartService from '../../components/charts/ChartService';
import TitleSection from '../../components/ui/TitleSection';

const Services = () => {
  return (
    <div className="w-full h-[1000px] bg-cover bg-center relative flex justify-center items-center">
      <img
        src="/servicesbg.png"
        alt=""
        className="absolute inset-0 w-full h-full -z-10"
      />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6 w-[600px]">
          <TitleSection
            title="Simple,"
            titleTrad="Trade"
            subTitle="Our Services"
          />
          <p className="text-[#474747] font-light text-lg">
            Discover a world of trade opportunities in one place with detailed
            information about imports, market dynamics, tariffs, regulatory
            requirements, potential buyers and more.
          </p>
          <Button className="font-semibold w-fit bg-gradient-to-r from-[#25937E] to-[#20C7AB] text-white mt-4 !py-[10px] !px-[40px] text-[20px]">
            Discover Now
          </Button>
        </div>

        <ChartService />
      </div>
    </div>
  );
};

export default Services;
