import Container from '@/components/Container';
import React, { useState } from 'react';
import DefaultInput from '../Input/DefaultInput';
import ContentWrapper from '@/components/Container/ContentWrapper';

export default function Program() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Thêm các input khác nếu cần
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("target", e.target.value)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <Container>
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Thông tin chương trình
        </h3>
      </div>
      <ContentWrapper>
        <DefaultInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Tên chương trình"
          placeholder="Nhập tên chương trình"
        />
        <DefaultInput
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          placeholder="Nhập Email"
        />
      </ContentWrapper>
    </Container>
  );
}
