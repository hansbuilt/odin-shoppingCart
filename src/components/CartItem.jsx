import styles from "./CartItem.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ itemID, name, quantity, price, extendedPrice }) {
  //   const formatExtendedPrice =
  //     typeof extendedPrice === "number"
  //       ? `$${extendedPrice.toFixed(2)}`
  //       : "$0.00";

  const { addToCart } = useContext(CartContext);
  const { decrementFromCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  //   console.log(cart);
  //   const price = cart[itemID.price];

  const formatExtendedPrice = `$${extendedPrice.toFixed(2)}`;
  return (
    <tr className={styles.container}>
      <td>{itemID}</td>
      <td>{name}</td>
      <td>
        <button
          onClick={() => decrementFromCart(itemID)}
          className={styles.buttons}
        >
          -
        </button>
      </td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={() => addToCart(itemID, 1, name, price)}
          className={styles.buttons}
        >
          +
        </button>
      </td>
      {/* <td>${`${extendedPrice}`}</td> */}
      <td>{formatExtendedPrice}</td>
      <td>
        <button
          onClick={() => removeFromCart(itemID)}
          className={styles.buttons}
        >
          x
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
