import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="auth/signin" />;
};

export default PrivateRoute;