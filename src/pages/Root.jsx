import GroupComponent from "../components/GroupComponent";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <div className={styles.base} />
      <div className={styles.content}>
        <div className={styles.vyaparLaunchpadParent}>
          <b className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </b>
          <div className={styles.frameChild} />
        </div>
      </div>
      <GroupComponent />
    </div>
  );
};

export default Root;
