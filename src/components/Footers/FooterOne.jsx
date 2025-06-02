import React from "react";
import { Link } from "react-router-dom";
import { LOGO, W_LOGO } from "../../lib/assets";

export const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-7">
                <div className="footer-widget">
                  <h4 className="fw-title">Informacion</h4>
                  <div className="footer-info">
                    <ul className="list-wrap">
                      <li>
                        {/*
                        <div className="icon">
                          <i className="flaticon-pin"></i>
                        </div>
                        <div className="content">
                          <p>58 Street Commercial Road Fratton, Australia</p>
                        </div>
                        */}
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="content">
                          <a href="https://wa.me/573143357610" target="_blank" rel="noopener noreferrer">+57 314 335 7610</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="content">
                          <a href="https://wa.me/573232196219" target="_blank" rel="noopener noreferrer">+57 323 219 6219</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="content">
                          <a href="https://wa.me/573209208399" target="_blank" rel="noopener noreferrer">+57 320 920 8399</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-clock"></i>
                        </div>
                        <div className="content">
                          <p>
                            Lunes – Viernes: 7:30 am – 6:00 pm, <br />
                            <span>CERRADO</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Menu</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/">Inicio</Link>
                      </li>
                      <li>
                        <Link to="/services">Servicios</Link>
                      </li>
                      {/*
                      <li>
                        <Link to="/contact">Prensa</Link>
                      </li>
                      <li>
                        <Link to="/blog">Nuestro Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Privacy Policy</Link>
                      </li>
                      */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Nuestras Redes</h4>
                  <div className="footer-newsletter">
                  {/* Change text up here to newsletter if you remove the comments
                    <p>
                      Sign up to Privitar’s weekly newsletter to get the latest
                      updates.
                    </p>
                    <form action="#">
                      <input type="email" placeholder="enter your e-mail" />
                      <button type="submit">Subscribe</button>
                    </form>
                  */}
                    <div className="footer-social footer-social-one">
                      <ul className="list-wrap" style={{justifyContent:"flex-start"}}>
                        <li>
                          <a href="https://www.facebook.com/share/16d7TgrNMJ/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        {/*
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        */}
                        <li>
                          <a href="https://www.instagram.com/obseguros01/profilecard/?igsh=a2hoNHRyNTY5dmth">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        {/*
                        <li>
                          <a href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* newsletter commented out
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <h4 className="fw-title">Subscribe to Our Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Sign up to Privitar’s weekly newsletter to get the latest
                      updates.
                    </p>
                    <form action="#">
                      <input type="email" placeholder="enter your e-mail" />
                      <button type="submit">Subscribe</button>
                    </form>
                    <span>We don’t send you any spam</span>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="left-sider">
                  <div className="f-logo">
                    <Link to="/">
                      <img src="/LogoObSeguros.png" alt="" />
                    </Link>
                  </div>
                  <div className="copyright-text">
                    <p>Copyright © OB seguros | Todos los derechos asegurados</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-social">
                  <ul className="list-wrap">
                    <li>
                      <a href="https://www.facebook.com/share/16d7TgrNMJ/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    {/*
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    */}
                    <li>
                      <a href="https://www.instagram.com/ob_seguros?igsh=MTN5b3dqem5nbHBvMw%3D%3D">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    {/*
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
