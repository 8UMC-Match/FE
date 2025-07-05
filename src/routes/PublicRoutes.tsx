import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
