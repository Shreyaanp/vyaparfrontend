import PropTypes from "prop-types";
import styles from "./ProductLinguisticContainer.module.css";

const ProductLinguisticContainer = ({ className = "" }) => {
  return (
    <div className={[styles.productLinguisticContainer, className].join(" ")}>
      <h2 className={styles.productLinguisticSathi}>
        Product Linguistic Sathi
      </h2>
      <div className={styles.linguisticIllustration}>
        <div className={styles.linguisticIllustrationContenParent}>
          <div className={styles.linguisticIllustrationConten}>
            <div className={styles.linguisticIllustrationContenChild} />
            <div className={styles.illustrationElements}>
              <div className={styles.illustration}>
                <img
                  className={styles.backgroundCompleteIcon}
                  alt=""
                  src="/background-complete-1.svg"
                />
                <img
                  className={styles.speechBubble1Icon}
                  alt=""
                  src="/speech-bubble-1.svg"
                />
                <div className={styles.groupWrapper}>
                  <div className={styles.group}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group2.svg"
                    />
                    <div className={styles.groupInner}>
                      <div className={styles.groupParent}>
                        <img
                          className={styles.groupIcon1}
                          loading="lazy"
                          alt=""
                          src="/group-12.svg"
                        />
                        <div className={styles.placeholder}>3</div>
                      </div>
                    </div>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className={styles.vectorIcon1}
                        loading="lazy"
                        alt=""
                        src="/vector-12.svg"
                      />
                      <img
                        className={styles.vectorIcon2}
                        loading="lazy"
                        alt=""
                        src="/vector-22.svg"
                      />
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className={styles.vectorIcon4}
                        loading="lazy"
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector-5.svg"
                      />
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector-6.svg"
                      />
                      <img
                        className={styles.vectorIcon7}
                        loading="lazy"
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.bottomElements}>
                  <img className={styles.floorIcon} alt="" src="/floor1.svg" />
                  <img className={styles.plantIcon} alt="" src="/plant-1.svg" />
                  <img
                    className={styles.character1Icon}
                    alt=""
                    src="/character-1-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.linguisticDescription}>
              <h2 className={styles.listYourProduct}>
                List your product in your buyer’s Language
              </h2>
              <div className={styles.linguisticCTA}>
                <button className={styles.chatList}>
                  <div className={styles.chatListChild} />
                  <div className={styles.startNowWrapper}>
                    <b className={styles.startNow}>Start Now</b>
                  </div>
                  <img
                    className={styles.communicationPaperPlane}
                    alt=""
                    src="/communication--paper-plane.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.shoppersWrapper}>
            <div className={styles.shoppers}>
              <img className={styles.unionIcon} alt="" />
              <img
                className={styles.purchaseIcon}
                loading="lazy"
                alt=""
                src="/purchase.svg"
              />
              <img
                className={styles.shoppingBasketIcon}
                loading="lazy"
                alt=""
                src="/shopping-basket.svg"
              />
              <img
                className={styles.bags0000014937409338798068369Icon}
                alt=""
                src="/bags-00000149374093387980683690000006566543838822054557.svg"
              />
              <div className={styles.deviceChat}>
                <img className={styles.deviceIcon} alt="" src="/device.svg" />
                <img
                  className={styles.speechBubble2Icon}
                  alt=""
                  src="/speech-bubble-2.svg"
                />
              </div>
              <img
                className={styles.character3Icon}
                alt=""
                src="/character-3.svg"
              />
              <img
                className={styles.character2Icon}
                loading="lazy"
                alt=""
                src="/character-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductLinguisticContainer.propTypes = {
  className: PropTypes.string,
};

export default ProductLinguisticContainer;
