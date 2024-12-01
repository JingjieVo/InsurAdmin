import { apiClient } from '@/utils/api';




// Define the service function to get products
export const getProducts = async () => {
  try {
    const response = await apiClient.get('products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Define the service function to create a product
export const createProduct = async (productData: Record<string, any>) => {
  try {
    const response = await apiClient.post('products', productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};


export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`products/${id}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}
