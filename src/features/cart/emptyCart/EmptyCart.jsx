import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart h-full center">
      <div className="empty-cart__banner">
        <img className="empty-cart__img" src="./empty-cart.png" alt="" />
      </div>

      <p className="empty-cart__message">Your Cart is currectly empty</p>
      <Link to={"/products"} className="empty-cart__btn">
        <FaArrowLeftLong />
        <span>return to shop</span>
      </Link>
    </div>
  );
};
export default EmptyCart;
