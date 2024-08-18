import React, { useRef } from 'react';
import { PRODUCTS } from "../../products";
import ProductCard from './ProductCard'; 

function MegaSale() {
  const targetRef = useRef(null);

  // Filter products that belong to "Mega Sale"
  const megaSaleProducts = PRODUCTS.products.filter(product => product.saleType === "Mega Sale");

  return (
    <>
      <p className="font-bold ms-4">Mega Sale</p>
      <div className='flex space-x-4 overflow-x-auto p-4' ref={targetRef}>
        {megaSaleProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}

export default MegaSale;
