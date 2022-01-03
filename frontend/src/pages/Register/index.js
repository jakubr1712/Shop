import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";

import checkRequired from "../../utils/checkRequired";
import checkLength from "../../utils/checkLength";
import checkPasswordMatch from "../../utils/checkPasswordMatch";
import validateEmail from "../../utils/validateEmail";

const Register = () => {
  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputPassword = useRef("");
  const inputPassword2 = useRef("");

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    checkRequired([inputName, inputEmail, inputPassword, inputPassword2]);
    checkLength(inputPassword, 8, 25);
    checkLength(inputName, 5, 15);
    checkPasswordMatch(inputPassword, inputPassword2);
    validateEmail(inputEmail);
  };

  return (
    <Layout>
      <div className="form-container">
        <form id="form" className="form" onSubmit={onSubmit}>
          <h2>Zarejestruj się</h2>
          <div className="form__form-control">
            <label htmlFor="username">Nazwa użytkownika</label>
            <input
              type="text"
              id="username"
              placeholder="Wpisz nazwe użytkownika"
              ref={inputName}
            />
            <small></small>
          </div>
          <div className="form__form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Wpisz email"
              ref={inputEmail}
            />
            <small></small>
          </div>
          <div className="form__form-control">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              placeholder="Wpisz hasło"
              ref={inputPassword}
            />
            <small></small>
          </div>
          <div className="form__form-control">
            <label htmlFor="password2">Powtórz hasło</label>
            <input
              type="password"
              id="password2"
              placeholder="Powtórz hasło"
              ref={inputPassword2}
            />
            <small></small>
          </div>
          <button type="submit" className="form__btn--submit">
            Zarejestruj się
          </button>
          <p className="change-action">
            Masz już konto?
            <button type="button" className="change-action__btn">
              <Link to="/login">Zaloguj się</Link>
            </button>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
