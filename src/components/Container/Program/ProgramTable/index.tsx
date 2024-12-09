import React, { useEffect, useState } from "react";
import {
  getCategories,
  deleteCategory,
  updateCategory,
} from "@/services/categoryService";
import { Category } from "@/types/categoryType";

const CategoryTable = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({ name: "", description: "" });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({ name: category.name, description: category.description });
  };

  const handleSaveEdit = async () => {
    if (editingCategory) {
      try {
        await updateCategory(editingCategory.id, formData);
        setCategories((prev) =>
          prev.map((cat) =>
            cat.id === editingCategory.id
              ? { ...cat, ...formData }
              : cat
          )
        );
        setEditingCategory(null);
        alert("Cập nhật thành công!");
      } catch (error) {
        console.error("Error updating category:", error);
        alert("Cập nhật thất bại, vui lòng thử lại.");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setFormData({ name: "", description: "" });
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
      try {
        await deleteCategory(id);
        setCategories((prev) => prev.filter((category) => category.id !== id));
        alert("Xóa thành công!");
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Xóa thất bại, vui lòng thử lại.");
      }
    }
  };

  const totalPages = Math.ceil(categories.length / entriesPerPage);
  const currentData = categories.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <section className="p-10 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Danh mục</h2>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr>
            <th className="text-center p-2">ID</th>
            <th className="text-center p-2">Tên danh mục</th>
            <th className="text-center p-2">Mô tả</th>
            <th className="text-center p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((category) => (
            <tr key={category.id}>
              <td className="text-center p-2">
                {category.id}
              </td>
              <td className="text-center p-2">
                {editingCategory?.id === category.id ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="border p-1"
                  />
                ) : (
                  category.name
                )}
              </td>
              <td className="text-center p-2 min-w-80 max-w-90">
                {editingCategory?.id === category.id ? (
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className="border p-1"
                  />
                ) : (
                  category.description
                )}
              </td>
              <td className="text-center p-2">
                {editingCategory?.id === category.id ? (
                  <>
                    <button
                      onClick={handleSaveEdit}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                      Lưu
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="ml-2 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                      Hủy
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(category)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                    >
                      Xóa
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Trước
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="ml-2 px-3 py-1 border rounded disabled:opacity-50"
          >
            Sau
          </button>
        </div>
        <p>
          Trang {currentPage} / {totalPages}
        </p>
        <select
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          className="border rounded p-1"
        >
          <option value="5">5 mục</option>
          <option value="10">10 mục</option>
          <option value="20">20 mục</option>
        </select>
      </div>
    </section>
  );
};

export default CategoryTable;
