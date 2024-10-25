import ArrowLeftIcon from '@/components/Icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import SelectBox from '@/components/SelectBox';
import { useState } from 'react';

interface DataItem {
  'id': string;
  'name': string;
  'category': string;
  'quantity': string;
  'idFromProvider': string;
}
type SearchField = keyof DataItem;
const QuestionTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchField, setSearchField] = useState<SearchField>('id');
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      id: 'Barney Murray',
      name: 'ahha',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'meo',
    },
    {
      id: 'Barney Murray',
      name: 'Developer',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'Block A, Demo Park',
    },
    {
      id: 'Barney Murray',
      name: 'Developer',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'Block A, Demo Park',
    },
    {
      id: 'Barney Murray',
      name: 'Developer',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'Block A, Demo Park',
    },
    {
      id: 'Barney Murray',
      name: 'Developer',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'Block A, Demo Park',
    },
    {
      id: 'Barney Murray',
      name: 'Developer',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'Block A, Demo Park',
    },
    {
      id: 'Barney Murray',
      name: 'Developer',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'Block A, Demo Park',
    },
    {
      id: 'Barney Murray',
      name: 'Developer',
      category: '25 Nov, 1966',
      quantity: 'Barney@gmail.com',
      idFromProvider: 'Block A, Demo Park',
    },
    // ... other data
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
                { value: 'name', label: 'Tên' },
                { value: 'idFromProvider', label: 'Mã NCC' },
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
              <th className="text-center p-3">Id</th>
              <th className="text-center p-3">Tên chương trình</th>
              <th className="text-center p-3">Danh mục</th>
              <th className="text-center p-3">Số lượng</th>
              <th className="text-center p-3">Mã từ nhà bảo hiểm</th>
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

                  <td className="text-center p-5">{item.name}</td>
                  <td className="text-center">{item.category}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-center">{item.idFromProvider}</td>
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
            <ArrowLeftIcon />
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
            <ArrowRightIcon />
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
