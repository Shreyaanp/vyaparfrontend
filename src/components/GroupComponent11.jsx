import PropTypes from "prop-types";
import styles from "./GroupComponent11.module.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={[styles.parent, className].join(" ")}
      required={true}
      multiple
    >
      <label className={styles.label} for="file-29:28023">
        <div className={styles.uploadArea}>
          <img
            className={styles.uploadAreaChild}
            loading="lazy"
            alt=""
            src="/group-31.svg"
          />
        </div>
        <div className={styles.fileInput}>
          <div
            className={styles.chooseAFile}
          >{`Choose a file or drag & drop it here`}</div>
          <div className={styles.browseButtonContainer}>
            <button className={styles.browseButtonWrapper}>
              <div className={styles.browseFile}>Browse File</div>
            </button>
          </div>
        </div>
        <div className={styles.frameChild} />
      </label>
      <input className={styles.input} type="file" id="file-29:28023" />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
