import Container from '../../Share/Container';
import ButtonLink from '@/components/ButtonLink';
import ProgramTable from './ProgramTable';

export default function Program() {
  return (
    <div>
      <div className="flex mb-4 justify-end">
        <ButtonLink title="Thêm" href="/product/program/add-program" />
      </div>
      <Container>
        <ProgramTable />
      </Container>
    </div>
  );
}
