import SelectBox from '@/components/SelectBox';
import { useState } from 'react';

interface DataItem {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
}
type SearchField = keyof DataItem;

const QuestionTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchField, setSearchField] = useState<SearchField>('id');
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      id: '1',
      question: '1',
      answer: 'Designer',
      createdAt: '25 Nov, 1977',
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item[searchField]?.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleSearch = (e: any) => setSearchValue(e.target.value);
  const handleEntriesChange = (e: any) => setEntriesPerPage(e.target.value);

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  return (
    <section className="data-table-common p-10 rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between px-8 pb-4">
        <div className="flex flex-row w-1/2 gap-2">
          <input
            type="text"
            className="w-1/3 rounded-md border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="Tìm kiếm..."
            value={searchValue}
            onChange={handleSearch}
          />
          <div className="w-2/3 flex flex-row gap-2 items-center">
            <span>Tìm theo:</span>
            <SelectBox
              options={[
                { value: 'id', label: 'ID' },
                { value: 'question', label: 'Câu hỏi' },
              ]}
              onSelect={(value) => setSearchField(value as SearchField)}
            />
          </div>
        </div>
        <div className="flex items-center font-medium">
          <select
            className="bg-transparent pl-2"
            value={entriesPerPage}
            onChange={handleEntriesChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <p className="pl-2 text-black dark:text-white">dòng trên một trang</p>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="datatable-table datatable-one w-full table-auto border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8">
          <thead>
            <tr className="border-t border-stroke dark:border-strokedark">
              <th className="text-center p-3">ID</th>
              <th className="text-center p-3">Câu hỏi</th>
              <th className="text-center p-3">Câu trả lời đúng</th>
              <th className="text-center p-3">Ngày tạo</th>
              {/* <th className="text-center p-3">Address</th>
              <th className="text-center p-3">Status</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredData
              .slice(
                (currentPage - 1) * entriesPerPage,
                currentPage * entriesPerPage,
              )
              .map((item, index) => (
                <tr key={index} className=" dark:border-strokedark">
                  <td className="text-center p-5">{item.id}</td>
                  <td className="text-center">{item.question}</td>
                  <td className="text-center">{item.answer}</td>
                  <td className="text-center">{item.createdAt}</td>
                  {/* <td className="text-center">{item.address}</td>
                  <td className="text-center">{item.status}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between border-t border-stroke px-6 pt-5 dark:border-strokedark">
        <div className="flex">
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {/* SVG for previous arrow */}
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z" />
            </svg>
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 ${
                i + 1 === currentPage
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary hover:text-white'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {/* SVG for next arrow */}
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z" />
            </svg>
          </button>
        </div>
        <p className="font-medium hidden md:block">
          {currentPage} / {totalPages}
        </p>
      </div>
    </section>
  );
};

export default QuestionTable;
