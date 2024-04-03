import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useProduct } from "../../../custom/useProduct";
import { formatCurrency } from "../../../utilities/helpers";
import "./ProductDetails.css";
import Button from "../../../components/button/Button";
import UpdateItemQuantity from "../../../components/updateItemQuantity/UpdateItemQuantity";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getCurrentQuantityById } from "../../../slices/cartSlice";

const ProductDetails = () => {
  const { product = {} } = useProduct();
  const { id, category, description, image, price, title } = product;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  const isProductInCart = currentQuantity >= 1;

  function handleClick() {
    const newProduct = {
      id,
      image,
      price,
      title,
      quantity: 1,
      totalPrice: price * 1,
    };

    dispatch(addProduct(newProduct));
  }

  return (
    <section className="product-details">
      <div className="container">
        <div style={{ alignItems: "normal" }} className="row">
          <div className="col-12 col-md-6">
            {/* left start  */}
            <div className="left">
              <div className="product-details__banner">
                <img src={image} alt="" />
              </div>
            </div>
            {/* left end */}
          </div>
          <div className="col-12 col-md-6">
            {/* right start */}
            <div className="right">
              <div className="info">
                {/* header info */}
                <div className="info__header">
                  <p className="info__title">{title}</p>
                  <p className="info__price">${formatCurrency(price)}</p>
                </div>

                {/* body info */}
                <div className="info__body">
                  <p className="info__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat necessitatibus rem numquam placeat quidem? Dolorem
                    quibusdam quaerat maiores, accusamus velit cupiditate fuga
                    quisquam obcaecati, qui eaque maxime hic nesciunt sapiente.
                  </p>
                </div>

                {/* info buttons */}
                <div className="info__buttons">
                  {isProductInCart ? (
                    <div className="quantity-wrapper">
                      <UpdateItemQuantity id={id} type={"round"}>
                        {currentQuantity}
                      </UpdateItemQuantity>
                    </div>
                  ) : (
                    <Button onClick={handleClick} type={"primary"}>
                      Add to cart
                    </Button>
                  )}
                </div>

                {/* info footer */}
                <div className="info__footer">
                  <p className="info__category">
                    <span className="info__category-title">Category : </span>{" "}
                    <span className="info__category-name">{category}</span>
                  </p>

                  <div className="info__share">
                    <span className="social-media-title">
                      Share this product :{" "}
                    </span>

                    <div className="info__share-icons">
                      <FaInstagram className="media__icon media__icon--instagram" />
                      <FaTwitter className="media__icon media__icon--twitter" />
                      <FaFacebook className="media__icon media__icon--facebook" />
                    </div>
                  </div>
                </div>
              </div>
              {/* right end */}
            </div>
          </div>
        </div>
        <div className="description mt-3">
          <div className="description__title center">
            <span className="heading">description</span>
          </div>

          <p className="description__text mt-3">{description}</p>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
