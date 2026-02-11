import React from "react";
import { W_LOGO } from "../../lib/assets";
import { Link } from "react-router-dom";
import { isBusinessOpen } from "../../lib/utils/businessHours";

export const FooterThree = () => {
  const isOpen = isBusinessOpen();

  return (
    <footer>
      <div className="footer-area-three">
        <div className="footer-top-three">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <div className="fw-logo">
                    <Link to="/">
                      <img src={W_LOGO} alt="" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      When an unknown printer took a galley of type aawer awtnd
                      scrambled it to make a type specimen book.
                    </p>
                    <div className="footer-social footer-social-three">
                      <ul className="list-wrap">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-youtube"></i>
                          </a>
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
                        <Link to="/about">Company</Link>
                      </li>
                      <li>
                        <Link to="/contact">Careers</Link>
                      </li>
                      <li>
                        <Link to="/contact">Press media</Link>
                      </li>
                      <li>
                        <Link to="/blog">Our Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-6">
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
              <div className="col-lg-3 col-md-7">
                <div className="footer-widget">
                  <h4 className="fw-title">Contact</h4>
                  <div className="footer-info">
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-pin"></i>
                        </div>
                        <div className="content">
                          <p>
                            San Gil: Cra 9 No. 11 - 31 Of 201 / Cll 12 No. 12 - 123 Of 177, San Gil - Santander<br />
                            Bogotá: Cll 60 No. 9 - 34 Chapinero, Bogotá D.C
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="content">
                          <a href="tel:+573118111643">+57 311 811 1643</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-clock"></i>
                        </div>
                        <div className="content">
                          <p>
                            Lunes – Viernes: 7:30 am – 6:00 pm, <br />
                            <span style={{ color: isOpen ? "#28a745" : "#dc3545", fontWeight: "bold" }}>
                              {isOpen ? "ABIERTO" : "CERRADO"}
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-three">
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
