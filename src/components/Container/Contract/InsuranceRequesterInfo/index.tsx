import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import type { ContractDetail } from '@/types/contractType';

interface InsuranceRequesterInfoProps {
  contractDetail: ContractDetail;
}

export default function InsuranceRequesterInfo({ contractDetail }: InsuranceRequesterInfoProps) {
  const {
    name,
    gender,
    dob,
    identification,
    address,
    phone,
    email,
  } = contractDetail;

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Người yêu cầu bảo hiểm</h2>
        <div className="space-y-9">
          <div>
            <strong>Họ tên:</strong> <span>{name}</span>
          </div>
          <div>
            <strong>Giới tính:</strong> <span>{gender === 'MALE' ? 'Nam' : 'Nữ'}</span>
          </div>
          <div>
            <strong>Ngày sinh:</strong> <span>{dob}</span>
          </div>
          <div>
            <strong>Loại giấy tờ:</strong> <span>CCCD</span>
          </div>
          <div>
            <strong>Mã định danh:</strong> <span>{identification}</span>
          </div>
          <div>
            <strong>Địa chỉ:</strong> <span>{address}</span>
          </div>
          <div>
            <strong>Số điện thoại:</strong> <span>{phone}</span>
          </div>
          <div>
            <strong>Email:</strong> <span>{email}</span>
          </div>
          <div>
            <strong>Loại KH:</strong> <span>Cá nhân</span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}

