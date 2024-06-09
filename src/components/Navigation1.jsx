import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate("/Login");
  };

  return (
    <nav className={[styles.navigation, className].join(" ")}>
      <div className={styles.navigationChild}></div>
      <div className={styles.homeWrapper}>
        <a href="/" className={styles.home}>Home</a>
      </div>
      <div className={styles.navigationItems}>
        <a href="/about" className={styles.about}>About</a>
      </div>
      <div className={styles.navigationItems1}>
        <a href="/pricing" className={styles.pricing}>Pricing</a>
      </div>
      <button className={styles.rectangleParent} onClick={handleTryNowClick}>
        <div className={styles.frameChild}></div>
        <span className={styles.tryNow}>Try Now</span>
      </button>
    </nav>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
