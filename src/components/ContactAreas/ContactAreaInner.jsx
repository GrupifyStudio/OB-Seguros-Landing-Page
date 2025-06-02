import React from "react";
import { CONTACT_IMG } from "../../lib/assets"; // Assuming CONTACT_IMG is still relevant

export const ContactAreaInner = () => {
  return (
    <section className="inner-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="inner-contact-img">
              {/* Ensure this image is still appropriate or update/remove as needed */}
              <img src={CONTACT_IMG} alt="Omaira Barbosa Asesores de Seguros - Oficina Principal" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="inner-contact-info">
              <h2 className="title">Nuestra Oficina Principal</h2>

              {/* Company Info Block */}
              <div className="contact-info-item">
                <h5 className="title-two">OMAIRA BARBOSA ASESORES DE SEGUROS LTDA</h5>
                <ul className="list-wrap">
                  <li>NIT. 901.727.021–4</li>
                  <li>
                    <a href="http://www.obseguros.com.co" target="_blank" rel="noopener noreferrer">
                      www.obseguros.com.co
                    </a>
                  </li>
                </ul>
              </div>

              {/* Email Block */}
              <div className="contact-info-item">
                <h5 className="title-two">Correos</h5>
                <ul className="list-wrap">
                  <li>
                    <a href="mailto:asesores@obseguros.com.co">asesores@obseguros.com.co</a>
                  </li>
                  <li>
                    <a href="mailto:omairabarbosaltda@asesorsura.com">omairabarbosaltda@asesorsura.com</a>
                  </li>
                  <li>
                    <a href="mailto:omairabarbosa_camacho@hotmail.com">omairabarbosa_camacho@hotmail.com</a>
                  </li>
                </ul>
              </div>

              {/* Phone Block */}
              <div className="contact-info-item">
                <h5 className="title-two">Teléfonos</h5>
                <ul className="list-wrap">
                  <li>
                    <a href="tel:+573143357610">+57 314 335 7610</a>
                  </li>
                  <li>
                    <a href="tel:+573232196219">+57 323 219 6219</a>
                  </li>
                  <li>
                    <a href="tel:+573209208399">+57 320 920 8399</a>
                  </li>
                  <li>
                    <a href="tel:+573118111643">+57 311 811 1643</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
