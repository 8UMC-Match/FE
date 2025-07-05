import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
