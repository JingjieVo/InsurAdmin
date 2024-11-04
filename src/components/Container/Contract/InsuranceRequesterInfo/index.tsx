import { useState } from 'react';
import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';

// Define the interface for insurance requester information
interface InsuranceRequesterInfoData {
  fullName: string;
  gender: string;
  birthDate: string;
  idType: string;
  idNumber: string;
  address: string;
  phoneNumber: string;
  email: string;
  customerType: string;
}

export default function InsuranceRequesterInfo() {
  // Initialize the data within the component
  const [requesterInfo, setRequesterInfo] = useState<InsuranceRequesterInfoData>({
    fullName: 'Nguyen Van A',
    gender: 'Nam',
    birthDate: '19/04/2001',
    idType: 'CCCD',
    idNumber: '0512128214',
    address: '549, Duong Nguyen Duy Trinh, Phuong Truc Bach, Quan Ba Dinh, Thanh pho Ha Noi',
    phoneNumber: '0123456789',
    email: 'nguyenvana@gmail.com',
    customerType: 'Ca nhan',
  });

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Người yêu cầu bảo hiểm</h2>
        <div className="space-y-9">
          <div>
            <strong>Họ tên:</strong> <span>{requesterInfo.fullName}</span>
          </div>
          <div>
            <strong>Giới tính:</strong> <span>{requesterInfo.gender}</span>
          </div>
          <div>
            <strong>Ngày sinh:</strong> <span>{requesterInfo.birthDate}</span>
          </div>
          <div>
            <strong>Loại giấy tờ:</strong> <span>{requesterInfo.idType}</span>
          </div>
          <div>
            <strong>Mã định danh:</strong> <span>{requesterInfo.idNumber}</span>
          </div>
          <div>
            <strong>Địa chỉ:</strong> <span>{requesterInfo.address}</span>
          </div>
          <div>
            <strong>Số điện thoại:</strong> <span>{requesterInfo.phoneNumber}</span>
          </div>
          <div>
            <strong>Email:</strong> <span>{requesterInfo.email}</span>
          </div>
          <div>
            <strong>Loại KH:</strong> <span>{requesterInfo.customerType}</span>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}
