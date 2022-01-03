const showSuccess = (inputElement) => {
  inputElement.current.offsetParent.classList.remove("error");
  inputElement.current.offsetParent.classList.add("success");
};
export default showSuccess;
