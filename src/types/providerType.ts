export interface Provider {
  id: string;
  phone_number: string;
  email: string;
  fullname: string;
  address: string;
  description: string;
}

export interface ProviderResponse {
  message: string;
  status: string;
  data: Provider[];
}
