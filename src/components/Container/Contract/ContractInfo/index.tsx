import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import type { ContractDetail } from '@/types/contractType';

interface InsuranceContractInfoProps {
  contractDetail: ContractDetail;
}

export default function InsuranceContractInfo({ contractDetail }: InsuranceContractInfoProps) {
  const {
    id,
    status,
    startDate,
    endDate,
    price,
    contractDetail: subDetail,
  } = contractDetail;

  const getStatusText = (status: number) => {
    switch (status) {
      case 0: return 'Chờ duyệt';
      case 1: return 'Đã duyệt';
      case 2: return 'Từ chối';
      default: return 'Không xác định';
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin hợp đồng</h2>
        <div className="space-y-8">
          <div>
            <strong>Số HD NBH cá nhân:</strong> <span>{id}</span>
          </div>
          <div>
            <strong>Mã hợp đồng:</strong> <span>{id}</span>
          </div>
          <div>
            <strong>Nhà bảo hiểm:</strong> <span>{subDetail.productName}</span>
          </div>
          <div>
            <strong>Chương trình:</strong> <span>{subDetail.productName}</span>
          </div>
          <div>
            <strong>Gói bảo hiểm:</strong> <span>{subDetail.productName}</span>
          </div>
          <div>
            <strong>Thời hạn bảo hiểm:</strong> <span>{`${startDate} - ${endDate}`}</span>
          </div>
          <div>
            <strong>Chu kỳ bảo hiểm:</strong> <span>{`${startDate} - ${endDate}`}</span>
          </div>
          <div>
            <strong>Thời gian tạo:</strong> <span>{contractDetail.createdAt}</span>
          </div>
          <div>
            <strong>Hình thức thanh toán:</strong> <span>N/A</span>
          </div>
          <div>
            <strong>Trạng thái hợp đồng:</strong> <span>{getStatusText(status)}</span>
          </div>
          <div>
            <strong>Giá:</strong> <span>{price}</span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}

