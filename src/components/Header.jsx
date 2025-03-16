import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <Link to="/" className={styles.logoContainer}>
            <img src={logo} alt="Logo" id={styles.logo} />
          </Link>

          <div className={styles.searchContainer}>
            <input className={styles.searchBar}></input>
            <span className="material-icons" id={styles.searchIcon}>
              search
            </span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <span className="material-icons">account_circle</span>
          <span>Account</span>
          <span className="material-icons">shopping_cart</span>
          <span>Cart:</span>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
