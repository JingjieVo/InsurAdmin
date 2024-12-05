import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import { ClaimDetail } from '@/types/claimType';

interface GuestInfoProps {
  data?: ClaimDetail | null;
}

export default function GuestInfo({ data }: GuestInfoProps) {
  if (!data) return null;

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin đối tượng được bảo hiểm</h2>
        <div className="space-y-2">
          <div>
            <strong>Họ tên:</strong> {data.name}
          </div>
          <div>
            <strong>Ngày sinh:</strong> 03/10/2003
          </div>
          <div>
            <strong>Giới tính:</strong> Nam
          </div>
          <div>
            <strong>CCCD:</strong> 206345943
          </div>
          <div>
            <strong>Số điện thoại:</strong> {data.phone}
          </div>
          <div>
            <strong>Email:</strong> {data.email}
          </div>
          <div>
            <strong>Địa chỉ:</strong> 29 Dân Tộc, quận Tân Phú, phường Tân Thành, TP. Hồ Chí Minh
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}

