import Button from './Button';
import search from '../../assets/search.svg';

const ButtonForm = () => {
  return (
    <Button
      img={search}
      className=" bg-gradient-to-tr from-[#20C7AB] to-[#127682] text-white px-[40px] py-[10px] text-[20px] uppercase text-bold gap-6 w-[210px]">
      Search
    </Button>
  );
};

export default ButtonForm;
