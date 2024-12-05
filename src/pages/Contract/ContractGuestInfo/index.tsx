import Loader from '@/common/Loader';
import ButtonLink from '@/components/ButtonLink';
import InsuranceRequesterInfo from '@/components/Container/Contract/InsuranceRequesterInfo';
import { getContractDetail } from '@/services/contractService';
import type { ContractDetail } from '@/types/contractType';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ContractGuestInfo() {
  const { id } = useParams();
  const [contractDetail, setContractDetail] = useState<ContractDetail | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContractDetail = async () => {
      if (!id) return;
      try {
        const response = await getContractDetail(parseInt(id));
        setContractDetail(response.data);
      } catch (err) {
        setError('Failed to fetch contract details');
        console.error('Error fetching contract detail:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContractDetail();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!contractDetail) return <div>No contract details found</div>;

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
      <InsuranceRequesterInfo contractDetail={contractDetail} />
    </div>
  );
}
