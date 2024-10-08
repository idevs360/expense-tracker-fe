import React from "react";
import style from "../css/Navbar.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav>
        <div>icon</div>
        <ul>
          <li>
            <Link to="/" className={style.link}>{props.link1}</Link>
          </li>
          <li>
            <Link to="/expense" className={style.link}>{props.link2}</Link>
          </li>
          <li>
            <Link to="/categories" className={style.link}>{props.link3}</Link>
          </li>

          <li>
          <Link to="/about-us" className={style.link}>{props.link4}</Link>
          </li>
        </ul>

        <div>
            <img src="" alt="img"/>
        </div>
      </nav>

      <Outlet/>
    </>
  );
}
