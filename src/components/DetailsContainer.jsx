import PropTypes from "prop-types";
import styles from "./DetailsContainer.module.css";

const DetailsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.detailsContainer, className].join(" ")}>
      <div className={styles.detailsContent}>
        <div className={styles.detailsStructure}>
          <div className={styles.detailsElements}>
            <div className={styles.elementShapes} />
            <div className={styles.emptyElementWrapper}>
              <div className={styles.emptyElement}>1</div>
            </div>
          </div>
          <div className={styles.detailsElements1}>
            <div className={styles.detailsElementsChild} />
          </div>
          <div className={styles.detailsElements2}>
            <div className={styles.detailsElementsItem} />
            <div className={styles.div}>2</div>
          </div>
          <div className={styles.detailsElements3}>
            <img
              className={styles.detailsElementsInner}
              loading="lazy"
              alt=""
              src="/rectangle-4355.svg"
            />
          </div>
          <div className={styles.detailsElements4}>
            <img
              className={styles.ellipseIcon}
              loading="lazy"
              alt=""
              src="/ellipse-437.svg"
            />
            <div className={styles.wrapper}>
              <div className={styles.div1}>3</div>
            </div>
          </div>
          <div className={styles.detailsElements5}>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.detailsElements6}>
            <div className={styles.ellipseDiv} />
            <a className={styles.a}>4</a>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.productInfo}>
        <b className={styles.productDetails}>Product details</b>
        <div className={styles.enterDetailsOf}>
          Enter details of the product for listing.
        </div>
      </div>
      <div className={styles.productImages}>Product Images</div>
    </div>
  );
};

DetailsContainer.propTypes = {
  className: PropTypes.string,
};

export default DetailsContainer;
