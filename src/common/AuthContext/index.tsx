import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { login as apiLogin, logout as apiLogout, getUserToken } from "@/services/authService";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string, role_id: number) => Promise<boolean>;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Xác thực ban đầu dựa trên token trong localStorage
    const token = getUserToken();
    return token !== "none";
  });

  const [token, setToken] = useState<string | null>(() => {
    // Lấy token từ localStorage khi khởi tạo
    const storedToken = getUserToken();
    return storedToken === "none" ? null : storedToken;
  });

  const login = async (phone_number: string, password: string, role_id: number): Promise<boolean> => {
    const isSuccess = await apiLogin({ phone_number, password, role_id: role_id });
    if (isSuccess) {
      const newToken = getUserToken();
      setToken(newToken);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    apiLogout();
    setToken(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // Kiểm tra và cập nhật trạng thái xác thực mỗi khi token thay đổi
    const token = getUserToken();
    setIsAuthenticated(token !== "none");
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
