import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Kiểm tra giá trị từ localStorage khi khởi tạo
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const login = (email: string, password: string) => {
    // Giả lập xác thực
    if (email === 'admin@example.com' && password === 'Admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true'); // Lưu vào localStorage
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Xóa khỏi localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
