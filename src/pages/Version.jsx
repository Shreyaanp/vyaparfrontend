import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import ProductLinguisticContainer from "../components/ProductLinguisticContainer";
import styles from "./Version.module.css";

const Version = () => {
  return (
    <div className={styles.version3}>
      <SideBar />
      <img
        className={styles.backgroundSimpleIcon}
        alt=""
        src="/background-simple1.svg"
      />
      <div className={styles.noProductsAvailableAcceptContainer}>
        <p className={styles.noProductsAvailable}>No Products Available</p>
        <p className={styles.acceptChatRequests}>
          Accept chat requests to reply
        </p>
      </div>
      <img
        className={styles.backgroundSimpleIcon1}
        alt=""
        src="/background-simple2.svg"
      />
      <main className={styles.topNavContainer}>
        <TopNav />
        <section className={styles.pageHeader}>
          <div className={styles.pageHeaderContent}>
            <h2 className={styles.yourProducts}>Your Products</h2>
            <div className={styles.productCards}>
              <div className={styles.productCardContainer}>
                <div className={styles.productCardContainerChild} />
                <div className={styles.productCard}>
                  <img
                    className={styles.shadow1Icon}
                    alt=""
                    src="/shadow-1.svg"
                  />
                  <div className={styles.websiteCard}>
                    <img
                      className={styles.backgroundCompleteIcon}
                      alt=""
                      src="/background-complete1.svg"
                    />
                    <img
                      className={styles.websiteIcon}
                      alt=""
                      src="/website.svg"
                    />
                  </div>
                  <img
                    className={styles.character1Icon}
                    loading="lazy"
                    alt=""
                    src="/character-1.svg"
                  />
                  <img
                    className={styles.plantIcon}
                    loading="lazy"
                    alt=""
                    src="/plant.svg"
                  />
                </div>
                <div className={styles.chatListContainer}>
                  <button className={styles.chatList}>
                    <div className={styles.chatListChild} />
                    <b className={styles.addProducts}>Add Products</b>
                    <img className={styles.addIcon} alt="" src="/add.svg" />
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
