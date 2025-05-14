import React from "react";
import { Link } from "react-router-dom";

export const ServicesTwoItem = ({ service }) => {
  return (
    <div className="services-item-two w-100">
      <div className="services-thumb-two h-100">
        <img src={service.src} alt="" />
        {/* COMMENTED OUT TO MAKE THEM NOT APPEAR
        <div className="item-shape">
          <img src={service.srcShape} alt="" />
        </div>
        */}
      </div>
      <div className="services-content-two">
        <div className="icon">
          <i className={service.icon}></i>
        </div>
        <h2 className="title">
          <Link to={service.href}>{service.title}</Link>
        </h2>
        {/*Add classes d-none d-lg-block to the p element to remove it*/}
        <p className="">{service.subtitle}</p>
      </div>
    </div>
  );
};
