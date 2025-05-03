import React from "react";
import { Link } from "react-router-dom";

export const CtaAreaOne = () => {
  return (
    <section className="cta-area">
      <div className="container">
        <div className="cta-inner-wrap">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="cta-content">
                <div className="cta-info-wrap">
                  <div className="icon">
                    <i className="flaticon-phone-call"></i>
                  </div>
                  <div className="content">
                    <span>Llama para más información:</span>
                    <a href="https://wa.me/573118111643" target="_blank" rel="noopener noreferrer">+57 311 811 1643</a>
                    </div>
                </div>
                <h2 className="title">
                Agenda una consulta gratuita con nuestro equipo de expertos.                </h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cta-btn text-end">
              <div className="cta-btn text-end">
  <a
    href="https://wa.me/573118111643"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    CONTÁCTANOS
  </a>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
