import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const FooterMenu = () => {
  return (
    <ul className="footer__menu  flex-container flex-column">
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/menu"
        >
          Меню
        </NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/blog"
        >
          Блог
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/about"
        >
          Инфо
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/contact"
        >
          Обратная Связь
        </NavLink>
      </li>
    </ul>
  );
};
export default FooterMenu;
