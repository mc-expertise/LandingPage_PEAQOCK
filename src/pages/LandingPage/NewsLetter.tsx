import { InputText } from 'primereact/inputtext';
import arrRigh from '../../assets/arroBtn.svg';
import Button from '../../components/ui/Button';

const NewsLetter = () => {
  return (
    <div className="PadddingLanding pt-[8rem] pb-[4rem] flex items-center justify-between">
      <h1 className="font-bold text-3xl uppercase relative">
        Newsletter{' '}
        <span className="absolute left-0 bottom-[-10px] w-[100px] h-[5px] bg-[#9F2241] rounded-lg"></span>
      </h1>
      <div className="p-inputgroup flex-1 relative max-w-[800px]">
        <InputText
          placeholder="Your email adress"
          className="bg-[#E3E7ED] p-3 rounded-full"
        />
        <Button
          img={arrRigh}
          className={`!p-3 !px-12 bg-gradient-to-br from-[#127682] to-[#20C7AB] text-white flex-row-reverse !absolute right-0 gap-3 `}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
