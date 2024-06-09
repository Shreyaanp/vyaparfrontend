import DetailsContainer from "../components/DetailsContainer";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./Root1.module.css";

const Root1 = () => {
  return (
    <div className={styles.root}>
      <div className={styles.base} />
      <div className={styles.content}>
        <div className={styles.layout}>
          <b className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </b>
          <div className={styles.shape} />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <DetailsContainer />
        <div className={styles.uploadContainer}>
          <GroupComponent1 />
        </div>
        <div className={styles.actions}>
          <button className={styles.secondaryBtn}>
            <div className={styles.buttonText}>Previous step</div>
          </button>
          <button className={styles.primaryBtn}>
            <b className={styles.buttonText1}>Next step</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root1;
