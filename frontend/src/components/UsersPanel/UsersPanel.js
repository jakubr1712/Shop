import React from "react";
import { Link } from "react-router-dom";

const UsersPanel = ({ links }) => {
  const navLinks = links.map(({ id, url, text }) => (
    <li>
      <Link key={id} to={url}>
        {text}
      </Link>
    </li>
  ));

  return (
    <nav className="user-page__nav">
      <div className="user-page__nav--logo">
        <p>user name</p>
      </div>
      <ul>{navLinks}</ul>
    </nav>
  );
};

export default UsersPanel;
