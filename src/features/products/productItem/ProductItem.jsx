import List from "../../../components/list/List";
import { FaOpencart } from "react-icons/fa6";
import "./ProductItem.css";
import { formatCurrency } from "../../../utilities/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../slices/cartSlice";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const { id, category, image, title, price } = product;
  const dispatch = useDispatch();

  function handleClick() {
    const newProduct = {
      id,
      image,
      title,
      price,
      quantity: 1,
      totalPrice: price * 1,
    };

    dispatch(addProduct(newProduct));
  }

  return (
    <List.Item>
      <div className="product">
        <button className="product__btn" onClick={handleClick}>
          <FaOpencart size={27} color="#ffffff" />
        </button>

        <div
          className="product__wrapper"
          onClick={() => navigate(`/product/${category}/${id}`)}
        >
          <div className="product__banner">
            <img src={image} alt="" />
          </div>

          <div className="details">
            <div className="details__title">{title}</div>

            <div className="details__price">{formatCurrency(price)}</div>
          </div>
        </div>
      </div>
    </List.Item>
  );
};
export default ProductItem;
