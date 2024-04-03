import "./Summery.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from "../../../slices/cartSlice";
import { formatCurrency } from "../../../utilities/helpers";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Your order was successfully registered. Final price:...

const Summery = () => {
  const totalPrice = useSelector(getTotalCartPrice);
  const postPrice = useSelector((state) => state.cart.postPrice);
  const finalPrice = totalPrice + postPrice;
  const cart = useSelector(getCart);
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleOrder() {
    if (!cart?.length) toast.error("Your shopping cart is empty");
    else {
      navigate("/");
      toast.success(
        `Your order was successfully registered. Final price with post : ${finalPrice}`
      );
      dispatch(clearCart());
    }
  }

  return (
    <div className="col-12 col-lg-3">
      <div className="summery">
        <div className="summery__wrapper">
          <h1 className="summery__title">Summery</h1>

          <div className="summery-info">
            <div className="total-price">
              <span className="total-price__title">Total Price : </span>
              <span className="total-price__price">
                ${formatCurrency(totalPrice)}
              </span>
            </div>

            <div className="post-price">
              <span className="total-price__title">Post Price : </span>
              <span className="total-price__price">$40</span>
            </div>
          </div>

          <div className="summery-form">
            <input
              type="text"
              className="summery-form__input"
              placeholder="Enter gift code"
            />
          </div>

          <div className="final-price">
            <span className="total-price__title">Final Price : </span>
            <span className="total-price__price">
              ${formatCurrency(finalPrice)}
            </span>
          </div>

          {isAuth ? (
            <Button onClick={handleOrder} type={"primary_md"}>
              Shopping
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/login");
                toast.error("Please login to your account first");
              }}
              type={"primary_md"}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Summery;
