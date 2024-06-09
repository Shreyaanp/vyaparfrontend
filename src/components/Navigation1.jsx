import PropTypes from "prop-types";
import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <div className={[styles.navigation, className].join(" ")}>
      <div className={styles.navigationChild} />
      <div className={styles.homeWrapper}>
        <a className={styles.home}>{`Home `}</a>
      </div>
      <div className={styles.navigationItems}>
        <a className={styles.about}>About</a>
      </div>
      <div className={styles.navigationItems1}>
        <a className={styles.pricing}>Pricing</a>
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <a className={styles.tryNow}>Try Now</a>
      </button>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
