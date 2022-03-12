import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../.';

const product = {
  id: "2",
  name: "coffe mug meme",
  src: "./coffee-mug2.png",
};

const App = () => {
  return (
    <div>
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

            </>)
        }

      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
