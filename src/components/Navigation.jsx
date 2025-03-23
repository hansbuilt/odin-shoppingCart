import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <Link to="clothing" className={styles.headerLinks}>
            Clothing
          </Link>
          <Link to="jewelry" className={styles.headerLinks}>
            Jewelry
          </Link>
          <Link to="electronics" className={styles.headerLinks}>
            Electronics
          </Link>
        </div>
        <div className={styles.rightSide}>
          <span className={`material-icons ${styles.headerIcons}`}>phone</span>
          <span>555-555-5555</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
