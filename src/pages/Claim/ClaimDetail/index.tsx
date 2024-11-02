import { useParams } from 'react-router-dom';
import ClaimInfo from './ClaimInfo';
import ClaimedUserInfo from './ClaimedUserInfo';
import ContractInfo from './ContractInfo';
import GuestInfo from './GuestInfo';

export default function ClaimDetail() {
  const { id } = useParams();

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <ContractInfo />
      <GuestInfo />
      <ClaimInfo />
      <ClaimedUserInfo />
    </div>
  );
}
