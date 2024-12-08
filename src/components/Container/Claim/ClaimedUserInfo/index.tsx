import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import { ClaimDetail } from '@/types/claimType';

interface ClaimedUserInfoProps {
  data?: ClaimDetail | null;
}

export default function ClaimedUserInfo({ data }: ClaimedUserInfoProps) {
  if (!data) return null;

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin đối tượng nhận bồi thường</h2>
        <div className="space-y-2">
          <div>
            <strong>Tên ngân hàng:</strong> {data.bankName}
          </div>
          <div>
            <strong>Chi nhánh ngân hàng:</strong> {data.bankBranch}
          </div>
          <div>
            <strong>Chủ tài khoản:</strong> {data.bankNameOwner}
          </div>
          <div>
            <strong>Số tài khoản:</strong> {data.bankAccount}
          </div>
          <div>
            <strong>Mối quan hệ (với người được BH):</strong> Bản thân
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}

