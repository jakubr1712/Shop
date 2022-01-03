import React from "react";
import { useGlobalContext } from "../../context";

const Button = ({ product: { id } }) => {
  const { addToBusket } = useGlobalContext();

  return (
    <button className="btn" onClick={() => addToBusket(id)}>
      DO KOSZYKA
    </button>
  );
};

export default Button;
