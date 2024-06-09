import VuesaxlinearaddIcon from "./VuesaxlinearaddIcon";
import PropTypes from "prop-types";
import styles from "./GroupComponent21.module.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.wrapper}>
              <div className={styles.div}>1</div>
            </div>
          </div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.ellipseDiv} />
            <div className={styles.div1}>2</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <img className={styles.rectangleIcon} loading="lazy" alt="" />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.ellipseIcon}
              loading="lazy"
              alt=""
              src="/ellipse-437.svg"
            />
            <div className={styles.container}>
              <div className={styles.div2}>3</div>
            </div>
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/rectangle-4356.svg"
            />
          </div>
          <div className={styles.vectorGroup}>
            <img
              className={styles.frameChild2}
              loading="lazy"
              alt=""
              src="/ellipse-437.svg"
            />
            <div className={styles.frame}>
              <a className={styles.a}>4</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.productDetailsParent}>
        <b className={styles.productDetails}>Product details</b>
        <div className={styles.enterDetailsOf}>
          Enter details of the product for listing.
        </div>
      </div>
      <div className={styles.productImages}>Product Images</div>
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.wrapperRectangle4509Parent}>
                <div className={styles.wrapperRectangle4509}>
                  <img
                    className={styles.wrapperRectangle4509Child}
                    loading="lazy"
                    alt=""
                    src="/rectangle-4509@2x.png"
                  />
                </div>
                <div className={styles.wrapperRectangle4510}>
                  <img
                    className={styles.wrapperRectangle4510Child}
                    loading="lazy"
                    alt=""
                    src="/rectangle-4510@2x.png"
                  />
                </div>
              </div>
              <div className={styles.wrapperRectangle4512Parent}>
                <div className={styles.wrapperRectangle4512}>
                  <img
                    className={styles.wrapperRectangle4512Child}
                    loading="lazy"
                    alt=""
                    src="/rectangle-4512@2x.png"
                  />
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild3} />
                  <VuesaxlinearaddIcon />
                </div>
              </div>
            </div>
          </div>
          <button className={styles.secondaryBtn}>
            <div className={styles.buttonText}>Previous step</div>
          </button>
        </div>
        <div className={styles.wrapperRectangle4511Parent}>
          <div className={styles.wrapperRectangle4511}>
            <img
              className={styles.wrapperRectangle4511Child}
              loading="lazy"
              alt=""
              src="/rectangle-4511@2x.png"
            />
          </div>
          <div className={styles.primaryBtnWrapper}>
            <button className={styles.primaryBtn}>
              <b className={styles.buttonText1}>Next step</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
