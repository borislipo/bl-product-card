import React, { useContext } from "react"
import { ProductContext } from "./productCard"
import styles from '../styles/styles.module.css'

interface ProductTitleProps {
    title?: string;
    className?: string;
}

export const ProductTitle = ({ title, className }: ProductTitleProps) => {

    const { product } = useContext(ProductContext)

    return (
        <span className={`${styles.productDescription} ${className}`}>
            {title ? title : product.name}
        </span>
    )
}