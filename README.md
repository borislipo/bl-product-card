# BL-product-card

Este es un paquete de pruebas de despliegue

###Boris Lipovetzky

```
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"

```

```

<ProductCard
key={product.id}
product={product}
initialValues={{ count: 4, maxCount: 10 }}
>
   {
       ({ reset, increaseBy, maxCount, count }) => (
         <>
           <ProductImage />
           <ProductTitle />
           <ProductButtons />

         </> )
   }

 </ProductCard>


```
