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
          <Link to="category1" className={styles.headerLinks}>
            Cameras
          </Link>
          <Link to="category2" className={styles.headerLinks}>
            Tripods
          </Link>
          <Link to="category3" className={styles.headerLinks}>
            Accessories
          </Link>
        </div>
        <div className={styles.rightSide}>
          <span className="material-icons">search</span>
          <span>Search</span>
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
