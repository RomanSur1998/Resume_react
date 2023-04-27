import React from "react";
import mainfoto from "./assets/mercedes-amg-f1-logo (1).png";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar__main_top">
        <nav className="navbar__left_top">
          <Link to={"/"}>
            <img style={{ width: "200px" }} src={mainfoto} alt="" />
          </Link>
        </nav>
        <ul className="navbar_ul">
          <li>
            {" "}
            <Link className="link" to={"/"}>
              <h4>Portrait</h4>
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to={"/car"}>
              <h4>Career</h4>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/par"}>
              <h4>Partner</h4>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/season"}>
              <h4>Season</h4>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/team"}>
              <h4>Team</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
