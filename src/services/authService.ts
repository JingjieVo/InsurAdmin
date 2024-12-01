import { apiClient } from "@/utils/api";
import { jwtDecode } from "jwt-decode";

export const login = async (data: LoginData): Promise<boolean> => {
  try {
    const response = await apiClient.post<LoginResponse>("users/login", data);

    // Save token to AsyncStorage
    // if()
    const token = response.data.token;

    if (token) {
      localStorage.setItem("authToken", token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const logout = async () => {
  try {
    localStorage.removeItem("authToken");
  } catch (error) {
    return false;
  }
};

export const getUserToken = (): string => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return "none";
    }

    return token;
  } catch (error) {
    // console.error("Error fetching user info:", error);
    throw error;
  }
};


