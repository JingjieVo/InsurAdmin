import { useState } from 'react';

export default function FormPro() {
  const [isChecked, setIsChecked] = useState('');

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="p-6.5">
        <div className="mb-5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              First name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Last name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Phone
            </label>
            <input
              type="text"
              placeholder="(321) 5555-0115"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mb-5.5">
          <label className="mb-4.5 block text-sm font-medium text-black dark:text-white">
            Select option
          </label>

          <div className="flex flex-wrap items-center gap-5.5">
            <div>
              <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                <input
                  className="sr-only"
                  type="radio"
                  name="roleSelect"
                  id="Graphics"
                  onChange={() => setIsChecked('Graphics')}
                />
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    isChecked === 'Graphics' ? 'border-primary' : 'border-body'
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-primary ${
                      isChecked === 'Graphics' ? 'flex' : 'hidden'
                    }`}
                  ></span>
                </span>
                Graphics Design
              </label>
            </div>

            <div>
              <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                <input
                  className="sr-only"
                  type="radio"
                  name="roleSelect"
                  id="Web"
                  onChange={() => setIsChecked('Web')}
                />
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    isChecked === 'Web' ? 'border-primary' : 'border-body'
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-primary ${
                      isChecked === 'Web' ? 'flex' : 'hidden'
                    }`}
                  ></span>
                </span>
                Web Development
              </label>
            </div>

            <div>
              <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                <input
                  className="sr-only"
                  type="radio"
                  name="roleSelect"
                  id="Logo"
                  onChange={() => setIsChecked('Logo')}
                />
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    isChecked === 'Logo' ? 'border-primary' : 'border-body'
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-primary ${
                      isChecked === 'Logo' ? 'flex' : 'hidden'
                    }`}
                  ></span>
                </span>
                Logo Design
              </label>
            </div>

            <div>
              <label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white">
                <input
                  className="sr-only"
                  type="radio"
                  name="roleSelect"
                  id="Others"
                  onChange={() => setIsChecked('Others')}
                />
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    isChecked === 'Others' ? 'border-primary' : 'border-body'
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-primary ${
                      isChecked === 'Others' ? 'flex' : 'hidden'
                    }`}
                  ></span>
                </span>
                Others
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Message
          </label>
          <textarea
            rows={6}
            placeholder="Type your message"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>

        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
          Send Message
        </button>
      </div>
    </div>
  );
}
