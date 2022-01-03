import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";

import checkRequired from "../../utils/checkRequired";

const Login = () => {
  const inputName = useRef("");
  const inputPassword = useRef("");

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    checkRequired([inputName, inputPassword]);
  };

  return (
    <Layout>
      <div className="form-container">
        <form id="form" className="form" onSubmit={onSubmit}>
          <h2>Zaloguj się</h2>
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
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              placeholder="Wpisz hasło"
              ref={inputPassword}
            />
            <small></small>
          </div>

          <button type="submit" className="form__btn--submit">
            Zaloguj się
          </button>
          <p className="change-action">
            Nie masz konta?
            <button type="button" className="change-action__btn">
              <Link to="/register">Zarejestruj się</Link>
            </button>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
