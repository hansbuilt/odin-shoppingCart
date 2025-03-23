import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useCartToggle } from "../context/CartVisibilityContext";
import CartItem from "./CartItem";
import styles from "./CartFlyout.module.css";

function CartFlyout() {
  const { cart } = useContext(CartContext);
  const { isCartVisible, hideCart } = useCartToggle();

  function cropString(str, length) {
    if (str.length <= length) return str;

    const cropped = str.slice(0, length);
    const lastSpace = cropped.lastIndexOf(" ");

    return lastSpace === -1 ? cropped : cropped.slice(0, lastSpace) + "...";
  }

  const orderTotal = Object.values(cart).reduce(
    (sum, item) => sum + item.extendedPrice,
    0
  );

  return (
    <div
      className={`${styles.container} ${isCartVisible ? styles.visible : ""}`}
    >
      <div>
        <button onClick={hideCart}>close cart</button>
      </div>
      <div className={styles.cartItems}>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Desc</th>
              <th></th>
              <th>Qty</th>
              <th></th>
              <th>Price</th>
            </tr>

            {Object.entries(cart).map(([itemID, item]) => (
              <CartItem
                key={crypto.randomUUID()}
                itemID={itemID}
                name={cropString(item.name, 50)}
                quantity={item.quantity}
                price={item.price}
                extendedPrice={item.extendedPrice}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.cartTotal}>
        <table>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>${orderTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>$0.00</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>$0.00</td>
            </tr>
            <tr>
              <th>Order Total</th>
              <td>${orderTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button className={styles.buttonCheckout}>Checkout</button>
        <button onClick={hideCart} className={styles.buttonKeepShopping}>
          Keep Shopping
        </button>
      </div>
    </div>
  );
}

export default CartFlyout;
