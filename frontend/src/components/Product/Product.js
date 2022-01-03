import React from "react";

import Button from "../Button";

const Product = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} className="product-card__img" alt="excecution" />
      <div className="product-card__price">{price}zł</div>
      <h4 className="product-card__name">{name}</h4>
      <Button product={product} />
    </div>
  );
};

export default Product;
