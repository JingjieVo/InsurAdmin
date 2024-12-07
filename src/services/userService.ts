import { apiClient, apiClientNoAuth } from '@/utils/api';
import { jwtDecode } from 'jwt-decode';

export const getUserInfo = () => {
  try {
    const token = localStorage.getItem('authToken')
    // Decode the token
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);

      // Extract userId and store it in AsyncStorage
      if (decoded.userId) {
        console.log(decoded.roleId)
        return { userId: decoded.userId, userRoleId: decoded.roleId }
        // console.log('User ID saved successfully.');
      } else {
        console.error('User ID not found in token.');
      }
    }
  } catch (error) {
    console.error('Error decoding token or saving userId:', error);
  }
};






export const createProvider = async (data: CreateProviderData): Promise<boolean> => {
  try {
    const response = await apiClient.post<CreateProviderResponse>("admins/provider", data);

    if (response) {
      // localStorage.setItem("authToken", response.data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error creating provider:", error);
    return false;
  }
};

