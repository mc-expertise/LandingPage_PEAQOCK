import InputsForm from '../../components/ui/InputsForm';
import { Select } from 'antd';
import '../../style.css';
const { Option } = Select;

const FormPage = () => {
  // const [selectedCities, setSelectedCities] = useState(null);
  const items = [
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 3' },
    { name: 'item 4' },
    { name: 'item 5' },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="w-full h-screen flex mt-[8rem] flex-col items-center gap-8">
      <InputsForm />
      <InputsForm />
      <div className="card flex justify-content-center">
        <Select
          placeholder="List 2"
          className="w-[300px] h-[50px]"
          onChange={handleChange}
          dropdownStyle={{ backgroundColor: '#E6EAF0' }}>
          {items.map((item) => (
            <Option value={item.name} key={item.name}>
              {item.name}
            </Option>
          ))}
          {/* Add more options as needed */}
        </Select>
      </div>
    </div>
  );
};

export default FormPage;
