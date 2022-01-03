import React from "react";
import { useGlobalContext } from "../../context";
import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";

const ProductSummary = () => {
  const { selectedItems, removeItem, addToBusket } = useGlobalContext();

  const renderProductsSummary = selectedItems?.map(
    ({ name, price, id, count }) => {
      return (
        <>
          {count ? (
            <div className="purchase-summary__price" key={id}>
              <p>
                {name} -<span className="product-price"> {price}zł</span>
              </p>
              <div className="item-amount">
                <div
                  className="item-amount__btn"
                  onClick={() => addToBusket(id)}
                >
                  <FaArrowUp />
                </div>
                <p className="item-amount__count">{count}</p>
                <div
                  className="item-amount__btn"
                  onClick={() => removeItem(id)}
                >
                  <FaArrowDown />
                </div>
              </div>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id, true)}
              >
                <FaTrash />
              </button>
            </div>
          ) : null}
        </>
      );
    }
  );

  return (
    <div className="purchase-list">
      <h2>Twój koszyk</h2>
      {renderProductsSummary}
    </div>
  );
};

export default ProductSummary;
