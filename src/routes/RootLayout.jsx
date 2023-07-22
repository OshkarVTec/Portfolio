import { Outlet } from "react-router-dom";

import MainHeader from "../components/Header/MainHeader";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
