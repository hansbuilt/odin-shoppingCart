import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useCartToggle } from "../context/CartVisibilityContext";
import styles from "./CartFlyout.module.css";

function CartFlyout() {
  // const { cart } = useContext(CartContext);
  const { isCartVisible, hideCart } = useCartToggle();

  return (
    <div
      className={`${styles.container} ${isCartVisible ? styles.visible : ""}`}
    >
      <div>
        <button onClick={hideCart}>close cart</button>
      </div>
      Here's the cart
    </div>
  );
}

export default CartFlyout;
