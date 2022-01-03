import React from "react";
import { useGlobalContext } from "../../context";

const PurchaseDiscount = () => {
  const {
    checkDiscoutCode,
    discountValue,
    setDiscountValue,
    discount,
    setDiscount,
  } = useGlobalContext();

  return (
    <form className="discount-code" onSubmit={checkDiscoutCode}>
      <h3>Kod rabatowy</h3>
      <input
        type="text"
        value={discountValue}
        onChange={(e) => setDiscountValue(e.target.value)}
      />
      {discount ? (
        <div className="discount-code__info">
          <h5>
            Zastosowano kod rabatowy: <span className="bold">{discount}</span>{" "}
          </h5>
          <button
            type="button"
            className="delete-btn"
            onClick={() => setDiscount("")}
          >
            X
          </button>
        </div>
      ) : null}
    </form>
  );
};

export default PurchaseDiscount;
