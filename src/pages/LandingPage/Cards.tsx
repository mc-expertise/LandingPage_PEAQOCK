import React from 'react';
import smile from '../../assets/smile.svg';
import clock from '../../assets/clock.svg';
import clo from '../../assets/clo.svg';
import secur from '../../assets/secur.svg';
import Button from '../../components/ui/Button';

const data = [
  {
    title: 'basic',
    icon: smile,
    notBtn: 'FREE',
    colorBt: ' bg-gradient-to-r !py-4 from-[#127682] to-[#20C7AB]',
    color: '#127682',
  },
  {
    title: 'gold',
    icon: secur,
    notBtn: 'FREE',
    colorBt: ' bg-gradient-to-r !py-4 from-[#F7AE28] to-[#FFDE82]',
    color: '#F7AE28',
  },
  {
    title: 'Standard',
    icon: clock,
    notBtn: '$ 1,500',
    colorBt: 'bg-gradient-to-r !py-4 from-[#388CBA] to-[#4BB1E9]',
    color: '#388CBA',
  },
  {
    title: 'Platinum',
    icon: clo,
    notBtn: '$ 5,000',
    colorBt: 'bg-gradient-to-r !py-4 from-[#5339DB] to-[#7B61FF]',
    color: '#7B61FF',
  },
];

const Cards = () => {
  return (
    <div className="grid gap-14 PadddingLanding grid-cols-2 pb-[8rem] pt-[4rem]">
      {data.map((card) => (
        <div className="flex items-center gap-5" key={card.title}>
          <div className="bg-[#EEF1F8] w-[100px] h-[100px] flex items-center justify-center rounded-2xl">
            <img src={card.icon} alt="" width={50} height={50} />
          </div>
          <div className="w-[330px]">
            <h1
              className={`text-3xl capitalize font-bold`}
              style={{ color: card.color }}>
              {card.title}
            </h1>
            <p className="text-[#585E66]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              lectus pulvinar massa quam mollis at luctus nunc
            </p>
          </div>
          <Button
            note={card.notBtn}
            className={`mx-auto !text-[14px] capitalize font-medium text-white mt-4 gap-2 whitespace-nowrap !rounded-lg ${card.colorBt} `}>
            View Details
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
