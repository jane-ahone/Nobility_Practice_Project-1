import React, { useRef } from 'react';
import { PRODUCTS } from "../../products";
import ProductCard from './ProductCard'; 
import { Link } from 'react-router-dom';

function FlashSale() {
  const targetRef = useRef(null);

  return (
    <>
   <div className='flex justify-between items-center'> 
   <p className="font-bold ms-4">Flash Sale</p>
{/* <Link >   <p className="font-bold ms-4 text-[#40bfff]">See More</p></Link> */}
   </div>
    <div className='flex space-x-4 overflow-x-auto p-4 ' ref={targetRef} >
     
      {PRODUCTS.products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
    </>
  );
}

export default FlashSale;
