import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import styles from "./GroupComponent2.module.css";

const GroupComponent = ({ className = "" }) => {
  const [primaryButtonText, setPrimaryButtonText] = useState('Previous Step');

  // Function to update primary button text based on screen size
  const updatePrimaryButtonText = () => {
    if (window.innerWidth <= 450) {
      setPrimaryButtonText('Prev. Step');
    } else {
      setPrimaryButtonText('Previous step');
    }
  };

  // Update primary button text on component mount and window resize
  useEffect(() => {
    updatePrimaryButtonText();
    window.addEventListener('resize', updatePrimaryButtonText);
    return () => {
      window.removeEventListener('resize', updatePrimaryButtonText);
    };
  }, []);

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
      <div className={styles.productDetailsOuterWrapper}>
         <div className={styles.productDetailsTitleWrapper}>
           <div className={styles.productDetailsTitle}>
             <b className={styles.productDetails}>Product details</b>
             <div className={styles.enterDetailsOf}>
               Enter details of the product for listing.
             </div>
           </div>
         </div>
         <div className={styles.productDescriptionParent}>
           <div className={styles.productDescription}>Product Description</div>
           <textarea
             className={styles.frameTextarea}
             placeholder="Enter the description of the product"
             rows={9}
             cols={26}
           />
         </div>
         <div className={styles.buttonsWrapper}>
           <div className={styles.buttons}>
             <button className={styles.secondaryBtn}>
               <div className={styles.buttonText}>{primaryButtonText}</div>
             </button>
             <button className={styles.primaryBtn}>
               <b className={styles.buttonText1}>Next Step</b>
             </button>
           </div>
         </div>
         </div>
    </form>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
