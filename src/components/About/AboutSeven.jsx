import React from "react";
import { Link } from "react-router-dom";
import { Odometer } from "../Odometer/Odometer";
import {
  INNER_ABOUT_IMG01,
  INNER_ABOUT_IMG02,
  INNER_ABOUT_SHAPE01,
} from "../../lib/assets";
import myImage1 from '../../assets/img/about-placeholders/main-1.jpg';
import myImage2 from '../../assets/img/about-placeholders/main-2.jpg';
import myImage3 from '../../assets/img/about-placeholders/dots.png';

export const AboutSeven = () => {
  return (
    <section className="about-area-seven pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9 order-0 order-lg-2">
            <div className="about-img-seven-wrap">
              <img
                src={myImage1}
                alt=""
                data-aos="fade-right"
                data-aos-delay="0"
              />
              <img
                src={myImage2}
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <img
                src={myImage3}
                alt=""
                className="shape"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
              <div
                className="experience-wrap"
                data-aos="fade-left"
                data-aos-delay="0"
              >
                <h2 className="title">25</h2>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-seven">
              <div className="section-title mb-30">
                <span className="sub-title">¿Quiénes Somos?</span>
                <h2 className="title">
                  Soluciones Confiables e Innovadoras en Seguros para Ti y Tu Empresa
                </h2>
              </div>
              <p>
                En <bold>Omaira Barbosa Asesores de Seguros Ltda</bold> ofrecemos asesoría integral en seguros con más de 15 años de experiencia en el sector. Trabajamos con las principales aseguradoras del país para brindarte soluciones seguras, personalizadas y eficaces que protejan lo que más valoras: tu vida, tu familia, tu patrimonio y tu empresa.
              </p>

              <div className="success-wrap-two">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <i className="flaticon-user-1"></i>
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={8000} />
                      </h2>
                      <p>Clientes </p>
                      <p>Satisfechos</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-briefcase"></i>
                    </div>
                    <div className="content">
                      <h2 className="count">
                        <Odometer end={225} /> 
                      </h2>
                      <p>Empresas</p>
                      <p>Protegidas</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/*
              <p className="info-two">
                Morem ipsum dolor sit amet, consectetur adipiscing elita florai
                psum dolor sit amet, consecteture. consecteture.Borem ipsum
                dolor sit amectetur adipiscing.
              </p>
              */}
              <Link to="/contact" className="btn btn-three">
                Ponte en contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
