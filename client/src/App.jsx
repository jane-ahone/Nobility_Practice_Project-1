import React, { useState, useEffect } from 'react';
import AuthPage from './components/Auth/AuthPage';
import Footer from './components/Footer/Footer';
import FlashSale from './components/Products/FlashSale';
import { PRODUCTS } from './products';
import FlashSaleBanner from './components/Products/FlashSaleBanner';
import MegaSale from './components/Products/MegaSale';
import Recommended from './components/Products/Recommend';
import RecommendedBanner from './components/Products/RecommendedBanner';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);


  const flashSaleProducts = PRODUCTS.products.filter(p => p.saleType === "Flash Sale");
console.log(flashSaleProducts);
const megaSaleProducts = PRODUCTS.products.filter(p => p.saleType === "Mega Sale");
console.log(megaSaleProducts);

  return (
    <div className="p-4">
      
      <FlashSaleBanner/>
      
      <FlashSale products ={flashSaleProducts}/>
      <MegaSale products ={megaSaleProducts}/>
      <RecommendedBanner/>
      <Recommended/>
      
      <Footer/>
    </div>
  );
}

export default App;


