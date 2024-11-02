import Container from '@/components/Share/Container';
import ContentWrapper from '@/components/Share/ContentWrapper';
import { useState } from 'react';

// Define the interface for guest information
interface GuestInfoData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  idNumber: string;
  phone: string;
  email: string;
  address: string;
}

export default function GuestInfo() {
  // Define the data within the component using the interface
  const [guestData, setGuestData] = useState<GuestInfoData>({
    fullName: 'Linh Nhi',
    dateOfBirth: '27/02/2014',
    gender: 'Nữ',
    idNumber: '100660002',
    phone: '84866085620',
    email: 'nhi@gmail.com',
    address: '549, Duong Nguyen Duy Trinh, Phuong Truc Bach, Quan Ba Dinh, Thanh pho Ha Noi',
  });

  return (
    <Container>
      <ContentWrapper>
        <h2 className="text-lg font-semibold mb-4">Thông tin đối tượng được bảo hiểm</h2>
        <div className="space-y-2">
          <div>
            <strong>Họ tên:</strong> <span className="border p-1">{guestData.fullName}</span>
          </div>
          <div>
            <strong>Ngày sinh:</strong> {guestData.dateOfBirth}
          </div>
          <div>
            <strong>Giới tính:</strong> {guestData.gender}
          </div>
          <div>
            <strong>CCCD:</strong> {guestData.idNumber}
          </div>
          <div>
            <strong>Số điện thoại:</strong> {guestData.phone}
          </div>
          <div>
            <strong>Email:</strong> {guestData.email}
          </div>
          <div>
            <strong>Địa chỉ:</strong> {guestData.address}
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
}
