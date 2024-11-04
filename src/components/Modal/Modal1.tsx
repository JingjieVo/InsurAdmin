import { useState, useEffect } from 'react';

interface ModalProps {
  initModal: boolean;
  onClose: () => void;
  messageTitle: string;
  message: string;
  children: React.ReactNode;
}

export default function Modal1(props: ModalProps) {
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
        <div className="absolute left-0 top-0 z-1000 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
          <div className="w-full max-w-[1200px] rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
            <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
              {props.messageTitle}
            </h3>
            <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
            {props.children}
            <div className="-mx-3 flex flex-wrap gap-y-4">
              <div className="w-full px-3 2xsm:w-1/2">
                <button
                  onClick={hiddenModal}
                  className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black hover:border-meta-1 hover:bg-meta-1 hover:text-white"
                >
                  Hủy
                </button>
              </div>
              <div className="w-full px-3 2xsm:w-1/2">
                <button className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white hover:bg-opacity-90">
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
