import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

const SingleExistingProduct = () => (
  <div className="single-existing-product ">
    <h4>
      1. Płyn do płukania firanek Vanish -<span> 70 zł</span>
    </h4>
    <div className="single-existing-product__actions">
      <Link to={"/edit-product"}>
        <FaEdit className="edit-icon" />
      </Link>

      <button type="button" className="delete-btn delete-btn-admin">
        <FaTrash />
      </button>
    </div>
  </div>
);
export default SingleExistingProduct;
