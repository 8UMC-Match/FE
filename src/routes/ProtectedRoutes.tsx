import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  //const { isAuthenticated } = useAuth();
  //return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
