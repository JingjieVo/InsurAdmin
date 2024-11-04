import { useParams } from 'react-router-dom';
import ClaimInfo from '../../../components/Container/Claim/ClaimInfo';
import ClaimedUserInfo from '../../../components/Container/Claim/ClaimedUserInfo';
import ContractInfo from '../../../components/Container/Claim/ContractInfo';
import GuestInfo from '../../../components/Container/Claim/GuestInfo';
import ButtonLink from '@/components/ButtonLink';

export default function ClaimDetail() {
  const { id } = useParams();

  return (
    <div>
      <div className='mb-4'>
        <ButtonLink title="Quay lại" href="/claim" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <ContractInfo />
        <GuestInfo />
        <ClaimInfo />
        <ClaimedUserInfo />
      </div>
    </div>
  );
}
