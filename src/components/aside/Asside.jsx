import React from "react";
import "./Aside.scss";

import { mask, tovar, profil, nastroyka } from "../../assets";
import { NavLink } from "react-router-dom";

const Asside = () => {
  return (
    <div>
      <aside className="aside">
        <div className="container">
          <div className="aside__wrapper">
            <NavLink to="/">
              <img className="aside__img mask" src={mask} alt="rasm" />
            </NavLink>
            <NavLink to="/Empty">
              {" "}
              <img className="aside__img" src={nastroyka} alt="rasm" />
            </NavLink>
            <NavLink to="/login">
              {" "}
              <img className="aside__img" src={profil} alt="rasm" />
            </NavLink>
            <NavLink to="/add-product">
              {" "}
              <img className="aside__img" src={tovar} alt="rasm" />
            </NavLink>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Asside;
