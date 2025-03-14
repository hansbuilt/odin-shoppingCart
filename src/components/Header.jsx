import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className="logo">Logo Here</div>
        <div className={styles.headerLinks}>cat1</div>
        <div className={styles.headerLinks}>cat2</div>
        <div className={styles.headerLinks}>cat3</div>
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
