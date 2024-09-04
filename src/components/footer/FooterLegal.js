import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const FooterLegal = () => {
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
          to="/careers"
        >
          Карьера
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
          to="/privacy"
        >
          Приватная Политика
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
          to="/refunds"
        >
          Рефанд
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
          to="/terms"
        >
          Политика соглашения
        </NavLink>
      </li>
    </ul>
  );
};

export default FooterLegal;
