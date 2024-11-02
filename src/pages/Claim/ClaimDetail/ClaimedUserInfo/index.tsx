import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import { useState } from 'react';

// Define the interface for beneficiary information
interface BeneficiaryInfoData {
  bankName: string;
  bankBranch: string;
  accountHolder: string;
  accountNumber: string;
  relationship: string;
}

export default function BeneficiaryInfo() {
  // Initialize the data within the component
  const [beneficiaryData, setBeneficiaryData] = useState<BeneficiaryInfoData>({
    bankName: 'Ngân Hàng Nhà Nước (SBV)',
    bankBranch: 'nsa',
    accountHolder: 'An',
    accountNumber: '85454',
    relationship: 'Bản thân',
  });

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin đối tượng nhận bồi thường</h2>
        <div className="space-y-2">
          <div>
            <strong>Tên ngân hàng:</strong> {beneficiaryData.bankName}
          </div>
          <div>
            <strong>Chi nhánh ngân hàng:</strong> <span className="border p-1">{beneficiaryData.bankBranch}</span>
          </div>
          <div>
            <strong>Chủ tài khoản:</strong> {beneficiaryData.accountHolder}
          </div>
          <div>
            <strong>Số tài khoản:</strong> {beneficiaryData.accountNumber}
          </div>
          <div>
            <strong>Mối quan hệ (với người được BH):</strong> <span className="border p-1">{beneficiaryData.relationship}</span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}
