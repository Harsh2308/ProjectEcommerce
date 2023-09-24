import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import ProperyManagmentContext from "@/context/propertyContext";

const MaterialFilterList = ({ materialList }) => {
  const [expandMore, setExpandMore] = useState(false)
  const { handleFilterByMaterial,filterByMaterial } = useContext(ProperyManagmentContext);
  return (
    <>
      {materialList.slice(0,expandMore ? materialList?.length : 5).map((item) => (
        <div className={styles.listItem}>
        <div onClick={()=>handleFilterByMaterial(item?.value)} key={item?.value} className={styles.materialFilterContainer}>
            <input checked={filterByMaterial.includes(item?.value)} name={item?.value} type="checkbox" />
            <div className={styles.materialName}>{item?.value}</div>
        </div>
        <div className={styles.count}>
          {`(${item?.count})`}
        </div>
        </div>
      ))}
      <div onClick={()=>setExpandMore(!expandMore)} className={styles.moreItem}>{expandMore ? <> <img src="/images/minus.svg" alt="error"/> <p>Less </p></>: <><img src="/images/expand.svg" alt="error"/><p>More</p></>}</div>
    </>
  );
};

export default MaterialFilterList;
