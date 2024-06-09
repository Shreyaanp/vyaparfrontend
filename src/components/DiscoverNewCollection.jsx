import PropTypes from "prop-types";
import styles from "./DiscoverNewCollection.module.css";

const DiscoverNewCollection = ({ className = "" }) => {
  return (
    <div className={[styles.discoverNewCollection, className].join(" ")}>
      <h1 className={styles.unlockGlobalGrowth}>Unlock Global Growth</h1>
    </div>
  );
};

DiscoverNewCollection.propTypes = {
  className: PropTypes.string,
};

export default DiscoverNewCollection;
