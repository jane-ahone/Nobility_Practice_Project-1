import ImageCard from "../components/Cart/ImageCard";
import { PRODUCTS } from "../products";

const Cart = () => {
  const productDetails = PRODUCTS.products;
  const updatedProductDetails = productDetails.map((product) => ({
    ...product,
    "like-status": "false",
    quantity: 1,
  }));

  return (
    <div>
      <p className="text-[var(--Neutral-Dark,#223263)] font-poppins text-base font-bold leading-[1.5rem] tracking-[0.005rem]">
        Your Cart
      </p>
      {updatedProductDetails.map((updatedProductDetail) => (
        <ImageCard
          key={updatedProductDetail.id}
          productDetails={updatedProductDetail}
        />
      ))}

      <input type="text" placeholder="Enter Coupon Code" />
      <button>Apply</button>

      <div className="order-details ">
        <p>Items(3)</p>
        <p>$598.86</p>
        <p>Shipping</p>
        <p>$40.00</p>
        <p>Import charges</p>
        <p>$128.00</p>
        <p>Total Price</p>
        <p>$766.86</p>
      </div>
    </div>
  );
};

export default Cart;
