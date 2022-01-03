import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => (
  <div className="notfound__wrapper">
    <div className="notfound">
      <div className="notfound-404">
        <h3>Nie znaleziono strony!</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
      </div>
      <h2>Ta strona jest niedostępna. Przepraszamy.</h2>
      <Link to="/">
        <div className="notfound-btn__wrapper">
          <div className="notfound-btn">
            <span></span>
          </div>
        </div>
      </Link>
    </div>
  </div>
);
export default Page404;
