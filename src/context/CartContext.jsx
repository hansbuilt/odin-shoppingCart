import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // { itemId: {quantity, name, unitPrice }

  const addToCart = (itemID, qtyAdded, name, price) => {
    //may add qty here later
    setCart((prev) => ({
      ...prev,
      [itemID]: prev[itemID]
        ? {
            ...prev[itemID],
            quantity: prev[itemID].quantity + qtyAdded,
            extendedPrice: (prev[itemID].quantity + qtyAdded) * price,
          }
        : {
            name,
            price,
            quantity: 1,
            extendedPrice: price,
          },
    }));
  };

  const decrementFromCart = (itemID) => {
    setCart((prev) => {
      if (!prev[itemID]) return prev;

      if (prev[itemID].quantity > 1) {
        return {
          ...prev,
          [itemID]: {
            ...prev[itemID],
            quantity: prev[itemID].quantity - 1,
            extendedPrice: (prev[itemID].quantity - 1) * prev[itemID].price,
          },
        };
      } else {
        const newCart = { ...prev };
        delete newCart[itemID];
        return newCart;
      }
    });
  };

  const removeFromCart = (itemID) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[itemID];
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
