import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <form className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.wrapper}>
                <div className={styles.div}>1</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.rectangleDiv} />
              </div>
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.ellipseDiv} />
              <div className={styles.div1}>2</div>
            </div>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameChild2} />
              <div className={styles.div2}>3</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameChild4} />
              <a className={styles.a}>4</a>
            </div>
          </div>
        </div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.sellersDetailParent}>
        <b className={styles.sellersDetail}>Seller’s Detail</b>
        <div className={styles.enterYourVirtual}>
          Enter your virtual shop’s details.
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameParent2}>
          <div className={styles.shopNameParent}>
            <a className={styles.shopName}>Shop Name</a>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild5} />
              <input
                className={styles.frameInput}
                placeholder="John Carter"
                type="text"
              />
              <img className={styles.groupIcon} alt="" src="/group-41.svg" />
            </div>
          </div>
          <FrameComponent
            productsLanguage="Product’s Language "
            frame24Placeholder="Hindi"
            group="/group1.svg"
          />
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.sellersStateParent}>
            <div className={styles.sellersState}>Seller’s state</div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild6} />
              <input
                className={styles.enterYourState}
                placeholder="Enter your state"
                type="text"
              />
              <div className={styles.groupWrapper}>
                <img className={styles.groupIcon1} alt="" src="/group-11.svg" />
              </div>
            </div>
          </div>
          <FrameComponent
            productsLanguage="Product Category"
            frame24Placeholder="Product category"
            group="/group-3984.svg"
            propPadding="var(--padding-smi) var(--padding-3xl) var(--padding-base) var(--padding-mid)"
            propWidth="125px"
          />
        </div>
      </div>
      <div className={styles.primaryBtnWrapper}>
        <button className={styles.primaryBtn}>
          <b className={styles.buttonText}>Next step</b>
        </button>
      </div>
    </form>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
