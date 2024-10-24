
import QuestionTable from '@/components/Tables/QuestionTable';
import Container from '../../Share/Container';
import ButtonLink from '@/components/ButtonLink';


export default function Question() {

  return (
    <div>
      <div className="flex mb-4 justify-end">
        <ButtonLink title='Thêm' href='question/add-question'/>
      </div>
      <Container>
        <QuestionTable />
      </Container>
    </div>
  );
}
