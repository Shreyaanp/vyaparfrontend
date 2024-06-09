import PropTypes from "prop-types";
import styles from "./SideBar.module.css";

const SideBar = ({ className = "" }) => {
  return (
    <div className={[styles.sideBar, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.vyaparLaunchpadContainer}>
        <div className={styles.vyaparLaunchpadParent}>
          <b className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </b>
          <div className={styles.ellipseWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.menuWrapper}>
          <a className={styles.menu}>MENU</a>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationItems}>
            <div className={styles.navigationItemContainer}>
              <div className={styles.navigationLinksParent}>
                <div className={styles.navigationLinks}>
                  <img
                    className={styles.secondaryScores}
                    loading="lazy"
                    alt=""
                    src="/secondary--scores.svg"
                  />
                  <div className={styles.homeLink}>
                    <a className={styles.home}>Home</a>
                  </div>
                </div>
                <div className={styles.productNavigation}>
                  <img
                    className={styles.vuesaxlineardirectSendIcon}
                    alt=""
                    src="/vuesaxlineardirectsend.svg"
                  />
                  <div className={styles.productLink}>
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
            <div className={styles.separator} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentHeader}>
              <div className={styles.navigationLinksContainer}>
                <div className={styles.vuesaxlinearbookParent}>
                  <img
                    className={styles.vuesaxlinearbookIcon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.productManagementLinks}>
                    <div className={styles.addProduct}>Add Product</div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationLinksContainer1}>
                <div className={styles.vuesaxlinearbookGroup}>
                  <img
                    className={styles.vuesaxlinearbookIcon1}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.productListWrapper}>
                    <div className={styles.productList}>Product List</div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationLinksContainer2}>
                <div className={styles.vuesaxlinearbookContainer}>
                  <img
                    className={styles.vuesaxlinearbookIcon2}
                    loading="lazy"
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
              <div className={styles.navigationLinksContainer3}>
                <div className={styles.navigationLinksContainerChild} />
              </div>
              <div className={styles.navigationLinksContainer4}>
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
              <div className={styles.navigationLinksContainer5}>
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
              <div className={styles.support}>
                <div className={styles.supportIconContainer}>
                  <input className={styles.questionMark} type="radio" />
                  <div className={styles.supportLabel}>
                    <div
                      className={styles.supportHelp}
                    >{`Support & Help!`}</div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationLinksContainer6}>
                <div className={styles.navigationLinksContainerItem} />
              </div>
              <div className={styles.general}>
                <a className={styles.general1}>GENERAL</a>
              </div>
              <div className={styles.navigationLinksContainer7}>
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
              <div className={styles.categoriesSubscription}>
                <div className={styles.secondaryCategoriesGroup}>
                  <img
                    className={styles.secondaryCategories1}
                    loading="lazy"
                    alt=""
                    src="/secondary--categories-1@2x.png"
                  />
                  <div className={styles.subscriptionLink}>
                    <div className={styles.subscription}>Subscription</div>
                  </div>
                  <div className={styles.newContainer}>
                    <div className={styles.new}>
                      <div className={styles.bg} />
                      <b className={styles.new1}>NEW</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.logoutContainer}>
                <div className={styles.secondaryAllGamesParent}>
                  <img
                    className={styles.secondaryAllGames}
                    loading="lazy"
                    alt=""
                    src="/secondary--all-games@2x.png"
                  />
                  <div className={styles.logoutLink}>
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
