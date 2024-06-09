import GroupComponent from "../components/GroupComponent";
import styles from "./Frame2.module.css";

const Frame = () => {
  return (
    <div className={styles.baseParent}>
      <div className={styles.base} />
      <header className={styles.frameWrapper}>
        <div className={styles.vyaparLaunchpadParent}>
          <b className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </b>
          <div className={styles.frameChild} />
        </div>
      </header>
      <GroupComponent />
    </div>
  );
};

export default Frame;
