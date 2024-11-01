
import Container from '../../Share/Container';
import ButtonLink from '@/components/ButtonLink';
import QuestionTable from './QuestionTable';

export default function Question() {
  return (
    <div>
      <div className="flex mb-4 justify-end">
        <ButtonLink title="Thêm" href="/product/question/add-question" />
      </div>
      <Container>
        <QuestionTable />
      </Container>
    </div>
  );
}
