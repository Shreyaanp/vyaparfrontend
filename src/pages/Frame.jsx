import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import DiscoverNewCollection from "../components/DiscoverNewCollection";
import Navigation1 from "../components/Navigation1";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.frameParent}>
      <main className={styles.lightModeWrapper}>
        <section className={styles.lightMode}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.startShopping}>Start Shopping</div>
            </div>
          </div>
          <FrameComponent1 />
          <div className={styles.cards}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.seeAllParent}>
                <div className={styles.seeAll}>See All</div>
                <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.sneakers}>Sneakers</div>
              <img className={styles.icon} alt="" src="/5751917@2x.png" />
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.cap}>Cap</div>
              <img className={styles.icon1} alt="" src="/4615368@2x.png" />
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.perfumes}>Perfumes</div>
              <img
                className={styles.perfumeBottle85731356786661Icon}
                alt=""
                src="/perfumebottle85731356786661@2x.png"
              />
            </div>
          </div>
          <div className={styles.shapeParent}>
            <img
              className={styles.shapeIcon}
              loading="lazy"
              alt=""
              src="/shape-2.svg"
            />
            <img className={styles.shapeIcon1} alt="" src="/shape-3.svg" />
          </div>
          <div className={styles.growthOnHitsContainer}>
            <span className={styles.growthOnHitsContainer1}>
              <p className={styles.p}>12.5%</p>
              <p className={styles.growthOnHits}>Growth on hits</p>
            </span>
          </div>
          <div className={styles.yourAiCompanion}>
            Your AI companion for product listing and sales on different
            e-commerce platform.
          </div>
          <div className={styles.lightModeChild} />
          <FrameComponent />
          <div className={styles.card2}>
            <div className={styles.card2Child} />
            <div className={styles.integrationContent}>
              <b className={styles.integrationWithAnyContainer}>
                <p className={styles.integration}>{`Integration `}</p>
                <p className={styles.withAny}>{`with any `}</p>
                <p className={styles.marketplace}>marketplace</p>
              </b>
              <img
                className={styles.vuesaxboldlinkIcon}
                loading="lazy"
                alt=""
                src="/vuesaxboldlink@2x.png"
              />
            </div>
            <img className={styles.icon2} alt="" src="/4615368@2x.png" />
          </div>
          <img
            className={styles.lightModeItem}
            alt=""
            src="/ellipse-1@2x.png"
          />
          <img
            className={styles.lightModeInner}
            alt=""
            src="/ellipse-2@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            loading="lazy"
            alt=""
            src="/ellipse-3@2x.png"
          />
          <div className={styles.kWellReviewsContainer}>
            <p className={styles.kWell}>15K Well</p>
            <p className={styles.reviews}>Reviews</p>
          </div>
          <div className={styles.div}>#01</div>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <button className={styles.btn2}>
            <div className={styles.btn2Child} />
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
              <div className={styles.startShopping1}>Try Now For Free</div>
            </div>
          </button>
          <div className={styles.collectionWrapper}>
            <DiscoverNewCollection />
            <img
              className={styles.collectionWrapperChild}
              loading="lazy"
              alt=""
              src="/frame-3.svg"
            />
          </div>
          <a className={styles.vyaparLaunchpad}>
            <span>Vya</span>
            <span className={styles.par}>par</span>
            <span> Launch</span>
            <span className={styles.pad}>pad</span>
          </a>
          <Navigation1 />
        </section>
      </main>
    </div>
  );
};

export default Frame;
