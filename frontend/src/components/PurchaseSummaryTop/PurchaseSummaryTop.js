import React from "react";
import { useGlobalContext } from "../../context";
import { FaShoppingBag } from "react-icons/fa";

const PurchaseSummaryTop = () => {
  const { totalCount } = useGlobalContext();

  return (
    <div className="purchase-summary-top">
      <FaShoppingBag className="purchase-summary-top__shopping-bag" />
      <div className="purchase-summary-top__amount-container">
        <p>{totalCount}</p>
      </div>
      <h2>Koszyk</h2>
    </div>
  );
};

export default PurchaseSummaryTop;
