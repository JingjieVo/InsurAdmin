import React from 'react';

interface DefaultInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  name: string;
}

const DefaultInput: React.FC<DefaultInputProps> = (
  props: DefaultInputProps,
) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-black dark:text-white">
        {props.label}
      </label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default DefaultInput;
