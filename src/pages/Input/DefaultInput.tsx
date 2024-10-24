import React from 'react';

interface DefaultInputProps {
  label: string;
  placeholder: string;
  name: string;
  type: string;
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
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  );
};

export default DefaultInput;
