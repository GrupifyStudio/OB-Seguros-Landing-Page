import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../../lib/assets"; // Uncommented as requested

export const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two footer-bg-two">
        <div className="footer-top-two">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <div className="fw-logo">
                    <Link to="/">
                      <img src="/LogoObSeguros.png" alt="Logo" />
                    </Link>
                  </div>

                  <div className="footer-content">
                    <div className="footer-info">
                      <ul className="list-wrap">
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
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
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
                        <Link to="/contact">Press media</Link>
                      </li>
                      <li>
                        <Link to="/blog">Our Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Privacy Policy</Link>
                      </li>
                      */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Removed quick links, uncomment to show them again
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Quick Links</h4>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/contact">How it’s Work</Link>
                      </li>
                      <li>
                        <Link to="/contact">Partners</Link>
                      </li>
                      <li>
                        <Link to="/contact">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/contact">Case Studies</Link>
                      </li>
                      <li>
                        <Link to="/contact">Pricing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              */}
              <div className="col-lg-4 col-md-7">
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
                    <div className="footer-social footer-social-two">
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
                          <a href="https://www.instagram.com/ob_seguros?igsh=MTN5b3dqem5nbHBvMw==">
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
        </div>

        <div className="footer-bottom-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text-two text-center">
                  <p>Copyright © OB Seguros | All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
