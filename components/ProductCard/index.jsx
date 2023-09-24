import React from "react";
import styles from "./style.module.css";

const ProductCard = ({ product }) => {
  const findDiscount = (mrp,offerPrice) => {
    const price = (((Number(mrp) - Number(offerPrice))/Number(mrp))*100).toFixed(0)
    return price
  }
  return (
    <div className={styles.productCardContainer}>
      <div style={{ position: "relative" }}>
        <img className={styles.imageContent} src={product.image_url} />
        {product.compare_at && (
          <div className={styles.arrow}>
            <div class={styles.line}> {findDiscount(product.compare_at,product.price[0])}% off</div>
            <div class={styles.point}></div>
          </div>
        )}
        {product.compare_at && (
          <div className={styles.arrowRight}>
            <div class={styles.lineRight}> SALE</div>
          </div>
        )}
      </div>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.priceInfoContent}>
        {product.compare_at && <div className={styles.breakPrice}>$ {product.compare_at}</div>}
        <div className={styles.price}>$ {product.price[0]}</div>
      </div>
    </div>
  );
};

export default ProductCard;
