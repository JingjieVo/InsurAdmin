import { Category, CategoryCreate, CategoryResponse } from '@/types/categoryType';
import { apiClient } from '@/utils/api';

export const getCategories = async (): Promise<CategoryResponse> => {
  try {
    const response = await apiClient.get('categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const createCategory = async (category: CategoryCreate): Promise<Category> => {
  try {
    const response = await apiClient.post('categories', category);
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

export const deleteCategory = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`categories/${id}`);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};

export const updateCategory = async (
  id: number,
  updatedData: { name: string; description: string }
): Promise<void> => {
  try {
    await apiClient.put(`categories/${id}`, updatedData);
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};