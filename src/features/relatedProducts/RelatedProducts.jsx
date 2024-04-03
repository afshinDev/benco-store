import List from "../../components/list/List";
import ProductItem from "../products/productItem/ProductItem";
import { useCategory } from "../../custom/useCategory";
import "./RelatedProducts.css";

const RelatedProducts = () => {
  const { data: relatedCategory } = useCategory();

  return (
    <div className="related-products">
      <div className="container">
        <div className="related-products__title center">
          <span className="related-products__title-text heading">
            Related Products
          </span>
        </div>
        <List columns={"col-12 col-md-6 col-lg-4 col-xl-3"}>
          <List.Body
            data={relatedCategory?.slice(0,4)}
            render={(product) => (
              <ProductItem product={product} key={product.id} />
            )}
          ></List.Body>
        </List>
      </div>
    </div>
  );
};
export default RelatedProducts;
