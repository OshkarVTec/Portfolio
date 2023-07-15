import { Outlet } from 'react-router-dom';

import MainHeader from '../components/Header/MainHeader';

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
