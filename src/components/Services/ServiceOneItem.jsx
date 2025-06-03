import React from "react";
import { Link } from "react-router-dom";

export const ServiceOneItem = ({ service }) => {
  return (
    <div className="services-item">
      <div className="services-content">
        <div className="content-top">
          <div className="icon">
            <i className={service.icon}></i>
          </div>

          <h2 className="title">{service.title}</h2>
        </div>

        <div className="services-thumb">
          <img src={service.src} alt={service.title} />

          {/* Link dinamico
          <Link to={service.href} className="btn transparent-btn">
            Ver Servicio
          </Link>
          */}
          {/* the style .services-thumb::before should also be edited to re enable this fully
          <Link to={"#"} className="btn transparent-btn">
            Ver Servicio
          </Link>
          */}
        </div>

        <ul className="list-wrap">
          {service.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
