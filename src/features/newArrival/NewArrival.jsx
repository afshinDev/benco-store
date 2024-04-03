import List from "../../components/list/List";
import { useNewArrival } from "../../custom/useNewArrival";
import "./NewArrival.css";
import ProductItem from "../products/productItem/ProductItem";
import Loader from "../../components/loader/Loader";

const NewArrival = () => {
  const { newArrival, newArrivalLoading } = useNewArrival();

  return (
    <section className="newArrival mt-3">
      <div className="container">
        <div className="newArrival__title center">
          <span className="newArrival__title-text heading">New Arrival</span>
        </div>

        {newArrivalLoading && <Loader height={"20rem"}/>}

        <List columns={"col-12 col-md-6 col-lg-4 col-xl-3"}>
          <List.Body
            data={newArrival}
            render={(product) => (
              <ProductItem key={product.id} product={product} />
            )}
          ></List.Body>
        </List>
      </div>
    </section>
  );
};
export default NewArrival;
