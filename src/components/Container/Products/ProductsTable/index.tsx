import ArrowLeftIcon from '@/components/Icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import SelectBox from '@/components/SelectBox';
import { Product, ProductsResponse } from '@/types/product';
import { useState, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

interface ProductSearchField {
  id: string;
}

type SearchField = keyof ProductSearchField;

export default function ProductsTable({ data, onDelete }: { data: ProductsResponse; onDelete: (id: number) => Promise<void> }) {
  const [products, setProducts] = useState<ProductsResponse>(data); // Quản lý dữ liệu sản phẩm trong state
  const [searchValue, setSearchValue] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchField, setSearchField] = useState<SearchField>('id');
  const [currentPage, setCurrentPage] = useState(1);

  // Lọc dữ liệu theo giá trị tìm kiếm
  const filteredData = products.filter(
    (item) =>
      item[searchField]?.toString().toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => setEntriesPerPage(Number(e.target.value));

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  // Hàm xử lý xóa sản phẩm
  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await onDelete(id);
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id)); // Loại bỏ sản phẩm khỏi state
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product. Please try again.');
      }
    }
  };
  console.log(data)
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
              options={[{ value: 'id', label: 'ID' }]}
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
              <th className="text-center p-3">Gói bảo hiểm</th>
              <th className="text-center p-3">Danh mục</th>
              {/* <th className="text-center p-3">Chương trình</th> */}
              {/* <th className="text-center p-3">Mã từ nhà bảo hiểm</th> */}
              <th className="text-center p-3">Trạng thái</th>
              <th className="text-center p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .slice(
                (currentPage - 1) * entriesPerPage,
                (currentPage * entriesPerPage)
              )
              .map((item) => (
                <tr key={item.id} className="dark:border-strokedark">
                  <td className="text-center">{item.id}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.categoryId}</td>
                  {/* <td className="text-center">{item.name}</td> */}
                  {/* <td className="text-center">{item.name}</td> */}
                  <td
                    className={`text-center p-3 ${
                      item.status === 'AVAILABLE' ? 'text-green-500 ' : 'text-red-500 '
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="text-center p-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Delete product ${item.name}`}
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
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
}
