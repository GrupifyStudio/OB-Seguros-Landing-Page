import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const NavMenus = () => {
  const { pathname } = useLocation();

  const isActiveCn = (path) => {
    return path === pathname ? "active" : "";
  };

  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
        {/* home */}
        <li className={cn(isActiveCn("/"))}>

          <a href="/">Inicio</a>
        </li>

        {/* about */}
        <li className={cn(isActiveCn("/about"))}>

          <a href="/about">Nosotros</a>
        </li>

        {/* pages */}
        <li
          className={cn("menu-item-has-children", {
            active: [
              "/Seguros",

            ]
              .map((el) => el.to)
              .includes(pathname),
          })}
        >
          <li className={cn(isActiveCn("/services"))}>
            <Link to="/services">Servicios</Link>
          </li>

        </li>

        {/* blog */}
        <li
          className={cn("menu-item-has-children", {
            active: ["/blog", "/blog-details"].includes(pathname),
          })}
        >
        </li>

        {/* contact */}
        <li className={cn(isActiveCn("/contact"))}>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};
