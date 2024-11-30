import { apiClient } from "@/utils/api";  // Giả sử bạn đã cấu hình apiClient
import { ClaimDetailResponse, ClaimResponse } from "@/types/claimType"

const CLAIM_API_URL = "/claims";  // URL endpoint của API Claims

// Lấy danh sách các yêu cầu bảo hiểm
export const getClaims = async (): Promise<ClaimResponse> => {
  try {
    const response = await apiClient.get<ClaimResponse>("/claims/provider");
    return response.data;
  } catch (error) {
    console.error("Error fetching claims:", error);
    throw error;
  }
};

// Xóa yêu cầu bảo hiểm theo ID
export const deleteClaim = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`${CLAIM_API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting claim:", error);
    throw error;
  }
};

// Lấy chi tiết yêu cầu bảo hiểm theo ID
export const getClaimById = async (id: number): Promise<ClaimDetailResponse> => {
  try {
    const response = await apiClient.get<ClaimDetailResponse>(`${CLAIM_API_URL}/provider/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching claim details:", error);
    throw error;
  }
};
