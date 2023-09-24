import axios from "axios";
import React, { createContext, useEffect } from "react";

const ProperyManagmentContext = createContext({
  propertyList: [],
  updatedFilterData: [],
});

export function ProperyManagmentProvider({ children }) {
  const [propertyList, setPropertyList] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [updatedFilterData, setUpdatedFilterData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterByMaterial, setFilterByMaterial] = React.useState([]);
  const [filterByColor, setFilterByColor] = React.useState([]);
  const [minVal, setMinVal] = React.useState(0);
  const [maxVal, setMaxVal] = React.useState(500);
  const [finalPrice,setFinalPrice] = React.useState([])
  const min = 0
  const max = 500

  const fetchPropertyData = async () => {
    try {
      const response = await axios.get(
        "https://findify-assets.s3.amazonaws.com/test-task/test_response.json"
      );
      setPropertyList(response.data.items);
      setFilterData(response.data.facets);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const handleFilterByMaterial = (name) => {
    if (!filterByMaterial.includes(name)) {
      setFilterByMaterial([...filterByMaterial, name]);
    } else {
      setFilterByMaterial(filterByMaterial.filter((item) => item !== name));
    }
  };

  const handleFilterByColor = (name) => {
    if (!filterByColor.includes(name)) {
      setFilterByColor([...filterByColor, name]);
    } else {
      setFilterByColor(filterByColor.filter((item) => item !== name));
    }
  };

  const fetchColorData = async () => {
    try {
      const res = await axios.get(
        "https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json"
      );

      const mergedData = filterData.map((facts) => {
        if (facts?.type === "color") {
          const response = facts?.values.map((item) => {
            const matchingItem = res.data.find(
              (color) => color.name.toLowerCase() === item.value.toLowerCase()
            );
            return matchingItem ? { ...item, ...matchingItem } : item;
          });
          return {
            ...facts,
            values: response,
          };
        } else {
          return facts;
        }
      });

      setUpdatedFilterData(mergedData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchColorData();
  }, [filterData]);

  useEffect(() => {
    fetchPropertyData();
  }, []);

  return (
    <ProperyManagmentContext.Provider
      value={{
        propertyList,
        updatedFilterData,
        handleFilterByMaterial,
        filterByMaterial,
        handleFilterByColor,
        filterByColor,
        minVal,
        maxVal,
        setMinVal,
        setMaxVal,
        min,
        max,
        setFinalPrice,
        finalPrice
      }}
    >
      {isLoading ? <>Loading...</> : children}
    </ProperyManagmentContext.Provider>
  );
}

export default ProperyManagmentContext;
