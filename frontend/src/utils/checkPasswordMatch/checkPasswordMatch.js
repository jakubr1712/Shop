import showError from "../showError";

const checkPasswordMatch = (inputPassword, inputPassword2) => {
  if (inputPassword.current.value !== inputPassword2.current.value) {
    console.log("jestem teraz");
    showError(inputPassword, "Hasła nie są takie same");
    showError(inputPassword2);
  }
};

export default checkPasswordMatch;
