import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.parent, className].join(" ")}>
      <img className={styles.icon} alt="" src="/19466810-6134223-1.svg" />
      <div className={styles.frameWrapper}>
        <div className={styles.shapeParent}>
          <img
            className={styles.shapeIcon}
            loading="lazy"
            alt=""
            src="/shape.svg"
          />
          <img
            className={styles.shapeIcon1}
            loading="lazy"
            alt=""
            src="/shape-1.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <div className={styles.div}>01</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
