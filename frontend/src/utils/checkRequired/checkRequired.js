import showError from "../showError";
import getFieldName from "../getFieldName";
import showSuccess from "../showSuccess";

const checkRequired = (inputArr) => {
  inputArr.forEach((inputElement) => {
    if (inputElement.current.value.trim() === "") {
      showError(inputElement, `${getFieldName(inputElement)} jest wymagane`);
    } else {
      showSuccess(inputElement);
    }
  });
};
export default checkRequired;
