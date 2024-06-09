import PropTypes from "prop-types";
import React, { useState } from 'react';
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('Marathi');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <form className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.languageInput}>
        <div className={styles.languageDropdown}>
          <div className={styles.languageOptions}>
            <div className={styles.languageOptionList}>
              {/* Your language options */}
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
              Select the language you will use to input product details.
            </p>
          </div>
          <div className={styles.dropdownContainer}>
            <div className={styles.selectItem}>
              <div className={styles.searchField}>
                <input
                  type="text"
                  className={styles.searchBar}
                  placeholder={`Search Language`}
                />
                <img
                  className={styles.searchicon}
                  alt=""
                  src="/searchicon.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.languageToggles}>
            <div className={styles.languageToggleOptions}>
              <button
                type="button"
                className={`${styles.label1} ${selectedLanguage === 'Marathi' ? styles.label2 : ''}`}
                onClick={() => handleLanguageChange('Marathi')}
              >
                <div className={styles.labelafter} />
                <b className={styles.marathi}>Marathi</b>
                {selectedLanguage === 'Marathi' && (
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg.svg"
                  />
                )}
              </button>
              <button
                type="button"
                className={`${styles.label1} ${selectedLanguage === 'Odia' ? styles.label2 : ''}`}
                onClick={() => handleLanguageChange('Odia')}
              >
                <div className={styles.labelafter} />
                <b className={styles.odia}>Odia</b>
                {selectedLanguage === 'Odia' && (
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg.svg"
                  />
                )}
              </button>
              <button
                type="button"
                className={`${styles.label1} ${selectedLanguage === 'Hindi' ? styles.label2 : ''}`}
                onClick={() => handleLanguageChange('Hindi')}
              >
                <div className={styles.labelafter} />
                <b className={styles.hindi}>Hindi</b>
                {selectedLanguage === 'Hindi' && (
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg.svg"
                  />
                )}
              </button>
              <button
                type="button"
                className={`${styles.label1} ${selectedLanguage === 'English' ? styles.label2 : ''}`}
                onClick={() => handleLanguageChange('English')}
              >
                <div className={styles.labelafter} />
                <b className={styles.englishuk}>English(UK)</b>
                {selectedLanguage === 'English' && (
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg.svg"
                  />
                )}
              </button>
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
