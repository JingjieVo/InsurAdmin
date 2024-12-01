import React, { useState, useEffect } from 'react';
import { ProductDetail, Term } from '@/types/productType';
import { createProduct } from '@/services/productService';
import { Category } from '@/types/categoryType';
import { getCategories } from '@/services/categoryService';

const initialMainTerm: Term = {
  id: 0,
  productId: 0,
  name: '',
  description: '',
  amount: 0,
  icon: '',
};

const initialSideTerm: Term & { price: number } = {
  ...initialMainTerm,
  price: 0,
};

const initialProductState: Omit<ProductDetail, 'id'> = {
  categoryId: 0,
  fromAge: 0,
  toAge: 0,
  status: '',
  name: '',
  description: '',
  gender: '',
  applicableObject: '',
  scope: '',
  exclusion: '',
  highlight: '',
  price: 0,
  thumbnail: '',
  attachment: '',
  mainTerms: [initialMainTerm],
  sideTerms: [initialSideTerm],
};

export default function ProductSubmissionForm() {
  const [product, setProduct] = useState<Omit<ProductDetail, 'id'>>(initialProductState);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        if (response.status === 'OK') {
          setCategories(response.data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: name === "categoryId" ? parseInt(value, 10) : value
    }));
  };

  const handleTermChange = (index: number, field: keyof Term, value: string | number, isMain: boolean) => {
    setProduct(prev => {
      const terms = isMain ? [...prev.mainTerms] : [...prev.sideTerms];
      terms[index] = { ...terms[index], [field]: value };
      return isMain ? { ...prev, mainTerms: terms } : { ...prev, sideTerms: terms };
    });
  };

  const addTerm = (isMain: boolean) => {
    setProduct(prev => {
      const newTerm = isMain ? initialMainTerm : initialSideTerm;
      const terms = isMain ? [...prev.mainTerms, newTerm] : [...prev.sideTerms, newTerm];
      return isMain ? { ...prev, mainTerms: terms } : { ...prev, sideTerms: terms };
    });
  };

  const deleteTerm = (index: number, isMain: boolean) => {
    setProduct(prev => {
      const terms = isMain ? [...prev.mainTerms] : [...prev.sideTerms];
      terms.splice(index, 1);
      return isMain ? { ...prev, mainTerms: terms } : { ...prev, sideTerms: terms };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createProduct(product)
      if (response.status === "OK") {
        alert('Product submitted successfully!');
        setProduct(initialProductState);
      } else {
        throw new Error('Failed to submit product');
      }
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('Failed to submit product. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
          rows={3}
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">Category</label>
        <select
          id="categoryId"
          name="categoryId"
          value={product.categoryId}
          onChange={handleInputChange}
          required
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fromAge" className="block text-sm font-medium text-gray-700">From Age</label>
          <input
            type="number"
            id="fromAge"
            name="fromAge"
            value={product.fromAge}
            onChange={handleInputChange}
            required
            className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="toAge" className="block text-sm font-medium text-gray-700">To Age</label>
          <input
            type="number"
            id="toAge"
            name="toAge"
            value={product.toAge}
            onChange={handleInputChange}
            required
            className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
          step="0.01"
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          id="gender"
          name="gender"
          value={product.gender}
          onChange={handleInputChange}
          required
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select gender</option>
          <option value="ALL">All</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          id="status"
          name="status"
          value={product.status}
          onChange={handleInputChange}
          required
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select status</option>
          <option value="AVAILABLE">Available</option>
          <option value="UNAVAILABLE">Unavailable</option>
        </select>
      </div>

      <div>
        <label htmlFor="applicableObject" className="block text-sm font-medium text-gray-700">Applicable Object</label>
        <input
          type="text"
          id="applicableObject"
          name="applicableObject"
          value={product.applicableObject}
          onChange={handleInputChange}
          required
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="scope" className="block text-sm font-medium text-gray-700">Scope</label>
        <input
          type="text"
          id="scope"
          name="scope"
          value={product.scope}
          onChange={handleInputChange}
          required
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="exclusion" className="block text-sm font-medium text-gray-700">Exclusion</label>
        <textarea
          id="exclusion"
          name="exclusion"
          value={product.exclusion}
          onChange={handleInputChange}
          rows={3}
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail</label>
        <input
          type="text"
          id="thumbnail"
          name="thumbnail"
          value={product.thumbnail}
          onChange={handleInputChange}
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment</label>
        <input
          type="text"
          id="attachment"
          name="attachment"
          value={product.attachment}
          onChange={handleInputChange}
          className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Main Terms</h3>
        {product.mainTerms.map((term, index) => (
          <div key={index} className="mt-4 border-t border-gray-200 pt-4">
            <input
              type="text"
              value={term.name}
              onChange={(e) => handleTermChange(index, 'name', e.target.value, true)}
              placeholder="Name"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <textarea
              value={term.description}
              onChange={(e) => handleTermChange(index, 'description', e.target.value, true)}
              placeholder="Description"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="number"
              value={term.amount}
              onChange={(e) => handleTermChange(index, 'amount', parseFloat(e.target.value), true)}
              placeholder="Amount"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              value={term.icon}
              onChange={(e) => handleTermChange(index, 'icon', e.target.value, true)}
              placeholder="Icon"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => deleteTerm(index, true)}
              className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              aria-label={`Delete main term ${term.name}`}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addTerm(true)}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Main Term
        </button>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Side Terms</h3>
        {product.sideTerms.map((term, index) => (
          <div key={index} className="mt-4 border-t border-gray-200 pt-4">
            <input
              type="text"
              value={term.name}
              onChange={(e) => handleTermChange(index, 'name', e.target.value, false)}
              placeholder="Name"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <textarea
              value={term.description}
              onChange={(e) => handleTermChange(index, 'description', e.target.value, false)}
              placeholder="Description"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="number"
              value={term.amount}
              onChange={(e) => handleTermChange(index, 'amount', parseFloat(e.target.value), false)}
              placeholder="Amount"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="number"
              value={(term as any).price}
              onChange={(e) => handleTermChange(index, 'amount', parseFloat(e.target.value), false)}
              placeholder="Price"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              value={term.icon}
              onChange={(e) => handleTermChange(index, 'icon', e.target.value, false)}
              placeholder="Icon"
              className="mt-1 p-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => deleteTerm(index, false)}
              className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              aria-label={`Delete side term ${term.name}`}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addTerm(false)}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Side Term
        </button>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Product
        </button>
      </div>
    </form>
  );
}

