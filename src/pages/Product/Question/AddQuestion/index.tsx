import ButtonLink from '@/components/ButtonLink';
import RichTextEditor from '@/components/Richeditor';
import Container from '@/components/Share/Container';
import { handleSubmit } from '@/helper/HandleSubmit';
import { useState } from 'react';

export default function AddQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [editorsData, setEditorsData] = useState<Record<string, string>>({
    question1: '', // Lưu giá trị của RichTextEditor đầu tiên
    question2: '', // Có thể thêm nhiều editor sau này
  });

  // Hàm để cập nhật dữ liệu của mỗi RichTextEditor dựa trên key
  const handleOnChange = (key: string, value: string) => {
    setEditorsData((prevData) => ({
      ...prevData, // Giữ nguyên các giá trị đã có
      [key]: value, // Cập nhật giá trị cho editor tương ứng với key
    }));
  };
  return (
    <div>
      <div className="lg:w-1/6 mb-5">
        <ButtonLink title='Quay lại' href="/product/question"/>
      </div>
      <Container>
        <div className="w-full rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
          <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            Thêm câu hỏi
          </h3>
          <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
          <form
            onSubmit={(e) => handleSubmit(e, editorsData)}
            className="flex flex-col gap-5.5 py-6.5 max-h-[1980px]"
          >
            <div>
              <label className="mb-3 block text-start text-black dark:text-white">
                Câu hỏi
              </label>
              <div>
                <RichTextEditor
                  key="question1"
                  value={editorsData.question1}
                  setValue={(value) => handleOnChange('question1', value)}
                />
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
            <div className="-mx-3 flex flex-wrap gap-y-4 justify-center">
              <div className="w-full px-3 2xsm:w-1/5">
                <input
                  type="submit"
                  value="Thêm"
                  className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white hover:bg-opacity-90 hover:cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
