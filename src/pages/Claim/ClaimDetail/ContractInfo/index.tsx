import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';

export default function ContractInfo() {
  // Example data; replace with actual data or props as needed
  const contractData = {
    affinaContractNumber: '82b7badf1f66bb407ecb01928a845bb3',
    insurerContractNumber: 'AFFLU123',
    sothe: '',
    contractHolderName: 'CONG TY TEST HOM NAY',
    insurerName: 'TEST1410',
    programName: 'Tro Cap Toan Dien 1',
    insurancePackageName: 'Toan Dien',
  };

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">
          Thông tin hợp đồng cần bồi thường
        </h2>
        <div className="space-y-2">
          <div>
            <strong>Số hợp đồng Affina:</strong>{' '}
            {contractData.affinaContractNumber}
          </div>
          <div>
            <strong>Số hợp đồng nhà bảo hiểm:</strong>{' '}
            {contractData.insurerContractNumber}
          </div>
          <div>
            <strong>Sothe:</strong> {contractData.sothe || 'N/A'}
          </div>
          <div>
            <strong>Tên chủ hợp đồng:</strong> {contractData.contractHolderName}
          </div>
          <div>
            <strong>Nhà bảo hiểm:</strong> {contractData.insurerName}
          </div>
          <div>
            <strong>Tên chương trình:</strong> {contractData.programName}
          </div>
          <div>
            <strong>Tên gói bảo hiểm:</strong>{' '}
            <span className="border p-1">
              {contractData.insurancePackageName}
            </span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}
