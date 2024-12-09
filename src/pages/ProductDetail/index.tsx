import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiClient } from '@/utils/api';

interface Product {
  id: number;
  categoryId: number;
  fromAge: number;
  toAge: number;
  price: number;
  gender: string;
  status: string;
  name: string;
  description: string;
  applicableObject: string;
  scope: string;
  exclusion: string;
  thumbnail: string;
  mainTerms: MainTerm[];
  sideTerms: SideTerm[];
}

interface MainTerm {
  id: number;
  productId: number | null;
  name: string;
  description: string;
  amount: number;
  icon: string;
}

interface SideTerm {
  id: number;
  productId: number | null;
  name: string;
  description: string;
  amount: number;
  price: number;
  icon: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get('categories');
        setCategories(response.data.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient.get<Product>(`products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch product details');
        console.error('Error fetching product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    setIsLoading(true);
    try {
      await apiClient.put(`products/${id}`, product);
      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError('Failed to update product');
      console.error('Error updating product:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const addMainTerm = () => {
    if (isEditing && product) {
      const newTerm: MainTerm = {
        id: Date.now(),
        productId: product.id,
        name: '',
        description: '',
        amount: 0,
        icon: ''
      };
      setProduct({ ...product, mainTerms: [...product.mainTerms, newTerm] });
    }
  };

  const addSideTerm = () => {
    if (isEditing && product) {
      const newTerm: SideTerm = {
        id: Date.now(),
        productId: product.id,
        name: '',
        description: '',
        amount: 0,
        price: 0,
        icon: ''
      };
      setProduct({ ...product, sideTerms: [...product.sideTerms, newTerm] });
    }
  };

  const deleteMainTerm = (termId: number) => {
    if (isEditing && product) {
      const updatedTerms = product.mainTerms.filter(term => term.id !== termId);
      setProduct({ ...product, mainTerms: updatedTerms });
    }
  };

  const deleteSideTerm = (termId: number) => {
    if (isEditing && product) {
      const updatedTerms = product.sideTerms.filter(term => term.id !== termId);
      setProduct({ ...product, sideTerms: updatedTerms });
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">
        {isEditing ? 'Edit Product' : 'Product Details'}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="categoryId"
              value={product.categoryId}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={product.status}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="AVAILABLE">Available</option>
              <option value="UNAVAILABLE">Unavailable</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              From Age
            </label>
            <input
              type="number"
              name="fromAge"
              value={product.fromAge}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              To Age
            </label>
            <input
              type="number"
              name="toAge"
              value={product.toAge}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={product.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="ALL">All</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Applicable Object
            </label>
            <input
              type="text"
              name="applicableObject"
              value={product.applicableObject}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Scope
            </label>
            <textarea
              name="scope"
              value={product.scope}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Exclusion
            </label>
            <textarea
              name="exclusion"
              value={product.exclusion}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnail"
              value={product.thumbnail}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        {/* Main Terms Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Main Terms</h2>
          {product.mainTerms.map((term, index) => (
            <div key={term.id} className="mb-4 p-4 border rounded relative">
              <h3 className="font-medium">Term {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input
                  type="text"
                  value={term.name}
                  onChange={(e) => {
                    const updatedTerms = [...product.mainTerms];
                    updatedTerms[index].name = e.target.value;
                    setProduct({ ...product, mainTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Term Name"
                />
                <input
                  type="number"
                  value={term.amount}
                  onChange={(e) => {
                    const updatedTerms = [...product.mainTerms];
                    updatedTerms[index].amount = parseFloat(e.target.value);
                    setProduct({ ...product, mainTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Amount"
                />
                <input
                  type="text"
                  value={term.icon}
                  onChange={(e) => {
                    const updatedTerms = [...product.mainTerms];
                    updatedTerms[index].icon = e.target.value;
                    setProduct({ ...product, mainTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Icon URL"
                />
                <textarea
                  value={term.description}
                  onChange={(e) => {
                    const updatedTerms = [...product.mainTerms];
                    updatedTerms[index].description = e.target.value;
                    setProduct({ ...product, mainTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Description"
                />
              </div>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => deleteMainTerm(term.id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              type="button"
              onClick={addMainTerm}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Main Term
            </button>
          )}
        </div>

        {/* Side Terms Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Side Terms</h2>
          {product.sideTerms.map((term, index) => (
            <div key={term.id} className="mb-4 p-4 border rounded relative">
              <h3 className="font-medium">Term {index + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input
                  type="text"
                  value={term.name}
                  onChange={(e) => {
                    const updatedTerms = [...product.sideTerms];
                    updatedTerms[index].name = e.target.value;
                    setProduct({ ...product, sideTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Term Name"
                />
                <input
                  type="number"
                  value={term.amount}
                  onChange={(e) => {
                    const updatedTerms = [...product.sideTerms];
                    updatedTerms[index].amount = parseFloat(e.target.value);
                    setProduct({ ...product, sideTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Amount"
                />
                <input
                  type="number"
                  value={term.price}
                  onChange={(e) => {
                    const updatedTerms = [...product.sideTerms];
                    updatedTerms[index].price = parseFloat(e.target.value);
                    setProduct({ ...product, sideTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Price"
                />
                <input
                  type="text"
                  value={term.icon}
                  onChange={(e) => {
                    const updatedTerms = [...product.sideTerms];
                    updatedTerms[index].icon = e.target.value;
                    setProduct({ ...product, sideTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Icon URL"
                />
                <textarea
                  value={term.description}
                  onChange={(e) => {
                    const updatedTerms = [...product.sideTerms];
                    updatedTerms[index].description = e.target.value;
                    setProduct({ ...product, sideTerms: updatedTerms });
                  }}
                  disabled={!isEditing}
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Description"
                />
              </div>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => deleteSideTerm(term.id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              type="button"
              onClick={addSideTerm}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Side Term
            </button>
          )}
        </div>

        <div className="mt-6 flex justify-between">
          {isEditing ? (
            <>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleEdit}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Edit Product
              </button>
              <button
                type="button"
                onClick={() => navigate('/product/products')}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Back to Products
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

