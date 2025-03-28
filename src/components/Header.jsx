import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useCartToggle } from "../context/CartVisibilityContext";

function Header({}) {
  const { cart } = useContext(CartContext);
  const { isCartVisible, showCart } = useCartToggle();

  const itemCount = Object.values(cart).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="Logo" id={styles.logo} />
        </Link>

        <div className={styles.searchContainer}>
          <input className={styles.searchBar}></input>
          <span className="material-icons" id={styles.searchIcon}>
            search
          </span>
        </div>
        <div className={styles.rightSide}>
          <span className="material-icons">account_circle</span>
          <span>Account</span>
          <span className="material-icons" onClick={showCart}>
            shopping_cart
          </span>
          <span>Cart: {itemCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
