import { createContext, useContext, useState } from "react";

const CartToggleContext = createContext();

export const useCartToggle = () => useContext(CartToggleContext);

export const CartToggleProvider = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    console.log("toggle cart triggered from context");
    setIsCartVisible(() => true);
  };

  const hideCart = () => {
    console.log("toggle cart triggered from context");
    setIsCartVisible(() => false);
  };

  return (
    <CartToggleContext.Provider value={{ showCart, hideCart, isCartVisible }}>
      {children}
    </CartToggleContext.Provider>
  );
};
