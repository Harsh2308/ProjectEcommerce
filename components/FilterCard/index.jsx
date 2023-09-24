import React from "react";
import styles from "./styles.module.css";


const FilterCard = ({ name,children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.filterCardContainer}>
      <div className={styles.filterTitle}>
        <p className={styles.filterHeading}>{name}</p>
        <img onClick={()=>setOpen(!open)} src={!open ? "/images/expand.svg" : "/images/minus.svg"} alt="error" />
      </div>
      {open && <div className={styles.childrenContainer}>{children}</div>}
    </div>
  );
};

export default FilterCard;
