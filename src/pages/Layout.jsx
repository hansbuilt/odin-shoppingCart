import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
