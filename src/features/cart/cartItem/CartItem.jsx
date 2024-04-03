import { formatCurrency } from "../../../utilities/helpers";
import { FaRegTrashCan } from "react-icons/fa6";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../slices/cartSlice";
import UpdateItemQuantity from "../../../components/updateItemQuantity/UpdateItemQuantity";

const CartItem = ({ item = {} }) => {
  const { id, image, price, title, quantity, totalPrice } = item;


  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item__wrapper">
        <div className="cart-item__banner">
          <img src={image} alt="" className="cart-item__img" />
          <div className="cart-item-option__title cart-item-option__title--desktop">
            {title}
          </div>
        </div>

        <div className="cart-item-options">
          <div className="cart-item-option__title cart-item-option__title--mobile">
            {title}
          </div>
          <div className="cart-item-option__price">
            ${formatCurrency(price)}
          </div>

          <UpdateItemQuantity id={id} type={"round_sm"}>
            {quantity}
          </UpdateItemQuantity>

          <div className="cart-item-option__price cart-item-option__final-price cart-item-option__final-price--none">
            ${formatCurrency(totalPrice)}
          </div>

          <div className="cart-item-option__remove">
            <button onClick={() => dispatch(removeProduct(id))}>
              <FaRegTrashCan />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
