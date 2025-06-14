import React from "react";
import { Link } from "react-router-dom";
import { SERVICES_TWO_LIST } from "../../mocks/services";
import { ServicesTwoItem } from "./ServicesTwoItem";

export const ServicesTwo = () => {
  return (
    <section className="services-area-two services-bg-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-title-two mb-60 tg-heading-subheading animation-style3">
              <span className="sub-title">LO QUE HACEMOS POR TI</span>
              <h2 className="title tg-element-title">
              Ofrecemos diferentes Servicios para Protegerte Mejor
                            </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="view-all-btn text-end mb-30">
              <Link to="/services" className="btn">
                Ver todos los Servicios
              </Link>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-lg-stretch">
          {SERVICES_TWO_LIST.map((service) => (
            <div
              key={service.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-8 d-lg-flex"
            >
              <ServicesTwoItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
