import ButtonRoundedSm from '@/components/Button/ButtonRoundedSm';
import QuestionTable from '@/components/Tables/QuestionTable';
import { useState } from 'react';
import Container from '..';
import QuestionModal from './QuestionModal';

export default function QuestionContent() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  return (
    <div>
      <div className="flex mb-4 justify-end">
        <ButtonRoundedSm onClick={() => setAddModalOpen(true)} title="Thêm" />
      </div>
      <Container>
        <QuestionTable />
      </Container>
      <QuestionModal initModal={addModalOpen} title='Tạo câu hỏi' onClose={() => setAddModalOpen(false)}/>
    </div>
  );
}
