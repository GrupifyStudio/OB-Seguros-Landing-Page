import React, { useEffect } from "react";
import {
  ABOUT_AUTHOR,
  H2_ABOUT_IMG01,
  H2_ABOUT_IMG02,
  H2_ABOUT_SHAPE01,
  H2_ABOUT_SHAPE02,
  H2_ABOUT_SHAPE03,
  SIGNATURE,
} from "../../lib/assets";

export const AboutThree = () => {
  const list = [
   "Experiencia Comprobada",
   "Asesoría Personalizada",
   "Alianzas Estratégicas",
  " Acompañamiento Continuo"
  ];

  return (
    <section className="about-area-three">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="about-img-wrap-three">
              <img
                src={H2_ABOUT_IMG01}
                alt=""
                data-aos="fade-down-right"
                data-aos-delay="0"
              />
              <img
                src={H2_ABOUT_IMG02}
                alt=""
                data-aos="fade-left"
                data-aos-delay="400"
              />
              <div
                className="experience-wrap"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">
                  +15 <span>Años</span>
                </h2>
                <p>De experiencia brindando asesoría especializada en seguros en Colombia.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-three">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                <span className="sub-title">CONÓCENOS</span>
                <h2 className="title tg-element-title">
                Soluciones Innovadoras y Confiables para tu Protección Integral                </h2>
              </div>
              <p className="info-one">
              En Omaira Barbosa Asesores de Seguros LTDA trabajamos con dedicación, compromiso y más de 15 años de experiencia, brindando soluciones integrales y adaptadas a las necesidades específicas de cada cliente, protegiendo así tu patrimonio, 
              vida y futuro con máxima responsabilidad.
              </p>

              <div className="about-list-two">
                <ul className="list-wrap">
                  {list.map((item, idx) => (
                    <li key={idx}>
                      <i className="fas fa-arrow-right"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
              Te apoyamos en cada etapa, especialmente en reclamaciones y prevención de riesgos.
              </p>
              <div className="about-author-info">
                {/* <div className="thumb">
                  <img src={ABOUT_AUTHOR} alt="" />
                </div> */}
                {/* <div className="content">
                  <h2 className="title">Mark Stranger</h2>
                  <span>CEO, Gerow Finance</span>
                </div> */}
                {/* <div className="signature">
                  <img src={SIGNATURE} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-wrap-two">
        <img src={H2_ABOUT_SHAPE01} alt="" />
        <img src={H2_ABOUT_SHAPE02} alt="" />
        <img
          src={H2_ABOUT_SHAPE03}
          alt=""
          data-aos="fade-left"
          data-aos-delay="500"
        />
      </div>
    </section>
  );
};
