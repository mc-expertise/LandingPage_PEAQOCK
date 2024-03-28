import { statistics } from '../../data/statistics.json';
const Statistic = () => {
  return (
    <div className="bg-[#E6EAF0] flex items-center justify-between px-[16rem] py-[2rem] ">
      {statistics.map((stat) => (
        <div key={stat.name} className="flex flex-col gap-2 items-center">
          <p className="text-gray-500 text-[40px] font-bold">+{stat.number}</p>
          <p className="text-[#99A5B5] capitalize">{stat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistic;
