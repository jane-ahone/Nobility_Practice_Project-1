import { useState } from "react";
import plusIcon from "../../assets/Pics and icons/Minus.svg";
import minusIcon from "../../assets/Pics and icons/Plus.svg";
import PropTypes from "prop-types";

const ImageCard = ({ productDetails }) => {
  const [product, setProduct] = useState(productDetails);

  console.log(product.id);
  const handleIncrement = (id) => {
    setProduct(
      product.map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
      )
    );
  };
  const handleDecrement = (id) => {
    setProduct(
      product.map((prod) =>
        prod.id === id && prod.quantity > 1
          ? { ...prod, quantity: prod.quantity - 1 }
          : prod
      )
    );
  };

  return (
    <div className="product-card grid grid-cols-[0.5fr_1fr_0.5fr] gap-7 rounded-[0.3125rem] border border-[var(--Neutral-Light,#EBF0FF)] bg-[var(--Background-White,#FFF)] mb-4 ">
      <img src={product.image} alt="product-image" />
      <div>
        <p className="text-[var(--Neutral-Dark,#223263)] font-poppins text-base font-bold leading-[1.5rem] tracking-[0.005rem]">
          {product.name}
        </p>
        <p className="text-[var(--Primary-Blue,#40BFFF)] font-poppins text-xs font-bold leading-[1.125rem] tracking-[0.03125rem]">
          {product.price}
        </p>
      </div>
      <div>
        <div className="flex">
          {" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.54444 12.7754L11.9996 20.0631L19.4548 12.7754L19.4951 12.736C21.5558 10.7215 21.5558 7.46185 19.4951 5.44831C17.4343 3.43478 14.0997 3.43384 12.0399 5.44831L11.9996 5.48767L11.9584 5.44738C9.89765 3.43291 6.56304 3.43291 4.50322 5.44738C2.44341 7.46185 2.44246 10.7215 4.50322 12.7351L4.54444 12.7754Z"
              stroke="#9098B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6.375H21"
              stroke="#9098B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.625 3H15.375"
              stroke="#9098B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 6.375H5.25V21H18.75V6.375Z"
              stroke="#9098B1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="numerical-icons flex">
          <img
            src={plusIcon}
            alt="Increase Quantity"
            className="plus-icon"
            onClick={() => handleIncrement(product.id)}
          />
          <span className="quantity">{product.quantity}</span>
          <img
            src={minusIcon}
            alt="Decrease Quantity"
            className="minus-icon"
            onClick={() => handleDecrement(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  productDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    saleType: PropTypes.string,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number,
        comment: PropTypes.string,
        photos: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    "like-status": PropTypes.string, // Include your new field here
  }).isRequired,
};

// .product-details,
// .action-icons,
// .numerical-icons {
//   display: flex;
// }
// .action-icons {
//   justify-content: space-between;
// }
// .numerical-icons {
//   align-items: center;
//   /* max-height: 2rem; */
//   border: 1px solid #9f9c9c;
//   border-radius: 5px;
// }
// .numerical-icons > * {
//   padding: 0.35rem;
//   max-height: 100%;
// }
// .numerical-icons .quantity {
//   padding: 0 1rem;
// }
// .numerical-icons .plus-icon,
// .numerical-icons .quantity {
//   border: solid #9f9c9c;
//   border-width: 0 1px 0 0;
// }

// .product-details {
//   justify-self: flex-start;
//   flex-direction: column;
//   margin-left: 0.5rem;
// }
// .numerical-icon,
// .quantity {
//   height: fit-content;
// }

// .numerical-icons .quantity {
//   font-size: 0.95rem;
// }
