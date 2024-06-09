import GroupComponent2 from "../components/GroupComponent2";
import styles from "./Frame11.module.css";

const Frame1 = () => {
  return (
    <div className={styles.baseParent}>
      <div className={styles.base} />
      <div className={styles.vyaparLaunchpadWrapper}>
        <b className={styles.vyaparLaunchpad}>
          <span>Vya</span>
          <span className={styles.par}>par</span>
          <span> Launch</span>
          <span className={styles.pad}>pad</span>
        </b>
      </div>
      <GroupComponent2 />
    </div>
  );
};

export default Frame1;
