import React from "react";
import p1 from "../../images/brand_logo.png";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="container">
        <div className="menu_wrapper">
          <a className="logo" href="#">
            <img src={p1} alt="brandlogo" />
          </a>
          <div className="navMenu">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">LOcation</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="loginbut">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
