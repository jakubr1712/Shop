import React, { useState } from "react";

import links from "../../constants/links";
import navAside from "../../constants/navAside";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pageLinks = links.map(({ id, text, url }) => (
    <Link key={id} to={url}>
      <li>{text}</li>
    </Link>
  ));

  const navAsideLinks = navAside.map(({ id, text, url }) => (
    <Link key={id} to={url}>
      <li>{text}</li>
    </Link>
  ));

  return (
    <nav>
      <div className={isOpen ? `nav-center show-links` : `nav-center`}>
        <button
          className="nav-center__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>
        <ul className="nav-center__links">{pageLinks}</ul>
        <ul className="nav-center__aside">
          {navAsideLinks}
          <Link to="/admin-page">
            <li>admin</li>
          </Link>
          <button type="button" className="sign-out">
            <FiLogOut />
            Wyloguj się
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Button;
