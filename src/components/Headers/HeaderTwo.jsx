import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { HeaderSearch } from "./HeaderSearch";
import { LOGO } from "../../lib/assets";
import { MobileMenu } from "./MobileMenu";
import { NavMenus } from "./NavMenus";
import { useStickyMenu } from "../../lib/hooks/useStickyMenu";

export const HeaderTwo = () => {
  // menu sticky
  useStickyMenu();

  return (
    <>
      <header
        id="sticky-header"
        className="transparent-header header-style-two"
      >
        <div className="container custom-container">
          <div className="heder-top-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location"></i>San Gil, Colombia
                    </li>
                    <li>
                      <i className="flaticon-mail"></i>
                      <a href="mailto:asesores@obseguros.com.co">asesores@obseguros.com.co</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5" style={{paddingRight:"0"}}>
                <div className="header-top-right">
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                      <a
      href="https://www.facebook.com/share/16d7TgrNMJ/"
      target="_blank"
      rel="noopener noreferrer"
    >                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                     
                      <li>
                        <a href="https://www.instagram.com/obseguros01/profilecard/?igsh=a2hoNHRyNTY5dmth">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                       
                      </li>
                    </ul>
                  </div>
                  <div className="header-top-btn">
                    <Link to="/contact">
                      <i className="flaticon-briefcase"></i>Contactanos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-area">
            <div className="row" style={{backgroundColor:"white"}}>
              <div className="col-12">
                <div className="mobile-nav-toggler d-flex align-items-center d-lg-none">
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link to="/">
                      <img 
      src="/LogoObSeguros.png" 
      alt="Logo de OB Seguros" 
      className="logo-img"
    />                      </Link>
                    </div>

                    {/* nav links */}
                    <NavMenus />

                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-contact-two">
                          <div className="icon">
                            <i className="flaticon-phone-call"></i>
                          </div>
                          <div className="content">
                            <span>Contacto</span>
                            <a href="https://wa.me/573118111643" target="_blank" rel="noopener noreferrer">+57 311 811 1643</a>
                            </div>
                        </li>
                        {/* <li className="header-search">
                          <a href="#">
                            <i className="flaticon-search"></i>
                          </a>
                        </li>
                        <li className="offcanvas-menu">
                          <a href="#" className="menu-tigger">
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu  */}
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>

        {/* header-search */}
        <HeaderSearch />

        {/* sidebar */}
        <Sidebar />
      </header>
    </>
  );
};
