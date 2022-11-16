import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <header className="header__main" >
      <div className="header__div">
        <a className="header__a" href="">
          J
        </a>
      </div>
      <div className="header__div--text">
        <ul className="header__ul">
          <li className="header__li">
            <a className="header__a--nav" href="#section__aboutMe">
              About
            </a>
          </li>
          <li className="header__li">
            <a className="header__a--nav" href="#section__experience">
              Experience
            </a>
          </li>
          <li className="header__li">
            <a className="header__a--nav" href="#section__work">
              Work
            </a>
          </li>
          <li className="header__li">
            <a className="header__a--nav" href="#footer__form">
              Contact
            </a>
          </li>
          <li className="header__li">
            <a className="header__a--button" href="">
              CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
