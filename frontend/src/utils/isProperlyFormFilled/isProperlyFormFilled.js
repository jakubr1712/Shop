const isProperlyFormFilled = (inputArr) =>
  inputArr.every((inputElement) =>
    inputElement.current.offsetParent.classList.contains("success")
  );

export default isProperlyFormFilled;
