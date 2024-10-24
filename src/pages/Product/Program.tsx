import Container from '@/components/Container';
import DefaultInput from '../Input/DefaultInput';
import ContentWrapper from '@/components/Container/ContentWrapper';
import { handleSubmit } from '@/helper/HandleSubmit';

export default function Program() {
  return (
    <Container>
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Thông tin chương trình
        </h3>
      </div>
      <ContentWrapper>
        <form onSubmit={handleSubmit}>
          <DefaultInput
            type="text"
            name="name"
            label="Tên chương trình"
            placeholder="Nhập tên chương trình"
          />
          <DefaultInput
            type="text"
            name="email"
            label="Email"
            placeholder="Nhập Email"
          />
          <input
            type="submit"
            className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white hover:bg-opacity-90"
          />
        </form>
      </ContentWrapper>
    </Container>
  );
}
