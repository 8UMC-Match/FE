import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import { headerRoutePath } from '../mocks/header/headerData';

const RootLayout = () => {
  const location = useLocation();
  const { pathname } = location;

  const headerPath = headerRoutePath.find((route) =>
    pathname.startsWith(route.path),
  );

  return (
    <>
      <div className="pageContainer">
        {headerPath && <Header text={headerPath.text} />}
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
