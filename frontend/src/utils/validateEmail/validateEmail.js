import showSuccess from "../showSuccess";
import showError from "../showError";

const validateEmail = (inputElement) => {
  const re = /\S+@\S+\.\S+/;
  if (re.test(inputElement.current.value.trim())) {
    showSuccess(inputElement);
  } else {
    showError(inputElement, "Email jest nieprawidłowy");
  }
};
export default validateEmail;
