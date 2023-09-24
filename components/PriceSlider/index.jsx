import React, { useContext, useEffect, useRef } from "react";
import styles from "./style.module.css"
import ProperyManagmentContext from "@/context/propertyContext";


const PriceRangeSlider = () => {
  const { minVal, setMinVal,maxVal,setMaxVal,min,max,setFinalPrice } = useContext(ProperyManagmentContext);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const slider = useRef(null)

  const getPercent = (value) =>
    Math.round(((value - min) / (max - min)) * 100);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal]);

  return (
    <div>
    <div className={styles.priceSliderContainer}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${styles.thumb} ${styles["thumb--left"]}`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${styles.thumb} ${styles["thumb--right"]}`}
      />

      <div ref={slider}  className={styles.slider}>
        <div className={styles["slider__track"]} />
        <div ref={range} className={styles["slider__range"]} />
      </div>
    </div>
    <div className={styles.digitPriceSection}>
      <div className={styles.priceBox}>
        $ {minVal}
      </div>
      <div>
      <img src={"/images/minus.svg"} alt="error" />
      </div>
      <div className={styles.priceBox}>
        $ {maxVal}
      </div>
      <div onClick={()=>setFinalPrice([minVal,maxVal])} className={styles.goButton}>
        GO
      </div>
    </div>
    </div>
  );
};

export default PriceRangeSlider;
