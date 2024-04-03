import List from "../../components/list/List";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import ProductItem from "../products/productItem/ProductItem";
import { useCategory } from "../../custom/useCategory";

import "./Category.css";

const Category = () => {
  const { data: category, categoryName, isLoading, isError } = useCategory();

  return (
    <>
      <div className="category">
        <div className="container h-full">
          <div className="category__title center">
            <span className="category__title-text heading">{categoryName}</span>
          </div>

          {isLoading && <Loader height={"23rem"} />}

          {isError && <Message>Please check your network connection</Message>}

          <div className="mt-3">
            <List
              columns={"col-12 col-md-6 col-lg-4 col-xl-3"}
              isloading={isLoading}
            >
              <List.Body
                data={category}
                render={(product) => (
                  <ProductItem key={product.id} product={product} />
                )}
              ></List.Body>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
