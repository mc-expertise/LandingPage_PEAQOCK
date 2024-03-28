import React from 'react';
import TitleSection from '../../components/ui/TitleSection';
import Button from '../../components/ui/Button';
import arrowBTN from '../../assets/arroBtn.svg';
const Membership = () => {
  return (
    <div className="flex justify-center text-center py-[8rem]">
      <div className="w-[900px] flex flex-col gap-7">
        <TitleSection
          title="PEAQOCK Membership Packages"
          subTitle="Membership"
          className="text-[#414141]"
        />
        <p className="text-[#585E66]">
          This page will highlight the different membership packages and the
          benefits and costs of each package. The initial plans to be configured
          are as presented below. The table should be configurable to update the
          sections with different feature, benefits and costs from time to time.
        </p>
        <Button
          img={arrowBTN}
          className="mx-auto uppercase font-bold !text-[#127682] !bg-[#12778214] flex-row-reverse gap-2 whitespace-nowrap !mt-5 !text-[20px] !py-[10px] !px-[40px]">
          Packages details
        </Button>
      </div>
    </div>
  );
};

export default Membership;
