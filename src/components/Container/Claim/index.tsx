import { useParams } from 'react-router-dom';
import ClaimTable from './ClaimTable';
import Container from '@/components/Share/Container';

export default function ClaimContent() {
  const { id } = useParams();
  return (
    <div>
      <Container>
        <ClaimTable />
      </Container>
    </div>
  );
}
