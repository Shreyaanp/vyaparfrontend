import TextField from "./TextField";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <form className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.createAnAccountParent}>
          <div className={styles.createAnAccount}>Create an account</div>
          <div className={styles.haveAnAccountLogin}>
            <div className={styles.alreadyHaveAnContainer}>
              <span className={styles.alreadyHaveAn}>
                Already have an account?
              </span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.logIn}>{`Log in  `}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.emailInputContainerParent}>
        <div className={styles.emailInputContainer}>
          <TextField inputLabelContainePlaceho="First name" />
          <TextField
            inputLabelContainePlaceho="Last name"
            propHeight="74px"
            propPadding="0px 0px var(--padding-32xl)"
          />
        </div>
        <div className={styles.email}>
          <input
            className={styles.emailChild}
            placeholder="Email address"
            type="text"
          />
          <div className={styles.textField}>
            <div className={styles.inputs}>
              <div className={styles.div}>Enter your email address</div>
              <div className={styles.inputsChild} />
            </div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
          <div className={styles.errorMessage}>Error message</div>
        </div>
        <div className={styles.passwordInputContainer}>
          <div className={styles.passwordFields}>
            <TextField
              inputLabelContainePlaceho="Password"
              propHeight="74px"
              propPadding="unset"
            />
            <TextField
              inputLabelContainePlaceho="Confirm your password"
              propHeight="74px"
              propPadding="unset"
            />
          </div>
          <input className={styles.use8Or} type="text" />
          <div className={styles.checkBox}>
            <input className={styles.checkBox1} type="checkbox" />
            <div className={styles.iWantTo}>Show password</div>
          </div>
        </div>
      </div>
      <div className={styles.submitButtonContainerWrapper}>
        <div className={styles.submitButtonContainer}>
          <div className={styles.submitButtonWrapper}>
            <button className={styles.button}>
              <div className={styles.iconsParent}>
                <img className={styles.icons1} alt="" src="/icons1.svg" />
                <div className={styles.signUp}>Create an account</div>
              </div>
            </button>
          </div>
          <div className={styles.socialOptionsContainerParent}>
            <div className={styles.socialOptionsContainer}>
              <div className={styles.socialDivider}>
                <div className={styles.socialDividerInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.or}> Or</div>
                <div className={styles.socialDividerChild}>
                  <div className={styles.frameItem} />
                </div>
              </div>
            </div>
            <div className={styles.socialButtons}>
              <button className={styles.button1}>
                <div className={styles.button2}>
                  <div className={styles.content}>
                    <img
                      className={styles.googleIcon}
                      alt=""
                      src="/google.svg"
                    />
                    <div className={styles.label}>Google</div>
                    <div className={styles.bage}>
                      <img
                        className={styles.arrowTopIcon}
                        alt=""
                        src="/arrow-top.svg"
                      />
                      <div className={styles.labelBody}>
                        <img
                          className={styles.arrowLeftIcon}
                          alt=""
                          src="/arrow-left.svg"
                        />
                        <div className={styles.labelTextIcon}>
                          <img
                            className={styles.warningIcon}
                            alt=""
                            src="/warning.svg"
                          />
                          <div className={styles.textspacer}>
                            <div className={styles.label1}>44</div>
                            <div className={styles.spacer2px} />
                          </div>
                        </div>
                        <img
                          className={styles.arrowRightIcon}
                          alt=""
                          src="/arrow-right.svg"
                        />
                      </div>
                      <img
                        className={styles.arrowBotIcon}
                        alt=""
                        src="/arrow-bot.svg"
                      />
                    </div>
                    <img
                      className={styles.warningIcon1}
                      alt=""
                      src="/warning1.svg"
                    />
                  </div>
                </div>
              </button>
              <div className={styles.button3}>
                <div className={styles.button4}>
                  <div className={styles.content1}>
                    <img
                      className={styles.biappleIcon}
                      loading="lazy"
                      alt=""
                      src="/biapple.svg"
                    />
                    <div className={styles.label2}>Apple ID</div>
                    <div className={styles.bage1}>
                      <img
                        className={styles.arrowTopIcon1}
                        alt=""
                        src="/arrow-top.svg"
                      />
                      <div className={styles.labelBody1}>
                        <img
                          className={styles.arrowLeftIcon1}
                          alt=""
                          src="/arrow-left.svg"
                        />
                        <div className={styles.labelTextIcon1}>
                          <img
                            className={styles.warningIcon2}
                            alt=""
                            src="/warning.svg"
                          />
                          <div className={styles.textspacer1}>
                            <div className={styles.label3}>44</div>
                            <div className={styles.spacer2px1} />
                          </div>
                        </div>
                        <img
                          className={styles.arrowRightIcon1}
                          alt=""
                          src="/arrow-right.svg"
                        />
                      </div>
                      <img
                        className={styles.arrowBotIcon1}
                        alt=""
                        src="/arrow-bot.svg"
                      />
                    </div>
                    <img
                      className={styles.warningIcon3}
                      alt=""
                      src="/warning1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
