import styles from "./Footer.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.leftSide}>
          <Link to="/" className={styles.logoContainer}>
            <img src={logo} alt="Logo" id={styles.logo} />
          </Link>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.footerColumn}>
            <ul>
              <h3>Contact Us</h3>
              <li>Contact Us</li>
              <li>555-555-5555</li>
              <li>Live Chat</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <h3>Account</h3>
              <li>Log in</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <h3>About</h3>
              <li>About Us</li>
              <li>Reviews</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <h3>Support</h3>
              <li>FAQs</li>
              <li>Returns</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <ul>
              <h3>Social</h3>
              <FaFacebookSquare color="white" size="24" />
              <FaTwitterSquare color="white" size="24" />
              <FaInstagramSquare color="white" size="24" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
