import showError from "../showError";
import getFieldName from "../getFieldName";

const checkIsNumber = (value) => {
  return typeof value === "number" && isFinite(value);
};

const isNumber = (inputElement) => {
  console.log("inputElement: ", inputElement);
  if (!checkIsNumber(inputElement.current.value)) {
    console.log("jestemmmm");
    showError(
      inputElement,
      `${getFieldName(inputElement)} Wprowadzona wartość nie jest liczbą`
    );
  }
};

export default isNumber;
