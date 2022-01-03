import showError from "../showError";
import getFieldName from "../getFieldName";

const checkLength = (inputElement, min, max) => {
  if (inputElement.current.value.length < min) {
    showError(
      inputElement,
      `${getFieldName(inputElement)} musi mieć conajmniej ${min} znaków `
    );
  } else if (inputElement.current.value.length > max) {
    showError(
      inputElement,
      `${getFieldName(inputElement)} musi bić mniejsza niż ${max} znaków `
    );
  }
};
export default checkLength;
