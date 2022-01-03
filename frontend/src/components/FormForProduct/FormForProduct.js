import React, { useRef } from "react";

import FormAlert from "../FormAlert";

import checkLength from "../../utils/checkLength";
import checkRequired from "../../utils/checkRequired";

const FormForProduct = ({ headerText, btnText }) => {
  const inputNameNewProduct = useRef("");
  const inputPriceNewProduct = useRef("");
  const inputImgNewProduct = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();

    checkRequired([inputNameNewProduct, inputPriceNewProduct]);
    checkLength(inputNameNewProduct, 4, 34);
  };

  return (
    <div className="form-container">
      <form id="form" className="form" onSubmit={onSubmit}>
        <h2>{headerText}</h2>
        <div className="form__form-control">
          <label htmlFor="username">Nazwa produktu</label>
          <input
            type="text"
            id="username"
            placeholder="Wpisz nazwe produktu"
            ref={inputNameNewProduct}
          />
          <small></small>
        </div>
        <div className="form__form-control">
          <label htmlFor="price">Cena produktu</label>
          <input
            type="number"
            id="price"
            placeholder="Wpisz cenę produktu"
            ref={inputPriceNewProduct}
          />
          <small></small>
        </div>
        <div className="form__form-control">
          <label htmlFor="completed">Zdjęcie</label>
          <input
            type="file"
            id="myFile"
            name="filename"
            ref={inputImgNewProduct}
          />
          <small className="info">
            Zdjęcie powinno być wymiarów 260x260 (jpg)
          </small>
        </div>

        <button type="submit" className="form__btn--submit">
          {btnText}
        </button>
        <FormAlert />
      </form>
    </div>
  );
};
export default FormForProduct;
