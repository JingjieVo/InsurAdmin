import {
  Contract,
  ContractDetailDTO,
  ContractDetailResponse,
  ContractResponse,
} from '@/types/contractType';
import { apiClient } from '@/utils/api'; // Giả sử apiClient đã được cấu hình sẵn

// Hàm lấy danh sách hợp đồng
export const getContracts = async (): Promise<ContractResponse> => {
  try {
    const response = await apiClient.get<ContractResponse>(
      'contracts/provider',
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching contracts:', error);
    throw error;
  }
};

// Hàm lấy chi tiết hợp đồng theo ID
export const getContractDetail = async (
  contractId: number,
): Promise<ContractDetailResponse> => {
  try {
    const response = await apiClient.get(`/contracts/${contractId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contract detail:', error);
    throw error;
  }
};

// Hàm tạo hợp đồng mới
export const createContract = async (
  contractData: ContractDetailDTO,
): Promise<Contract> => {
  try {
    const response = await apiClient.post<Contract>('/contracts', contractData);
    return response.data;
  } catch (error) {
    console.error('Error creating contract:', error);
    throw error;
  }
};

// Hàm cập nhật thông tin hợp đồng
export const updateContract = async (
  id: number,
  contractData: ContractDetailDTO,
): Promise<Contract> => {
  try {
    const response = await apiClient.put<Contract>(
      `/contracts/${id}`,
      contractData,
    );
    return response.data;
  } catch (error) {
    console.error('Error updating contract:', error);
    throw error;
  }
};

// Hàm xóa hợp đồng theo ID
export const deleteContract = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`/contracts/${id}`);
  } catch (error) {
    console.error('Error deleting contract:', error);
    throw error;
  }
};
