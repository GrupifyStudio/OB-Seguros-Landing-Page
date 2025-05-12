import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export const NavMenus = () => {
  const { pathname } = useLocation();

  const isActiveCn = (path) => {
    return path === pathname ? "active" : "";
  };

  const homeLinkList = [
    {
      to: "/",
      title: "Finance",
    },
    {
      to: "/home-2",
      title: "Consulting",
    },
    {
      to: "/home-3",
      title: "Insurance",
    },
    {
      to: "/home-4",
      title: "Digital Agency",
    },
    {
      to: "/home-5",
      title: "Business",
    },
  ];

  const aboutLinkList = [
    {
      to: "/about",
      title: "About One",
    },
    {
      to: "/about-2",
      title: "About Two",
    },
    {
      to: "/about-3",
      title: "About Three",
    },
    {
      to: "/about-4",
      title: "About Four",
    },
    {
      to: "/about-5",
      title: "About Five",
    },
  ];

  const servicesLinkList = [
    {
      to: "/services",
      title: "Services One",
    },
    {
      to: "/services-2",
      title: "Services Two",
    },
    {
      to: "/services-3",
      title: "Services Three",
    },
    {
      to: "/services-4",
      title: "Services Four",
    },
    {
      to: "/services-5",
      title: "Services Five",
    },
  ];

  const servicesDetailsLinkList = [
    {
      to: "/services-details",
      title: "Services Details One",
    },
    {
      to: "/services-details-2",
      title: "Services Details Two",
    },
    {
      to: "/services-details-3",
      title: "Services Details Three",
    },
    {
      to: "/services-details-4",
      title: "Services Details Four",
    },
    {
      to: "/services-details-5",
      title: "Services Details Five",
    },
  ];

  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
        {/* home */}
        <li className={cn(isActiveCn("/"))}>

          <a href="#">Inicio</a>
        </li>

        {/* about */}
        <li className={cn(isActiveCn("/"))}>

          <a href="#">Nosotros</a>
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
