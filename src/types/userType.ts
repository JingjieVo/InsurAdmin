interface LoginData {
  phone_number: string;
  password: string;
  role_id: number;
}

interface LoginResponse {
  message: string;
  // status: string;
  token: string; // Assuming a token is returned on successful login
}
interface User {
  id: number;
  name: string;
  email: string;
  // Add other user fields as needed
}

interface DecodedToken {
  userId: string;
  phoneNumber: string;
  roleId: number;
  // Or `number`, depending on your backend
  // Add other fields that may be in the token payload if needed
}

interface UserResponse {
  message: string; // Thông báo từ API
  status: string;  // Trạng thái phản hồi
  data: UserData;  // Chi tiết người dùng
}

interface UserData {
  fullName: string;     // Tên đầy đủ của người dùng
  phoneNumber: string;  // Số điện thoại
  address: string;      // Địa chỉ
  email: string;        // Email
  dateOfBirth: string | null; // Ngày sinh (có thể null)
  avatar: string;       // Tên file avatar
}


interface CreateProviderData {
  phone_number: string;
  description: string;
  icon: string;
  email: string;
  fullname: string;
  address: string;
  password: string;
  retype_password: string;
}

interface CreateProviderResponse {

  message: string;

}