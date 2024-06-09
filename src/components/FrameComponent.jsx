import VuesaxboldtranslateIcon from "./VuesaxboldtranslateIcon";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-9@2x.png"
        />
        <div className={styles.cardWrapper}>
          <div className={styles.card2}>
            <div className={styles.card2Child} />
            <div className={styles.vuesaxboldtranslateWrapper}>
              <VuesaxboldtranslateIcon />
            </div>
            <img className={styles.icon} alt="" src="/4615368@2x.png" />
            <b className={styles.customizedMultilingualOnboar}>
              Customized Multilingual Onboarding
            </b>
          </div>
        </div>
      </div>
      <div className={styles.seeAllButtonWrapper}>
        <button className={styles.btn}>
          <div className={styles.btnChild} />
          <div className={styles.seeAllParent}>
            <div className={styles.seeAll}>See All</div>
            <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
          </div>
        </button>
      </div>
      <div className={styles.sEOCard}>
        <div className={styles.card21}>
          <div className={styles.card2Item} />
          <div className={styles.vuesaxbolddiagramWrapper}>
            <img
              className={styles.vuesaxbolddiagramIcon}
              loading="lazy"
              alt=""
              src="/vuesaxbolddiagram.svg"
            />
          </div>
          <img className={styles.icon1} alt="" src="/4615368@2x.png" />
          <b className={styles.advancedSeoDescription}>
            Advanced SEO description Generation
          </b>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/group-8@2x.png"
        />
        <div className={styles.ourProductsFeaturesParent}>
          <h1 className={styles.ourProductsFeaturesContainer}>
            <p className={styles.ourProducts}>Our Product’s</p>
            <p className={styles.features}>Features</p>
          </h1>
          <div className={styles.vyaparLaunchpadHelps}>
            Vyapar Launchpad helps businesses improve their search engine
            visibility and ranking for products across different regions and
            markets.
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
