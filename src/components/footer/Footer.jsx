import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className="logo">Logo Here</div>
      </div>
      <div className={styles.rightSide}>
        <span>About Us</span>
        <span>FAQ</span>
      </div>
    </div>
  );
}

export default Footer;
