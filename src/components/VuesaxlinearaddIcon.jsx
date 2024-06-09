import PropTypes from "prop-types";
import styles from "./VuesaxlinearaddIcon.module.css";

const VuesaxlinearaddIcon = ({ className = "" }) => {
  return (
    <img
      className={[styles.vuesaxlinearaddIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/vuesaxlinearadd.svg"
    />
  );
};

VuesaxlinearaddIcon.propTypes = {
  className: PropTypes.string,
};

export default VuesaxlinearaddIcon;
