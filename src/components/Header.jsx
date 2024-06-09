import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <div className={[styles.productInner, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.vyaparLaunchpadParent}>
            <b className={styles.vyaparLaunchpad}>
              <span>Vya</span>
              <span className={styles.par}>par</span>
              <span> Launch</span>
              <span className={styles.pad}>pad</span>
            </b>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.menuWrapper}>
            <img
              className={styles.menuIcon}
              loading="lazy"
              alt=""
              src="/menu.svg"
            />
          </div>
          <div className={styles.searchWrapper}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search.svg"
            />
          </div>
          <div className={styles.divider} />
          <div className={styles.shoppingCartWrapper}>
            <img
              className={styles.shoppingCartIcon}
              loading="lazy"
              alt=""
              src="/shoppingcart.svg"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
