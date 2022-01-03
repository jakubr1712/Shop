import React from "react";

import { useGlobalContext } from "../../context";

import Product from "../Product";

const ProductsLists = () => {
  const { data } = useGlobalContext();

  const renderProducts = data?.map((item, index) => (
    <Product product={item} key={index} />
  ));
  return <div className="products-lists">{renderProducts}</div>;
};

export default ProductsLists;
