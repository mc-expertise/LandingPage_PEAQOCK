import NavBar from '../../components/ui/navBar';
import arrdown from '../../assets/arroDownHeader.svg';
import profile from '../../assets/iconprofile.svg';
import InputsForm from '../../components/ui/InputsForm';
import TableApp from '../../components/ui/Table';
import './tableStyle.css';

const TablePage = () => {
  return (
    <div className="mr-[6rem] ml-[15rem]">
      <div className="flex items-center gap-[30px] justify-end  py-[20px] mb-8 border-b-[#E3E3E3] border-b">
        <div className=" border-r-2 border-[#868686] px-[30px]">
          <NavBar className="text-[#127682] font-semibold" img={arrdown} />
        </div>
        <div className="flex items-center gap-2">
          <p className={`min-w-[105px] uppercase text-[#127682] font-semibold`}>
            user name
          </p>
          <img
            src={arrdown}
            alt="arrdown"
            className={`h-5 w-5 text-[#127682]`}
          />
          <img
            src={profile}
            alt="profile"
            className={`h-5 w-5 text-[#127682]`}
          />
        </div>
      </div>
      <InputsForm />
      <TableApp />
    </div>
  );
};

export default TablePage;
