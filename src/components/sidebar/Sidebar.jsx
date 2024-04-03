import { useSearchParams } from "react-router-dom";
import "./Sidebar.css";
import ProductOperation from "../../features/products/productOperations/ProductOperation";

"electronics", "jewelery", "men's clothing", "women's clothing";

const Sidebar = ({ open, setShowSidebar }) => {
  const options = {
    categories: [
      { value: "all", label: "all" },
      { value: "electronics", label: "electronics" },
      { value: "men's clothing", label: "men's" },
      { value: "women's clothing", label: "women's" },
      { value: "jewelery", label: "jewelery" },
    ],

    prices: [
      { value: "id-asc", label: "no sort" },
      { value: "price-asc", label: "low first" },
      { value: "price-desc", label: "high first" },
    ],
  };

  const [searchParams, setSearchParams] = useSearchParams();

  function handleSetParams(key, value) {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  }

  return (
    <div className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <div className="sidebar__wrapper">
        <button
          onClick={() => setShowSidebar(false)}
          className="sidebar__toggle"
        >
          &times;
        </button>

        {/* filter categories start */}
        <ProductOperation
          title={"filter by category"}
          filterField={"category"}
          options={options.categories}
          handleSetParams={handleSetParams}
        />

        {/* filter categories end */}

        {/* sort price start */}

        <ProductOperation
          title={"sort by price"}
          filterField={"sortBy"}
          options={options.prices}
          handleSetParams={handleSetParams}
        />

        {/* sort price end */}


        {/* karbodi nist fqt bara khali namondan faza bod :( */}
        <div className="sort-list">
          <div className="sort-list__heading">Size options</div>

          <ul className="sort-options">
            <li className="sort-options__item">m</li>
            <li className="sort-options__item">s</li>
            <li className="sort-options__item">l</li>
            <li className="sort-options__item">xl</li>
            <li className="sort-options__item">xxl</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
