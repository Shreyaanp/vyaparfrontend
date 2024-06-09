import PropTypes from "prop-types";
import styles from "./GroupComponent2.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.ellipseParent}>
        <div className={styles.ellipseDiv} />
        <div className={styles.div}>1</div>
      </div>
      <div className={styles.ellipseGroup}>
        <div className={styles.frameChild1} />
        <div className={styles.div1}>2</div>
      </div>
      <div className={styles.ellipseContainer}>
        <div className={styles.frameChild2} />
        <div className={styles.div2}>3</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild3} />
        <div className={styles.div3}>4</div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.sidebarElements}>
          <div className={styles.elementContainer}>
            <div className={styles.frameParent}>
              <div className={styles.iconsParent}>
                <div className={styles.icons} />
                <div className={styles.hiddenIconBackgroundWrapper}>
                  <div className={styles.hiddenIconBackground}>1</div>
                </div>
              </div>
              <div className={styles.rectangleWrapper}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.ellipseParent1}>
                <div className={styles.frameChild4} />
                <div className={styles.div4}>2</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameChild5} />
                    <div className={styles.frameChild6} />
                  </div>
                  <div className={styles.circularIconBackground}>
                    <div className={styles.circularIconBackgroundChild} />
                    <img
                      className={styles.circularIconBackgroundItem}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className={styles.ellipseParent2}>
                <div className={styles.frameChild7} />
                <div className={styles.div5}>3</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild8} />
              </div>
              <div className={styles.ellipseParent3}>
                <div className={styles.frameChild9} />
                <a className={styles.a}>4</a>
              </div>
            </div>
          </div>
          <div className={styles.sidebarElementsChild} />
        </div>
      </div>
      <div className={styles.productDetailsTitleWrapper}>
        <div className={styles.productDetailsTitle}>
          <b className={styles.productDetails}>Product details</b>
          <div className={styles.enterDetailsOf}>
            Enter details of the product for listing.
          </div>
        </div>
      </div>
      <div className={styles.productDescriptionParent}>
        <div className={styles.productDescription}>Product Description</div>
        <textarea
          className={styles.frameTextarea}
          placeholder="Enter the description of the product"
          rows={9}
          cols={26}
        />
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <button className={styles.secondaryBtn}>
            <div className={styles.buttonText}>Previous step</div>
          </button>
          <button className={styles.primaryBtn}>
            <b className={styles.buttonText1}>Next step</b>
          </button>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
