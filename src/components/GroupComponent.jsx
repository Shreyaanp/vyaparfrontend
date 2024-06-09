import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <form className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.languageInput}>
        <div className={styles.languageDropdown}>
          <div className={styles.languageOptions}>
            <div className={styles.languageOptionList}>
              <div className={styles.languageOptionItems}>
                <div className={styles.languageOptionElements} />
                <div className={styles.hiddenOption}>
                  <div className={styles.emptyOption}>1</div>
                </div>
              </div>
              <div className={styles.languageOptionItems1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.optionIndicator} />
                </div>
              </div>
              <div className={styles.languageOptionItems2}>
                <div className={styles.languageOptionItemsChild} />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.languageOptionItems3}>
                <div className={styles.languageOptionItemsItem} />
              </div>
              <div className={styles.languageOptionItems4}>
                <div className={styles.languageOptionItemsInner} />
                <div className={styles.div1}>3</div>
              </div>
              <div className={styles.languageOptionItems5}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.languageOptionItems6}>
                <div className={styles.ellipseDiv} />
                <a className={styles.a}>4</a>
              </div>
            </div>
          </div>
          <div className={styles.dropdownDivider} />
        </div>
      </div>
      <div className={styles.productInput}>
        <div className={styles.itemSelection}>
          <a className={styles.languageSelection}>Language Selection</a>
          <div className={styles.selectionInstructions}>
            <p className={styles.selectLanguageYou}>
              Select language you will use to input product details.
            </p>
          </div>
          <div className={styles.dropdownContainer}>
            <div className={styles.selectItem}>
              <div className={styles.searchField}>
                <img
                  className={styles.searchicon}
                  alt=""
                  src="/searchicon.svg"
                />
              </div>
              <div className={styles.placeholder}>
                <span className={styles.search}>{`Search `}</span>
                <span className={styles.language}>Language</span>
              </div>
              <div className={styles.searchBackground} />
            </div>
          </div>
          <div className={styles.languageToggles}>
            <div className={styles.languageToggleOptions}>
              <div className={styles.label}>
                <div className={styles.labelafter} />
                <b className={styles.marathi}>Marathi</b>
              </div>
              <div className={styles.label1}>
                <div className={styles.labelafter1} />
                <b className={styles.odia}>Odia</b>
              </div>
              <div className={styles.div2}>
                <div className={styles.label2}>
                  <div className={styles.labelafter2} />
                  <b className={styles.hindi}>Hindi</b>
                </div>
              </div>
              <div className={styles.label3}>
                <div className={styles.labelafter3} />
                <b className={styles.englishuk}>English(UK)</b>
              </div>
              <img
                className={styles.svgIcon}
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.primaryBtn}>
        <b className={styles.buttonText}>Next step</b>
      </button>
    </form>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
