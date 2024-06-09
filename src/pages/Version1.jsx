import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import ProductLinguisticContainer from "../components/ProductLinguisticContainer";
import styles from "./Version1.module.css";

const Version = () => {
  return (
    <div className={styles.version4}>
      <SideBar />
      <img
        className={styles.backgroundSimpleIcon}
        alt=""
        src="/background-simple2.svg"
      />
      <main className={styles.topNavParent}>
        <TopNav />
        <section className={styles.productsHeaderWrapper}>
          <div className={styles.productsHeader}>
            <h2 className={styles.yourProducts}>Your Products</h2>
            <div className={styles.productsList}>
              <div className={styles.productItems}>
                <div className={styles.productItemsChild} />
                <div className={styles.product1}>Product 1</div>
                <div className={styles.productNamesParent}>
                  <div className={styles.productNames}>
                    <div className={styles.productNamesChild} />
                    <div
                      className={styles.theLivingEarth}
                    >{`The Living Earth Kala Namak Rice-1kg | Aromatic | Fluffy | Natural Scented `}</div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.edit03Icon}
                      loading="lazy"
                      alt=""
                      src="/edit03.svg"
                    />
                  </div>
                </div>
                <a className={styles.product2}>Product 2</a>
                <div className={styles.frameParent}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <p className={styles.khublalMurtiKala}>
                      KHUBLAL MURTI KALA KENDRA Terracotta Musical Man Figurine
                      (12 cm x 6 cm x 4 cm, Brown, Pack of 4, KMKKG05)
                    </p>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <img
                      className={styles.edit03Icon1}
                      alt=""
                      src="/edit03.svg"
                    />
                  </div>
                </div>
                <div className={styles.product3}>Product 3</div>
                <div className={styles.productItem}>
                  <div className={styles.productDetails}>
                    <div className={styles.frameDiv}>
                      <div className={styles.rectangleDiv} />
                      <p className={styles.vermaHandicraftsSoap}>
                        Verma Handicrafts Soap Stone Double Parrot Figurine (20
                        cm x 14 cm x 20 cm, Grey)
                      </p>
                    </div>
                    <div className={styles.groupDiv}>
                      <div className={styles.frameChild1} />
                      <img
                        className={styles.edit03Icon2}
                        alt=""
                        src="/edit03.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.addMore}>
                    <div className={styles.addMoreChild} />
                    <div className={styles.addMoreContainer}>
                      <b className={styles.addMoreProducts}>
                        Add More Products
                      </b>
                    </div>
                    <img className={styles.addIcon} alt="" src="/add1.svg" />
                  </button>
                </div>
              </div>
            </div>
            <ProductLinguisticContainer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Version;
