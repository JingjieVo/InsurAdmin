import { useState, useEffect } from 'react';

interface ModalProps {
  initModal: boolean;
  onClose: () => void;
}

export default function Modal2(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(props.initModal);

  useEffect(() => {
    setIsOpen(props.initModal);
  }, [props.initModal]);

  const hiddenModal = () => {
    setIsOpen(false);
    props.onClose(); // Đóng modal từ component cha
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
          <div
            onClick={hiddenModal}
            className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15"
          >
            <span className="mx-auto inline-block">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  width="60"
                  height="60"
                  rx="30"
                  fill="#DC2626"
                ></rect>
                <path
                  d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z"
                  stroke="#DC2626"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
              Deactivate Your Account
            </h3>
            <p className="mb-10 font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="-mx-3 flex flex-wrap gap-y-4">
              <div className="w-full px-3 2xsm:w-1/2">
                <button
                  onClick={hiddenModal}
                  className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black hover:border-meta-1 hover:bg-meta-1 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-full px-3 2xsm:w-1/2">
                <button className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white hover:bg-opacity-90">
                  Deactivate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}