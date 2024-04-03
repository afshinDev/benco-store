import { useState } from "react";

const ProductOperation = ({ options, handleSetParams, filterField, title }) => {
  const [selectedOption, setSelectedOption] = useState();

  function handleOperations(index, operation) {
    setSelectedOption(index);

    handleSetParams(operation.key, operation.value);
  }

  return (
    <div className="sort-list">
      <div className="sort-list__heading">{title}</div>

      <ul className="sort-options">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() =>
              handleOperations(index, { key: filterField, value: option.value })
            }
            className={`sort-options__item ${
              selectedOption === index ? "sort-options__item--active" : ""
            }
          `}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductOperation;
