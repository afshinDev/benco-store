import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import EmptyCart from "../emptyCart/EmptyCart";
import "./CartTable.css";

const CartTable = () => {

  const cart = useSelector(state => state.cart.cart)


  return (
    <div className="cart-table">
      <div className="cart-table-header">
        <div className="cart-table-header__left">
          <p>item</p>
        </div>
        <div className="cart-table-header__right">
          <p>price</p>
          <p>quantity</p>
          <p className="total-price--none">final price</p>
          <p>del</p>
        </div>
      </div>

      <div className="cart-table__body">
        {!cart.length && <EmptyCart />}

        {cart?.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default CartTable;
