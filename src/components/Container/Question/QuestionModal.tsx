import RichTextEditor from '@/components/Richeditor';
import { handleSubmit } from '@/helper/HandleSubmit';
import { useState, useEffect } from 'react';

interface ModalProps {
  initModal: boolean;
  onClose: () => void;
  title: string;
}

export default function QuestionModal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(props.initModal);
  const [selectedAnswer, setSelectedAnswer] = useState('');
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
              {props.title}
            </h3>
            <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5.5 py-6.5 max-h-[1980px]"
            >
              <div>
                <label className="mb-3 block text-start text-black dark:text-white">
                  Câu hỏi
                </label>
                <div>
                  <RichTextEditor />
                </div>
              </div>
              <div className="mb-5.5">
                <label className="mb-4.5 block text-sm font-medium text-start text-black dark:text-white">
                  Câu trả lời đúng
                </label>
                <div className="flex flex-wrap items-center gap-5">
                  <div>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="answer"
                        value="yes"
                        checked={selectedAnswer === 'yes'} // Kiểm tra nếu "yes" được chọn
                        onChange={() => setSelectedAnswer('yes')} // Cập nhật trạng thái
                      />
                      <span>Có</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="answer"
                        value="no"
                        checked={selectedAnswer === 'no'} // Kiểm tra nếu "no" được chọn
                        onChange={() => setSelectedAnswer('no')} // Cập nhật trạng thái
                      />
                      <span>Không</span>
                    </label>
                  </div>
                </div>
              </div>
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
                  <input
                    type="submit"
                    className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white hover:bg-opacity-90"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
