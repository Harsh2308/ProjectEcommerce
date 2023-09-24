import React, { useContext } from 'react'
import ProductCard from '../ProductCard'
import styles from "./styles.module.css"
import ProperyManagmentContext from '@/context/propertyContext'

const ProductListing = () => {
  const { propertyList } = useContext(ProperyManagmentContext)
  console.log(propertyList,":")
  return (
    <div className={styles.container}>
      <div className={styles.cardRow}>
        {propertyList.map((item)=>(
           <ProductCard product={item} />
        ))}
       
      </div>
    </div>
  )
}

export default ProductListing