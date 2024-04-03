import { useSearchParams } from "react-router-dom";
import List from "../../../components/list/List";
import ProductItem from "../productItem/ProductItem";
import { useProducts } from "../../../custom/useProducts";
import "./ProductList.css";

const ProductList = ({ setShowSidebar }) => {
  const { products } = useProducts();

  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "id-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedProducts = products?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-9">
      <div className="product-list">
        <div className="product-list__banner"></div>
        <button
          onClick={() => setShowSidebar((show) => !show)}
          className="btn product-list__btn"
        >
          Filters
        </button>
        <List columns={"col-12 col-4 col-sm-6 col-lg-4"}>
          <List.Body
            data={sortedProducts}
            render={(product) => (
              <ProductItem key={product.id} product={product} />
            )}
          ></List.Body>
        </List>
      </div>
    </div>
  );
};
export default ProductList;
