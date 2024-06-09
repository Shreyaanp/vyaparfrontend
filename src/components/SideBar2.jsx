import PropTypes from "prop-types";
import styles from "./SideBar2.module.css";

const SideBar = ({ className = "", onClose }) => {
  return (
    <div className={[styles.sideBar, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.launchpadContainerWrapper}>
        <div className={styles.launchpadContainer}>
          <a className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </a>
          <div className={styles.launchpadContainerInner}>
            <div className={styles.frameChild} />
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.menuContainer}>
          <a className={styles.menu}>MENU</a>
        </div>
        <div className={styles.pageNavigation}>
          <div className={styles.scoresContainer}>
            <div className={styles.homeContainer}>
              <div className={styles.dropdownContainer}>
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
                <div className={styles.productLink}>
                  <img
                    className={styles.vuesaxlineardirectSendIcon}
                    alt=""
                    src="/vuesaxlineardirectsend.svg"
                  />
                  <div className={styles.productContainer}>
                    <a className={styles.product}>{`Product `}</a>
                  </div>
                  <img
                    className={styles.iconamoonarrowDown2Bold}
                    alt=""
                    src="/iconamoonarrowdown2bold.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.content}>
            <div className={styles.categories}>
              <div className={styles.categoryItems}>
                <div className={styles.categoryItem}>
                  <img
                    className={styles.vuesaxlinearbookIcon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.categoryOptions}>
                    <div className={styles.addProduct}>Add Product</div>
                  </div>
                </div>
              </div>
              <div className={styles.categoryItems1}>
                <div className={styles.vuesaxlinearbookParent}>
                  <img
                    className={styles.vuesaxlinearbookIcon1}
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.productListWrapper}>
                    <div className={styles.productList}>Product List</div>
                  </div>
                </div>
              </div>
              <div className={styles.categoryItems2}>
                <div className={styles.vuesaxlinearbookGroup}>
                  <img
                    className={styles.vuesaxlinearbookIcon2}
                    alt=""
                    src="/vuesaxlinearbook.svg"
                  />
                  <div className={styles.productChecklistWrapper}>
                    <div className={styles.productChecklist}>
                      Product Checklist
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.categoryItems3}>
                <div className={styles.categoryItemsChild} />
              </div>
              <div className={styles.categoryItems4}>
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
              <div className={styles.categoryItems5}>
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
                <div className={styles.questionMarkContainer}>
                  <input className={styles.questionMark} type="radio" />
                  <div className={styles.supportLabel}>
                    <div
                      className={styles.supportHelp}
                    >{`Support & Help!`}</div>
                  </div>
                </div>
              </div>
              <div className={styles.categoryItems6}>
                <div className={styles.categoryItemsItem} />
              </div>
              <div className={styles.general}>
                <a className={styles.general1}>GENERAL</a>
              </div>
              <div className={styles.categoryItems7}>
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
              <div className={styles.subscriptionContainer}>
                <div className={styles.subscriptionItems}>
                  <img
                    className={styles.secondaryCategories1}
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
                <div className={styles.logoutItems}>
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
  onClose: PropTypes.func,
};

export default SideBar;
