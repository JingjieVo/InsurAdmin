import { useState } from 'react';
import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';

// Define the interface for insurance contract information
interface InsuranceContractInfoData {
  personalInsuranceNumber: string;
  groupInsuranceNumber: string;
  affinaPersonalContractNumber: string;
  affinaGroupContractNumber: string;
  insuranceCardNumber: string;
  insuranceContractCode: string;
  insuranceCompany: string;
  programName: string;
  insurancePlan: string;
  insuranceTerm: string;
  insuranceCycle: string;
  termDuration: string;
  startDate: string;
  paymentMethod: string;
  contractStatus: string;
}

export default function InsuranceContractInfo() {
  // Initialize the data within the component
  const [contractInfo, setContractInfo] = useState<InsuranceContractInfoData>({
    personalInsuranceNumber: '',
    groupInsuranceNumber: '',
    affinaPersonalContractNumber: '0aa05335ac0bc287c50192994dfafc24',
    affinaGroupContractNumber: '',
    insuranceCardNumber: 'AF9024P000521-UAT',
    insuranceContractCode: 'BMI',
    insuranceCompany: 'Nhà Tư Nhân',
    programName: 'Plan gói 10',
    insurancePlan: 'Tháng',
    insuranceTerm: 'Số năm/tháng/ngày',
    insuranceCycle: '00:00:59 - 15/12/2024',
    termDuration: '00:00:59 - 15/12/2024',
    startDate: '14:07:58 - 17/10/2024',
    paymentMethod: 'Mã giao dịch thanh toán',
    contractStatus: 'Đã duyệt',
  });

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin hợp đồng</h2>
        <div className="space-y-8">
          <div>
            <strong>Số HD NBH cá nhân:</strong> <span>{contractInfo.personalInsuranceNumber}</span>
          </div>
          <div>
            <strong>Số HD NBH nhóm:</strong> <span>{contractInfo.groupInsuranceNumber}</span>
          </div>
          <div>
            <strong>Số HD Affina cá nhân:</strong> <span>{contractInfo.affinaPersonalContractNumber}</span>
          </div>
          <div>
            <strong>Số HD Affina nhóm:</strong> <span>{contractInfo.affinaGroupContractNumber}</span>
          </div>
          <div>
            <strong>Số thẻ bảo hiểm:</strong> <span>{contractInfo.insuranceCardNumber}</span>
          </div>
          <div>
            <strong>Mã hợp đồng:</strong> <span>{contractInfo.insuranceContractCode}</span>
          </div>
          <div>
            <strong>Nhà bảo hiểm:</strong> <span>{contractInfo.insuranceCompany}</span>
          </div>
          <div>
            <strong>Chương trình:</strong> <span>{contractInfo.programName}</span>
          </div>
          <div>
            <strong>Gói bảo hiểm:</strong> <span>{contractInfo.insurancePlan}</span>
          </div>
          <div>
            <strong>Thời hạn bảo hiểm:</strong> <span>{contractInfo.insuranceTerm}</span>
          </div>
          <div>
            <strong>Chu kỳ bảo hiểm:</strong> <span>{contractInfo.insuranceCycle}</span>
          </div>
          <div>
            <strong>Thời gian tạo:</strong> <span>{contractInfo.startDate}</span>
          </div>
          <div>
            <strong>Hình thức thanh toán:</strong> <span>{contractInfo.paymentMethod}</span>
          </div>
          <div>
            <strong>Trạng thái hợp đồng:</strong> <span>{contractInfo.contractStatus}</span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}
