import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import ProperyManagmentContext from "@/context/propertyContext";

const ColorFilterList = ({ colorList }) => {
  const [expandMore, setExpandMore] = useState(false)
  const { handleFilterByColor,filterByColor } = useContext(ProperyManagmentContext);
  
  return (
    <>
      {colorList.slice(0,expandMore ? colorList.length : 5).map((item) => (
        <div className={styles.listItem}>
        <div onClick={()=>handleFilterByColor(item.code)} key={item.code} className={styles.colorFilterContainer}>
          <div
            style={{ backgroundColor: item.code }}
            className={styles.circelShape}
          >
            {(item.code).startsWith("https") && <img style={{height: '20px', width:'20px', borderRadius:"50%", position:'absolute',zIndex:1}} src={item.code} />}
            {filterByColor.includes(item.code) && <img src="/images/right.svg" alt="error" />}
          </div>
          <div className={styles.colorName}>{item.name}</div>
        </div>
        <div className={styles.count}>
          {`(${item.count})`}
        </div>
        </div>
      ))}
      <div onClick={()=>setExpandMore(!expandMore)} className={styles.moreItem}>{expandMore ? <> <img src="/images/minus.svg" alt="error"/> <p>Less </p></>: <><img src="/images/expand.svg" alt="error"/><p>More</p></>}</div>
    </>
  );
};

export default ColorFilterList;
