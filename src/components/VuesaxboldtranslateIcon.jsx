import PropTypes from "prop-types";
import styles from "./VuesaxboldtranslateIcon.module.css";

const VuesaxboldtranslateIcon = ({ className = "" }) => {
  return (
    <img
      className={[styles.vuesaxboldtranslateIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/vuesaxboldtranslate.svg"
    />
  );
};

VuesaxboldtranslateIcon.propTypes = {
  className: PropTypes.string,
};

export default VuesaxboldtranslateIcon;
