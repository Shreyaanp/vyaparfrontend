import PropTypes from "prop-types";
import styles from "./FrameComponent31.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.productTitleParent}>
            <b className={styles.productTitle}>Product Title</b>
            <div className={styles.titleDivider} />
          </div>
          <div className={styles.buddhaRiceKalaNamakRiceParent}>
            <div className={styles.buddhaRiceContainer}>
              <b>Buddha Rice | Kala Namak Rice |</b>
              <span className={styles.span}>காலா நமக்</span>
            </div>
            <div className={styles.frameWrapper}>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.copyWrapper}>
                  <b className={styles.copy}>Copy</b>
                </div>
                <img
                  className={styles.copybuttonIcon}
                  alt=""
                  src="/copybutton.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.frameDiv}>
              <div className={styles.productPricingParent}>
                <b className={styles.productPricing}>Product Pricing -</b>
                <div className={styles.priceDividerWrapper}>
                  <div className={styles.priceDivider} />
                </div>
              </div>
            </div>
            <b className={styles.b}>₹ 200</b>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.productTaglineParent}>
              <b className={styles.productTagline}>Product Tagline -</b>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild1} />
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.experienceTheRareAndAuthenParent}>
                <blockquote className={styles.experienceTheRare}>
                  "Experience the Rare and Authentic Black Pearl Rice!"
                </blockquote>
                <div className={styles.frameWrapper2}>
                  <button className={styles.groupButton}>
                    <div className={styles.frameChild2} />
                    <div className={styles.copyContainer}>
                      <b className={styles.copy1}>Copy</b>
                    </div>
                    <img
                      className={styles.copybuttonIcon1}
                      alt=""
                      src="/copybutton.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productImage}>
        <div className={styles.imagePlaceholderParent}>
          <div className={styles.imagePlaceholder} />
          <img className={styles.rectangleIcon} loading="lazy" alt="" />
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
