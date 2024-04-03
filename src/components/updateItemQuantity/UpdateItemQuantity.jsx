import { useDispatch } from "react-redux";
import Button from "../button/Button";
import "./UpdateItemQuantity.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../slices/cartSlice";

const UpdateItemQuantity = ({ id, children, type }) => {
  const dispatch = useDispatch();

  return (
    <div className="update-quantity">
      <Button onClick={() => dispatch(increaseProductQuantity(id))} type={type}>
        <FaPlus />
      </Button>
      <p className="current-quantity center">{children}</p>
      <Button onClick={() => dispatch(decreaseProductQuantity(id))} type={type}>
        <FaMinus />
      </Button>
    </div>
  );
};
export default UpdateItemQuantity;
