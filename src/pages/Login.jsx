import React from "react";
import LoginComponent from "../components/LoginComponent";
import styles from "./FormRegister.module.css";

const FormRegister = () => {
  return (
    <div className={styles.formRegister}>
      <section className={styles.baseParent}>
        <div className={styles.base} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.vyaparLaunchpadParent}>
            <b className={styles.vyaparLaunchpad}>
              <span>Vya</span>
              <span className={styles.par}>par</span>
              <span> Launch</span>
              <span className={styles.pad}>pad</span>
            </b>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameItem} />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.contentContainerParent}>
                <div className={styles.contentContainer}>
                  <img
                    className={styles.backgroundSimpleIcon}
                    alt=""
                    src="/background-simple.svg"
                  />
                  <div className={styles.backgroundCompleteParent}>
                    <img
                      className={styles.backgroundCompleteIcon}
                      alt=""
                      src="/background-complete.svg"
                    />
                    <img className={styles.floorIcon} alt="" src="/floor.svg" />
                    <img
                      className={styles.shoppingBagIcon}
                      alt=""
                      src="/shopping-bag.svg"
                    />
                    <img
                      className={styles.giftsIcon}
                      loading="lazy"
                      alt=""
                      src="/gifts.svg"
                    />
                    <div className={styles.group}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                      />
                      <div className={styles.group1}>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector-11.svg"
                        />
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector-21.svg"
                        />
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group.svg"
                        />
                        <img
                          className={styles.groupIcon1}
                          alt=""
                          src="/group-1.svg"
                        />
                        <img
                          className={styles.groupIcon2}
                          alt=""
                          src="/group-2.svg"
                        />
                        <img
                          className={styles.groupIcon3}
                          loading="lazy"
                          alt=""
                          src="/group-3.svg"
                        />
                        <img
                          className={styles.groupIcon4}
                          alt=""
                          src="/group-4.svg"
                        />
                        <img
                          className={styles.groupIcon5}
                          alt=""
                          src="/group-5.svg"
                        />
                      </div>
                      <img
                        className={styles.groupIcon6}
                        alt=""
                        src="/group-6.svg"
                      />
                    </div>
                    <img
                      className={styles.saleTagIcon}
                      alt=""
                      src="/sale-tag.svg"
                    />
                    <img
                      className={styles.creditCardIcon}
                      loading="lazy"
                      alt=""
                      src="/credit-card.svg"
                    />
                    <img
                      className={styles.characterIcon}
                      alt=""
                      src="/character.svg"
                    />
                    <div className={styles.frameInner} />
                  </div>
                </div>
                <div className={styles.letsGetStartedWrapper}>
                  <div className={styles.letsGetStarted}>Let’s get Started</div>
                </div>
              </div>
            </div>
            <div className={styles.yourMultilingualGateway}>
              Your Multilingual gateway to global e-commerce!
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <LoginComponent />
        </div>
      </section>
    </div>
  );
};

export default FormRegister;
