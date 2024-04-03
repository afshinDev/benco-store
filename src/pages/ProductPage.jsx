import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ProductList from "../features/products/productList/ProductList";

const ProductPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <section className="products-section mt-3">
        <div className="container">
          <div
            style={{ position: "relative" }}
            className="products-section__wrapper"
          >
            <Sidebar setShowSidebar={setShowSidebar} open={showSidebar} />
            <ProductList setShowSidebar={setShowSidebar} />
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductPage;
