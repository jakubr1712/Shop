const showError = (inputElement, message = "") => {
  inputElement.current.offsetParent.classList.add("error");
  inputElement.current.nextSibling.innerText = message;
};
export default showError;
