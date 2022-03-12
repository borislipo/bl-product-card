import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"
import { products } from "../data/products"
import '../styles/custom-styles.css'

const product = products[0]

export const ShopingPage = () => {


    return (
        <div >
            <h1>Shopping Page</h1>

            <ProductCard key={product.id}
                product={product}
                initialValues={{ count: 4, maxCount: 10 }}
            >
                {
                    ({ reset, increaseBy, maxCount, count }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />

                        </>

                    )
                }

            </ProductCard>

        </div>
    )
} 