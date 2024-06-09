import React from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <Header />
      <div className={styles.productInner}>
        <div className={styles.frameChild} />
      </div>
      <main className={styles.frameParent}>
        <div className={styles.backWrapper}>
          <img
            className={styles.backIcon}
            loading="lazy"
            alt=""
            src="/back.svg"
          />
        </div>
        <section className={styles.frameGroup}>
          <FrameComponent3 />
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.productDescriptionParent}>
                  <b className={styles.productDescription}>
                    Product Description -
                  </b>
                  <div className={styles.descriptionDividerWrapper}>
                    <div className={styles.descriptionDivider} />
                  </div>
                </div>
                <div className={styles.kalanamakRiceIsAScentedRiParent}>
                  <p className={styles.kalanamakRiceIs}>
                    Kalanamak Rice is a scented rice variety with a rich history
                    dating back to the Buddhist period. It is primarily
                    cultivated in Nepal and India, particularly in the Himalayan
                    Tarai region and eastern Uttar Pradesh. This non-basmati
                    rice has a short to medium grain length and is highly
                    resistant to rice diseases. Its black husk gives it its
                    name, while the rice itself is white. Kalanamak rice is
                    renowned for its quality, aroma, and antioxidant properties.
                    It is considered a rare and authentic variety.
                  </p>
                  <button className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.copyWrapper}>
                      <b className={styles.copy}>Copy</b>
                    </div>
                    <img
                      className={styles.copybuttonIcon}
                      alt=""
                      src="/copybutton.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent1}>
                    <div className={styles.productFeaturesParent}>
                      <b className={styles.productFeatures}>
                        Product Features -
                      </b>
                      <div className={styles.featuresDivider} />
                    </div>
                    <p className={styles.kalaNamakHasContainer}>
                      <ul className={styles.kalaNamakHasBeenInCultiva}>
                        <li className={styles.kalaNamakHas}>
                          Kala Namak has been in cultivation since the Buddhist
                          period (600 BC) and was granted geographical
                          indication(GI)tag in 2012 by government of India.
                        </li>
                        <li className={styles.whenTheLord}>
                          When the Lord Buddha visited kapilvastu after
                          enlightment, the villagers asked him for prasad
                          (gift). He gave them the grains, asking them to sow it
                          in a marshy place."The rice will have typical aroma
                          which will always remind people of me".
                        </li>
                        <li className={styles.traditionallyMilledRice}>
                          Traditionally milled rice directly procured from
                          Farmers
                        </li>
                        <li className={styles.thisAromaticRice}>
                          This Aromatic rice is rich in Iron and Zinc,
                          therefore, having this rice is said to prevent
                          diseases borne out of Iron and Zinc deficiencies
                        </li>
                        <li>
                          It contains antioxidant “anthocyanin” and prevents
                          heart diseases, skin diseases.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <button className={styles.groupButton}>
                  <div className={styles.frameChild1} />
                  <div className={styles.copyContainer}>
                    <b className={styles.copy1}>Copy</b>
                  </div>
                  <img
                    className={styles.copybuttonIcon1}
                    alt=""
                    src="/copybutton.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <div className={styles.productThumbnailsWrapper}>
                  <div className={styles.productThumbnails}>
                    <div className={styles.img1}>
                      <div className={styles.img1Child} />
                      <img
                        className={styles.thumbnailImagesIcon}
                        loading="lazy"
                        alt=""
                        src="/rectangle-2@2x.png"
                      />
                    </div>
                    <div className={styles.img2}>
                      <div className={styles.img2Child} />
                      <img
                        className={styles.img2Item}
                        loading="lazy"
                        alt=""
                        src="/rectangle-4@2x.png"
                      />
                    </div>
                    <div className={styles.img3}>
                      <div className={styles.img3Child} />
                      <img
                        className={styles.img3Item}
                        loading="lazy"
                        alt=""
                        src="/rectangle-5@2x.png"
                      />
                    </div>
                    <div className={styles.img4}>
                      <div className={styles.img4Child} />
                      <img
                        className={styles.img4Item}
                        loading="lazy"
                        alt=""
                        src="/rectangle-6@2x.png"
                      />
                    </div>
                    <div className={styles.img5}>
                      <div className={styles.img5Child} />
                      <img
                        className={styles.langfjaellOfficeChairWithAIcon}
                        loading="lazy"
                        alt=""
                        src="/langfjaellofficechairwitharmrestsgunnaredbeigeblack--0461403-pe607530-s5-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild2} />
                  <div className={styles.keywordsParent}>
                    <b className={styles.keywords}>Keywords-</b>
                    <div className={styles.keywordsDivider} />
                  </div>
                  <div className={styles.kalanamakRiceScentedRiceParent}>
                    <p
                      className={styles.kalanamakRiceScented}
                    >{`Kalanamak rice, scented rice, black husk, ancient grain, aromatic rice, nutritional benefits, fiber-rich, low fat, `}</p>
                    <div className={styles.frameWrapper2}>
                      <button className={styles.rectangleParent1}>
                        <div className={styles.frameChild3} />
                        <div className={styles.copyFrame}>
                          <b className={styles.copy2}>Copy</b>
                        </div>
                        <img
                          className={styles.copybuttonIcon2}
                          alt=""
                          src="/copybutton.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <div className={styles.frameParent3}>
                    <div className={styles.recommendationsTitleParent}>
                      <div className={styles.recommendationsTitle}>
                        <div className={styles.aiRecommendations}>
                          AI Recommendations
                        </div>
                      </div>
                      <div className={styles.frameChild5} />
                    </div>
                    <div className={styles.imagePresentationTitleWrapper}>
                      <div className={styles.imagePresentationTitle}>
                        <b className={styles.productImagePresentation}>
                          Product Image presentation
                        </b>
                        <div className={styles.imageSuggestionWrapper}>
                          <div className={styles.imageSuggestion} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.showcaseTheBeautyOfKalaNaWrapper}>
                      <p className={styles.showcaseTheBeauty}>
                        Showcase the beauty of Kala Namak Rice with a
                        high-quality, close-up shot of the uncooked grains
                        arranged neatly in a bowl or on a plate. Highlight the
                        distinctiveness of the rice's slender and aromatic
                        grains, capturing their texture and sheen under natural
                        light.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painPointsTitleWrapper}>
                    <div className={styles.painPointsTitle}>
                      <div className={styles.painPoints}>
                        <b className={styles.marketPainpoints}>
                          Market Painpoints
                        </b>
                        <div className={styles.qualityWrapper}>
                          <div className={styles.quality} />
                        </div>
                      </div>
                      <p className={styles.investingInQualityContainer}>
                        <span className={styles.investingInQualityAssurance}>
                          <span>
                            Investing in quality assurance processes,
                            certifications, and supply chain transparency
                            initiatives builds trust and credibility among
                            customers. Transparent sourcing practices, adherence
                            to quality standards, and product authenticity
                            reassure customers and differentiate sellers in the
                            market.
                          </span>
                        </span>
                        <span className={styles.blankLine}>
                          <span>&nbsp;</span>
                        </span>
                        <span className={styles.displayQualityCertification}>
                          <span>
                            Display Quality certification certificate to gain
                            edge!
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Product;
