import React, { useState } from 'react';
import ButtonLink from '@/components/ButtonLink';
import RichTextEditor from '@/components/Richeditor';
import Container from '@/components/Share/Container';
import { createCategory } from '@/services/categoryService';

export default function AddProgram() {
  const [programName, setProgramName] = useState('');
  const [programDescription, setProgramDescription] = useState('');
  const [editorsData, setEditorsData] = useState<Record<string, string>>({
    question: '',
  });

  const handleOnChange = (key: string, value: string) => {
    setEditorsData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement the actual submission logic here
    console.log({
      name: programName,
      description: programDescription,
      question: editorsData.question,
    });
    await createCategory({
      name: programName,
      description: programDescription,
      // question: editorsData.question,
    })
    // Reset form after submission
    setProgramName('');
    setProgramDescription('');
    setEditorsData({ question: '' });
  };

  return (
    <div>
      <div className="lg:w-1/6 mb-5">
        <ButtonLink title='Quay lại' href="/product/program"/>
      </div>
      <Container>
        <div className="w-full rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
          <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            Thêm chương trình
          </h3>
          <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5.5 py-6.5 max-h-[1980px]"
          >
            <div>
              <label className="mb-3 block text-start text-black dark:text-white">
                Tên chương trình
              </label>
              <input
                type="text"
                value={programName}
                onChange={(e) => setProgramName(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="mb-3 block text-start text-black dark:text-white">
                Mô tả chương trình
              </label>
              <textarea
                value={programDescription}
                onChange={(e) => setProgramDescription(e.target.value)}
                rows={4}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="mb-3 block text-start text-black dark:text-white">
                Câu hỏi
              </label>
              <div>
                <RichTextEditor
                  key="question"
                  value={editorsData.question}
                  setValue={(value) => handleOnChange('question', value)}
                />
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

