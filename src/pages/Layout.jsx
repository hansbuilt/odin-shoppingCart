import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartFlyout from "../components/CartFlyout";
import { Outlet } from "react-router-dom";

function Layout() {
  // const { cart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    console.log("cart icon clicked");
    setIsCartVisible(!isCartVisible);
    console.log(isCartVisible);
  };

  return (
    <>
      <Header toggleCart={toggleCart}></Header>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
      <CartFlyout isVisible={isCartVisible} toggleCart={toggleCart} />
    </>
  );
}

export default Layout;
