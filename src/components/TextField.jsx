import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextField.module.css";

const TextField = ({
  className = "",
  inputLabelContainePlaceho,
  propHeight,
  propPadding,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <div
      className={[styles.textField, className].join(" ")}
      style={textFieldStyle}
    >
      <input
        className={styles.inputLabelContainers}
        placeholder={inputLabelContainePlaceho}
        type="text"
      />
      <div className={styles.textField1}>
        <div className={styles.inputs}>
          <div className={styles.div}>Enter your email address</div>
          <div className={styles.inputsChild} />
        </div>
        <img className={styles.icons} alt="" src="/icons.svg" />
      </div>
      <div className={styles.errorMessage}>Error message</div>
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  inputLabelContainePlaceho: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
};

export default TextField;
