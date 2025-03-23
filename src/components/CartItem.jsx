import styles from "./CartItem.module.css";

function CartItem({ itemID, name, quantity, extendedPrice }) {
  //   const formatExtendedPrice =
  //     typeof extendedPrice === "number"
  //       ? `$${extendedPrice.toFixed(2)}`
  //       : "$0.00";

  const formatExtendedPrice = `$${extendedPrice.toFixed(2)}`;
  return (
    <tr className={styles.container}>
      <td>{itemID}</td>
      <td>{name}</td>
      <td>
        <button className={styles.buttons}>-</button>
      </td>
      <td>{quantity}</td>
      <td>
        <button className={styles.buttons}>+</button>
      </td>
      {/* <td>${`${extendedPrice}`}</td> */}
      <td>{formatExtendedPrice}</td>
      <td>
        <button className={styles.buttons}>x</button>
      </td>
    </tr>
  );
}

export default CartItem;
