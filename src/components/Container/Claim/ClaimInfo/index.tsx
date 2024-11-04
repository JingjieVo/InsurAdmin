import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import { useState } from 'react';

// Define the interface for claim file information
interface ClaimFileInfoData {
  submissionDate: string;
  updateDate: string;
  handlerName: string;
  handlerEmail: string;
  status: string;
  claimId: string;
  examDate: string;
}

export default function ClaimFileInfo() {
  // Initialize the data within the component
  const [claimFileData, setClaimFileData] = useState<ClaimFileInfoData>({
    submissionDate: '18/10/2024',
    updateDate: '18/10/2024',
    handlerName: 'Tên người xử lý',
    handlerEmail: 'Email người xử lý',
    status: 'Đang xử lý',
    claimId: '37d5b1b70b06bdec8bb401929f3a22eb',
    examDate: '18/10/2024',
  });

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin hồ sơ bồi thường</h2>
        <div className="space-y-2">
          <div>
            <strong>Ngày gửi:</strong> <span>{claimFileData.submissionDate}</span>
          </div>
          <div>
            <strong>Ngày cập nhật:</strong> <span>{claimFileData.updateDate}</span>
          </div>
          <div>
            <strong>Tên người xử lý:</strong> {claimFileData.handlerName}
          </div>
          <div>
            <strong>Email người xử lý:</strong> {claimFileData.handlerEmail}
          </div>
          <div>
            <strong>Trạng thái:</strong> {claimFileData.status}
          </div>
          <div>
            <strong>ID bồi thường:</strong> {claimFileData.claimId}
          </div>
          <div>
            <strong>Ngày khám/nhận viên:</strong> <span>{claimFileData.examDate}</span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}
