import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link to="/" className={styles.logo}>
          Logo Here
        </Link>
        <Link to="category1" className={styles.headerLinks}>
          cat1
        </Link>
        <Link to="category2" className={styles.headerLinks}>
          cat2
        </Link>
        <Link to="category3" className={styles.headerLinks}>
          cat3
        </Link>
      </div>
      <div className={styles.rightSide}>
        <span>srch</span>
        <span>profile</span>
        <span>cart</span>
      </div>
    </div>
  );
}

export default Header;
