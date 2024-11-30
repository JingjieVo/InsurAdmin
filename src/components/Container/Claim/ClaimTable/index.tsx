import ArrowLeftIcon from '@/components/Icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import SelectBox from '@/components/SelectBox';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getClaims } from '@/services/claimService'; // Import service
import { Claim, ClaimResponse } from '@/types/claimType';
import Loader from '@/common/Loader';



type SearchField = keyof Claim;

const ClaimTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchField, setSearchField] = useState<SearchField>('id');
  const [currentPage, setCurrentPage] = useState(1);
  const [claims, setClaims] = useState<ClaimResponse>(); // State to store fetched claims
  const [loading, setLoading] = useState(true); // Loading state

  // Lấy danh sách yêu cầu bảo hiểm từ API
  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const claimsData = await getClaims();
        setClaims(claimsData);
      } catch (error) {
        console.error('Error fetching claims:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, []);

  // Lọc dữ liệu theo trường tìm kiếm
  const filteredData = claims?.data.content.filter(
    (item) =>
      item[searchField]?.toString().toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e: any) => setSearchValue(e.target.value);
  const handleEntriesChange = (e: any) => setEntriesPerPage(e.target.value);

  const totalPages = Math.ceil(filteredData ? filteredData?.length  / entriesPerPage : 0);

  if (loading) {
    return <Loader/>; // Hiển thị khi đang tải dữ liệu
  }

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
                { value: 'user', label: 'Người dùng' },
                { value: 'product', label: 'Bảo hiểm' },
                { value: 'program', label: 'Chương trình' },
                { value: 'status', label: 'Trạng thái' },
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
              <th className="text-center p-3">Người dùng</th>
              <th className="text-center p-3">Gói bảo hiểm</th>
              <th className="text-center p-3">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {!filteredData ? <></> : 
            filteredData
            .slice(
              (currentPage - 1) * entriesPerPage,
              currentPage * entriesPerPage
            )
            .map((item, index) => (
              <Link
                to={`detail/${item.id}`}
                key={index}
                className="table-row cursor-pointer dark:border-strokedark hover:bg-gray-100 dark:hover:bg-gray-700"
                style={{ display: 'table-row' }}
              >
                <td className="text-center p-5">{item.id}</td>
                <td className="text-center p-5">{item.customerName}</td>
                <td className="text-center">{item.productName}</td>

                <td
                  className={`text-center p-3 ${
                    item.status === 0
                      ? 'text-green-500'
                      : item.status === 1
                      ? 'text-yellow-400'
                      : 'text-red-500'
                  }`}
                >
                  {item.status === 0 ? 'Đã duyệt' : 'Từ chối'}
                </td>
              </Link>
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

export default ClaimTable;
