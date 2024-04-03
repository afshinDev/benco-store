import CartTable from "../features/cart/cartTable/CartTable";
import Summery from "../features/cart/summery/Summery";

const CartPage = () => {
  return (
    <section className="cart-section">
      <div className="container">
        <div className="row normal">
          <div className="col-12 col-lg-9">
            <div className="cart">
              <CartTable />
            </div>
          </div>
          <Summery />
        </div>
      </div>
    </section>
  );
};
export default CartPage;
