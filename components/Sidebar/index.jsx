import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import FilterCard from "../FilterCard";
import PriceRangeSlider from "../PriceSlider";
import ColorFilterList from "../ColorFilterList";
import ProperyManagmentContext from "@/context/propertyContext";
import MaterialFilterList from "../MaterialFilterList";



const Sidebar = () => {
  const { updatedFilterData } = useContext(ProperyManagmentContext);
  const handleRendarComponent = (item) => {
    if (item.name.toLowerCase() === "price") {
      return (
        <PriceRangeSlider />
      );
    } else if (item.name.toLowerCase() === "color") {
      return (
          <ColorFilterList colorList={item.values} />
      );
    } else {
      return (
       <MaterialFilterList materialList={item.values} />
      );
    }
  };
  return (
    <div className={styles.sidebarContainer}>
      <p className={styles.sidebarHeading}>Filters</p>
      {updatedFilterData.map((item) => (
        <FilterCard key={item.name} name={item.name}>
          {handleRendarComponent(item)}
        </FilterCard>
      ))}
    </div>
  );
};

export default Sidebar;
