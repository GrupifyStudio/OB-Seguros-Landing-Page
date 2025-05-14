import React from "react";
import { SERVICES_ONE_LIST } from "../../mocks/services";
import { ServiceOneItem } from "./ServiceOneItem";
import { REAL_SERVICES_LIST } from "./REAL_SERVICES_LIST";

export const ServiceFive = () => {
  const list = REAL_SERVICES_LIST.slice(0, 24);
  list.length = 25;

  return (
    <section className="services-area-five inner-services-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title-two text-center mb-50">
              <h2 className="title">
Explora las soluciones más importantes que ofrecemos
              </h2>
              <p> Protegemos tu vida, tu empresa y tu patrimonio con planes diseñados para ti.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {list.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-sm-10">
              <ServiceOneItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
