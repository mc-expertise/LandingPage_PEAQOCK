import React from 'react';
import loca from '../../assets/afric.svg';
import btnSupport from '../../assets/btnSupport.svg';
import arrtop from '../../assets/arrtop.svg';
import Button from '../ui/Button';

const Location = () => {
  return (
    <div className="relative flex flex-col gap-6 ml-20">
      <div className="flex items-center gap-4 absolute top-[-52px] right-0">
        <Button
          img={btnSupport}
          className={`!p-3 !px-6 bg-gradient-to-t from-[#F7AE28] to-[#FFDE82] text-white gap-3 font-bold `}>
          Support
        </Button>
        <Button
          img={arrtop}
          classBtn="!mr-0 !w-[30px] !h-[30px]"
          className={`bg-gradient-to-b from-[#F7AE28] to-[#FFDE82] text-white !rounded-full !p-2`}></Button>
      </div>
      <h1 className="text-[#127682] font-bold text-[24px]">Locations</h1>
      <img src={loca} alt="loca" width={205} height={218} />
    </div>
  );
};

export default Location;
