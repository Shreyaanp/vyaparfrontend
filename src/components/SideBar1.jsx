import PropTypes from "prop-types";
import styles from "./SideBar1.module.css";

const SideBar = ({ className = "" }) => {
  return (
    <div className={[styles.sideBar, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.vyaparLaunchpadContainerWrapper}>
        <div className={styles.vyaparLaunchpadContainer}>
          <a className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </a>
          <div className={styles.productListWrapper}>
            <div className={styles.productList} />
          </div>
        </div>
      </div>
      <div className={styles.menuContainerParent}>
        <div className={styles.menuContainer}>
          <a className={styles.menu}>MENU</a>
        </div>
        <div className={styles.scoresContainerParent}>
          <div className={styles.scoresContainer}>
            <div className={styles.navigationContainerWrapper}>
              <div className={styles.navigationContainer}>
                <div className={styles.cart}>
                  <img
                    className={styles.secondaryScores}
                    loading="lazy"
                    alt=""
                    src="/secondary--scores.svg"
                  />
                  <div className={styles.homeWrapper}>
                    <a className={styles.home}>Home</a>
                  </div>
                </div>
                <div className={styles.productNavigation}>
                  <img
                    className={styles.vuesaxlineardirectSendIcon}
                    alt=""
                    src="/vuesaxlineardirectsend.svg"
                  />
                  <div className={styles.productWrapper}>
                    <div className={styles.product}>{`Product `}</div>
                  </div>
                  <img
                    className={styles.iconamoonarrowDown2Bold}
                    alt=""
                    src="/iconamoonarrowdown2bold.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.scoresContainerChild} />
          </div>
          <div className={styles.categoriesContainerWrapper}>
            <div className={styles.categoriesContainer}>
              <div className={styles.categories}>
                <div className={styles.categoryItems}>
                  <img
                    className={styles.vuesaxlinearbookIcon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.categoryLabels}>
                    <div className={styles.addProduct}>Add Product</div>
                  </div>
                </div>
              </div>
              <div className={styles.categories1}>
                <div className={styles.vuesaxlinearbookParent}>
                  <img
                    className={styles.vuesaxlinearbookIcon1}
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.productListContainer}>
                    <div className={styles.productList1}>Product List</div>
                  </div>
                </div>
              </div>
              <div className={styles.categories2}>
                <div className={styles.vuesaxlinearbookGroup}>
                  <img
                    className={styles.vuesaxlinearbookIcon2}
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.dashboardAnalyticsWrapper}>
                    <div className={styles.dashboardAnalytics}>
                      Dashboard Analytics
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.categories3}>
                <div className={styles.categoriesChild} />
              </div>
              <div className={styles.categories4}>
                <div className={styles.vuesaxlinearlink2Parent}>
                  <img
                    className={styles.vuesaxlinearlink2Icon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearlink2.svg"
                  />
                  <div className={styles.integrationWrapper}>
                    <div className={styles.integration}>Integration</div>
                  </div>
                </div>
              </div>
              <div className={styles.categories5}>
                <div className={styles.multiUserParent}>
                  <img
                    className={styles.multiUserIcon}
                    loading="lazy"
                    alt=""
                    src="/multi-user.svg"
                  />
                  <div className={styles.teamWrapper}>
                    <div className={styles.team}>Team</div>
                  </div>
                </div>
              </div>
              <div className={styles.supportContainerWrapper}>
                <div className={styles.supportContainer}>
                  <input className={styles.questionMark} type="radio" />
                  <div className={styles.supportHelpWrapper}>
                    <div
                      className={styles.supportHelp}
                    >{`Support & Help!`}</div>
                  </div>
                </div>
              </div>
              <div className={styles.categories6}>
                <div className={styles.categoriesItem} />
              </div>
              <div className={styles.generalWrapper}>
                <a className={styles.general}>GENERAL</a>
              </div>
              <div className={styles.categories7}>
                <div className={styles.secondaryCategoriesParent}>
                  <img
                    className={styles.secondaryCategories}
                    loading="lazy"
                    alt=""
                    src="/secondary--categories@2x.png"
                  />
                  <div className={styles.settingsWrapper}>
                    <a className={styles.settings}>Settings</a>
                  </div>
                </div>
              </div>
              <div className={styles.subscriptionContainerWrapper}>
                <div className={styles.subscriptionContainer}>
                  <img
                    className={styles.secondaryCategories1}
                    alt=""
                    src="/secondary--categories-1@2x.png"
                  />
                  <div className={styles.subscriptionLabel}>
                    <div className={styles.subscription}>Subscription</div>
                  </div>
                  <div className={styles.newWrapper}>
                    <div className={styles.new}>
                      <div className={styles.bg} />
                      <b className={styles.new1}>NEW</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.logoutContainerWrapper}>
                <div className={styles.logoutContainer}>
                  <img
                    className={styles.secondaryAllGames}
                    loading="lazy"
                    alt=""
                    src="/secondary--all-games@2x.png"
                  />
                  <div className={styles.logoutLabel}>
                    <div className={styles.logOut}>Log out</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.legalPrivacyContainer}>
          <span className={styles.legalPrivacyCookiePolic}>
            <span>
              Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
              Resource Chart
            </span>
          </span>
          <span className={styles.languageEnglishUs}>
            <span className={styles.language}>Language</span>
            <span className={styles.span}>{`: `}</span>
            <span>English (US)</span>
          </span>
        </p>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
};

export default SideBar;
