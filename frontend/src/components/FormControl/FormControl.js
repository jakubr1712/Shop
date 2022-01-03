import React from "react";

const FormControl = (
  textFormControl,
  typeInput,
  idInput,
  placeholderText,
  refHook
) => (
  <div className="form__form-control">
    <label htmlFor={idInput}>{textFormControl}</label>
    <input
      type={typeInput}
      id={idInput}
      placeholder={placeholderText}
      ref={refHook}
    />
    <small></small>
  </div>
);
export default FormControl;
