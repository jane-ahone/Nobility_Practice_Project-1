import React, { useRef } from 'react';
import { PRODUCTS } from "../../products";
import ProductCard from './ProductCard'; // Ensure this component exists and is correctly imported

function Recommended() {
  const targetRef = useRef(null);

  return (
    <>

    <div className='grid grid-cols-2 p-4 space-y-4' ref={targetRef} >
     
      {PRODUCTS.recommendedProducts.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
    </>
  );
}

export default Recommended;
