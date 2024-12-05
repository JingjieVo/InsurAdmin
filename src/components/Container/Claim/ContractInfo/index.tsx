import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import { ClaimDetail } from '@/types/claimType';

interface ContractInfoProps {
  data?: ClaimDetail | null;
}

export default function ContractInfo({ data }: ContractInfoProps) {
  if (!data) return null;

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">
          Thông tin hợp đồng cần bồi thường
        </h2>
        <div className="space-y-2">
          <div>
            <strong>Số hợp đồng:</strong> {data.contractId}
          </div>
          <div>
            <strong>Số hợp đồng nhà bảo hiểm:</strong> 4
          </div>
          <div>
            <strong>Số thẻ:</strong> N/A
          </div>
          <div>
            <strong>Tên chủ hợp đồng:</strong> Bảo Minh
          </div>
          <div>
            <strong>Nhà bảo hiểm:</strong> Bảo Minh
          </div>
          <div>
            <strong>Tên chương trình:</strong> BH Sức Khỏe
          </div>
          <div>
            <strong>Tên gói bảo hiểm:</strong> An Tâm Toàn Diện
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}

