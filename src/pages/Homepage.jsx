import styles from "./Homepage.module.css";
import home_banner from "../assets/homeBanner.webp";

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.homeBannerContainer}>
          {/* <img src={home_banner} alt="Banner" /> */}

          <span className={styles.homeBannerText}>
            Welcome to a BETTER place to browse, buy, and question your
            financial choices!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
