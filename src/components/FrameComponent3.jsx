import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent = ({
  className = "",
  productsLanguage,
  frame24Placeholder,
  group,
  propPadding,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameInputStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.productsLanguageParent, className].join(" ")}>
      <div className={styles.productsLanguage}>{productsLanguage}</div>
      <div className={styles.rectangleParent} style={frameDivStyle}>
        <div className={styles.frameChild} />
        <input
          className={styles.frameItem}
          placeholder={frame24Placeholder}
          type="text"
          style={frameInputStyle}
        />
        <img className={styles.groupIcon} alt="" src={group} />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  productsLanguage: PropTypes.string,
  frame24Placeholder: PropTypes.string,
  group: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent;
