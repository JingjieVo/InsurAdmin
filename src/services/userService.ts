import { jwtDecode } from 'jwt-decode';

export const getUserInfo = (token: string) => {
  try {
    // Decode the token
    const decoded: DecodedToken = jwtDecode(token);

    // Extract userId and store it in AsyncStorage
    if (decoded.userId) {
      localStorage.setItem('userId', decoded.userId.toString());
      console.log('User ID saved successfully.');
    } else {
      console.error('User ID not found in token.');
    }
  } catch (error) {
    console.error('Error decoding token or saving userId:', error);
  }
};
