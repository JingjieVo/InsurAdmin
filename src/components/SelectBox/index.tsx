import { useState } from 'react';

import ArrowDownIcon from '../Icons/ArrowDownIcon';
import GlobalIcon from '../Icons/GlobalIcon';

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  onSelect: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelect(value); // Pass selected value to parent component
  };

  return (
    <div className="relative z-20 bg-white dark:bg-form-input">
      <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
        <GlobalIcon />
      </span>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-16 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input text-black dark:text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-body dark:text-bodydark self-center">
            {option.label}
          </option>
        ))}
      </select>
      <ArrowDownIcon />
    </div>
  );
};

export default SelectBox;
