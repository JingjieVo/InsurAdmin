import ButtonLink from '@/components/ButtonLink';
import InsuranceRequesterInfo from '@/components/Container/Contract/InsuranceRequesterInfo';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ContractGuestInfo() {
  const { id } = useParams();
  return (
    <div>
      <div className="flex justify-between gap-2 mb-2">
        <ButtonLink title="Quay lại" href="/contract" />
        <div className="flex gap-2">
          <ButtonLink
            title="Thông tin cá nhân"
            href={`/contract/detail/guestinfo/${id}`}
            actived
          />
          <ButtonLink
            title="Thông tin gói bảo hiểm"
            href={`/contract/detail/contractinfo/${id}`}
          />
        </div>
      </div>
      <InsuranceRequesterInfo />
    </div>
  );
}
