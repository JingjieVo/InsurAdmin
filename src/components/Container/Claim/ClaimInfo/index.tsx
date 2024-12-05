import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import { ClaimDetail } from '@/types/claimType';

interface ClaimInfoProps {
  data?: ClaimDetail | null;
}

export default function ClaimInfo({ data }: ClaimInfoProps) {
  if (!data) return null;

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin hồ sơ bồi thường</h2>
        <div className="space-y-2">
          <div>
            <strong>Ngày gửi:</strong> {new Date().toLocaleDateString()}
          </div>
          <div>
            <strong>Ngày cập nhật:</strong> {new Date().toLocaleDateString()}
          </div>
          <div>
            <strong>Tên người xử lý:</strong> Bảo Minh
          </div>
          <div>
            <strong>Email người xử lý:</strong> baominhinsur@gmail.com
          </div>
          <div>
            <strong>Trạng thái:</strong> {data.status}
          </div>
          <div>
            <strong>ID bồi thường:</strong> {data.id}
          </div>
          <div>
            <strong>Ngày khám/nhập viên:</strong> {new Date().toLocaleDateString()}
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}

