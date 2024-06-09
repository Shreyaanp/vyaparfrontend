import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import GroupComponent from "../components/GroupComponent";
import styles from "./Version2.module.css";

const Version = () => {
  return (
    <div className={styles.version9}>
      <SideBar />
      <main className={styles.topNavContainer}>
        <TopNav />
        <section className={styles.checklistContainer}>
          <div className={styles.checklistHeaderParent}>
            <div className={styles.checklistHeader}>
              <div className={styles.checklistTitle}>
                <h2 className={styles.availableChecklist}>
                  Available Checklist
                </h2>
                <div className={styles.addMemberButton}>
                  <button className={styles.button}>
                    <div className={styles.bg} />
                    <b className={styles.addNewMember}>Request any</b>
                  </button>
                </div>
              </div>
              <div className={styles.members}>
                <div className={styles.memberList}>
                  <GroupComponent
                    harriettPayne="/harriett-payne@2x.png"
                    memberIcons="/rectangle-4520@2x.png"
                    amazon="Amazon"
                  />
                  <GroupComponent
                    harriettPayne="/harriett-payne-1@2x.png"
                    memberIcons="/rectangle-4520-1@2x.png"
                    amazon="ONDC"
                    propPadding="0px 86px 0px var(--padding-58xl)"
                    propAlignSelf="stretch"
                    propMinWidth="72px"
                  />
                  <GroupComponent
                    harriettPayne="/harriett-payne-2@2x.png"
                    memberIcons="/rectangle-4520-2@2x.png"
                    amazon="Gem"
                    propPadding="0px var(--padding-58xl)"
                    propAlignSelf="unset"
                    propMinWidth="59px"
                  />
                </div>
              </div>
            </div>
            <div className={styles.unionContainer}>
              <img className={styles.unionIcon} loading="lazy" alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Version;
