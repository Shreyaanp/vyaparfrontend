import PropTypes from "prop-types";
import styles from "./TopNav1.module.css";

const TopNav = ({ className = "" }) => {
  return (
    <section className={[styles.topNav, className].join(" ")}>
      <header className={styles.topnav}>
        <div className={styles.navcontainer}>
          <a className={styles.dashboard}>Home</a>
          <div className={styles.profile}>
            <div className={styles.icon}>
              <div className={styles.nannysShopParent}>
                <div className={styles.nannysShop}>Nanny’s Shop</div>
                <img
                  className={styles.fichevronDownIcon}
                  alt=""
                  src="/fichevrondown.svg"
                />
              </div>
            </div>
            <img
              className={styles.iconlybulknotification}
              loading="lazy"
              alt=""
              src="/iconlybulknotification.svg"
            />
            <img
              className={styles.profile1Icon}
              loading="lazy"
              alt=""
              src="/profile-1@2x.png"
            />
          </div>
        </div>
      </header>
      <div className={styles.breadcrumbs}>
        <div className={styles.contnet}>
          <img
            className={styles.iconlybulkhome}
            alt=""
            src="/iconlybulkhome.svg"
          />
          <div className={styles.item}>
            <div className={styles.div}>/</div>
            <div className={styles.page}>Page</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.div1}>/</div>
            <div className={styles.page1}>Page</div>
          </div>
          <div className={styles.item2}>
            <div className={styles.div2}>/</div>
            <div className={styles.page2}>Page</div>
          </div>
          <div className={styles.item3}>
            <div className={styles.div3}>/</div>
            <div className={styles.page3}>Page</div>
          </div>
        </div>
      </div>
    </section>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
};

export default TopNav;
