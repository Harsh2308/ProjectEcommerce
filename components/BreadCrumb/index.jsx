// pages/Breadcrumb.js

import React, { useContext } from "react";
import styles from "./styles.module.css";
import ProperyManagmentContext from "@/context/propertyContext";

const Breadcrumb = () => {
  const {
    filterByMaterial,
    filterByColor,
    finalPrice,
    handleFilterByMaterial,
    handleFilterByColor,
    setFinalPrice
  } = useContext(ProperyManagmentContext);
  console.log(finalPrice, "::");
  return (
    <div>
      <ul className={styles.breadcrumb}>
        {filterByMaterial.map((item) => (
          <li>
            <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
              <div>{item}</div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleFilterByMaterial(item)}
              >
                <img src="/images/cross.svg" />
              </div>
            </div>
          </li>
        ))}
        {filterByColor.map((item) => (
          <li>
          <div style={{ display: "flex", alignItems: "center",gap: '10px' }}>
           {item.startsWith("https") ? <img className={styles.circle} src={item} /> : <div style={{backgroundColor: item}} className={styles.circle} />}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleFilterByColor(item)}
            >
              <img src="/images/cross.svg" />
            </div>
          </div>
        </li>
        ))}
        {finalPrice.length > 0 && (
          <li>
             <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>$ {finalPrice[0]}</div>
              <div>
                <img src="/images/minus.svg" alt="error" />
              </div>
              <div>$ {finalPrice[1]}</div>
            </div>
            <div style={{ cursor: "pointer" }}
              onClick={() => setFinalPrice([])}>
            <img src="/images/cross.svg" />
            </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;
