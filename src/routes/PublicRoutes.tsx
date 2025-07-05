import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  //const { isAuthenticated } = useAuth();
  //return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;

  return <Outlet />;
};

export default PublicRoute;
