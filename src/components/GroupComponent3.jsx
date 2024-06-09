import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent3.module.css";

const GroupComponent = ({
  className = "",
  harriettPayne,
  memberIcons,
  amazon,
  propPadding,
  propAlignSelf,
  propMinWidth,
}) => {
  const platformsStyle = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const amazonStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.wrapperHarriettPayneParent, className].join(" ")}>
      <div className={styles.wrapperHarriettPayne}>
        <img className={styles.harriettPayneIcon} alt="" src={harriettPayne} />
      </div>
      <img
        className={styles.memberIcons}
        loading="lazy"
        alt=""
        src={memberIcons}
      />
      <div className={styles.platforms} style={platformsStyle}>
        <h2 className={styles.amazon} style={amazonStyle}>
          {amazon}
        </h2>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  harriettPayne: PropTypes.string,
  memberIcons: PropTypes.string,
  amazon: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
