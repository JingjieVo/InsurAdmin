// interfaces/Claim.ts

export interface Claim {
  id: number;
  contractId: number;
  productName: string;
  customerName: string;
  status: number; // Trạng thái của yêu cầu
  createdAt: string; // Ngày tạo yêu cầu
}

export interface ClaimResponse {
  message: string;
  status: string;
  data: {
    content: Claim[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
    first: boolean;
  };
}

// interfaces/Claim.ts
export interface ClaimDetail {
  id: number;
  contractId: number;
  status: number;
  amountClaim: number;
  compensationAmount: number;
  note: string;
  description: string;
  upload: string;
  name: string;
  phone: string;
  email: string;
  requireUpdateStatus: string | null;
  bankAccount: string;
  bankName: string;
  bankBranch: string;
  bankNameOwner: string;
}

export interface ClaimDetailResponse {
  message: string;
  status: string;
  data: ClaimDetail;
}
