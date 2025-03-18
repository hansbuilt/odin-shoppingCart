import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <Link to="cameras" className={styles.headerLinks}>
            Cameras
          </Link>
          <Link to="tripods" className={styles.headerLinks}>
            Tripods
          </Link>
          <Link to="accessories" className={styles.headerLinks}>
            Accessories
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
