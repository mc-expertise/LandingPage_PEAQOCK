import React from 'react';
import iconInput from '../../assets/iconInputs.svg';
import ButtonForm from './ButtonForm';

const InputsForm = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-[60px] h-[60px] bg-[#1276821A] rounded-full flex items-center justify-center">
        <img src={iconInput} alt="" width={30} height={30} />
      </div>
      <input
        type="text"
        placeholder="Search by keyword"
        className="bg-[#E6EAF0] rounded-xl w-[1034px] py-[10px] px-[40px] focus:outline-none focus:text-[#8797AC] focus:bg-white focus:border-b-2 focus:border-[#127682]"
      />
      <ButtonForm />
    </div>
  );
};

export default InputsForm;
