const cleanInputs = (inputArr) => {
  inputArr.forEach((inputElement) => {
    if (inputElement) inputElement.current.value = "";
  });
};
export default cleanInputs;
