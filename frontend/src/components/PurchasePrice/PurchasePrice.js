import React from "react";
import { useGlobalContext } from "../../context";

const PurchasePrice = () => {
  const { totalAmount, discount } = useGlobalContext();

  const salePrice = (totalAmount * (100 - +discount.slice(-2))) / 100;

  return (
    <div className="purchase-summary__price">
      <span>Cena:</span>{" "}
      {discount && totalAmount > 0 ? (
        <div>
          <span className="cross">
            {totalAmount}
            {"zł "}
          </span>
          <span className="sale-price"> {salePrice.toFixed(2)}zł</span>
        </div>
      ) : (
        <span className="bold">{totalAmount}zł</span>
      )}
    </div>
  );
};

export default PurchasePrice;
