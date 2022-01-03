const removeClasses = (inputArr) => {
  inputArr.forEach((inputElement) => {
    inputElement.current.offsetParent.classList.remove("error");
    inputElement.current.offsetParent.classList.remove("success");
  });
};
export default removeClasses;
