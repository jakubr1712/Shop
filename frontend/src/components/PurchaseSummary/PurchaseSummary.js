import React from "react";

import PurchasePrice from "../PurchasePrice";
import ProductSummary from "../ProductSummary";
import PurchaseDiscount from "../PurchaseDiscount";
import PurchaseSummaryTop from "../PurchaseSummaryTop";

const PurchaseSummary = () => {
  return (
    <div className="purchase-summary">
      <PurchaseSummaryTop />
      <PurchasePrice />
      <ProductSummary />
      <PurchaseDiscount />
    </div>
  );
};

export default PurchaseSummary;
