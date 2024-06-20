import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ title, description, icon }) => (
  <div className="home-service-card">
    <div className="home-service-icon">{icon}</div>
    <h3 className="home-service-title">{title}</h3>
    <p className="home-service-description">{description}</p>
    <button className="home-read-more">Read More</button>
  </div>
);

const Services = () => (
  <div className="home-container">
    <div className="home-services">
      <ServiceDetails
        title="Email Services"
        description="Email Services highly efficient process improvements. Engage highly value before progressive data."
        icon={<i className="fas fa-envelope"></i>}
      />
      <ServiceDetails
        title="Web Development"
        description="Web Development Services highly efficient process improvements. Engage highly value before progressive data."
        icon={<i className="fas fa-code"></i>}
      />
      <ServiceDetails
        title="Digital Marketing"
        description="Digital Marketing Services highly efficient process improvements. Engage highly value before progressive data."
        icon={<i className="fas fa-bullhorn"></i>}
      />
      <ServiceDetails
        title="Data Analytics"
        description="Data Analytics Services highly efficient process improvements. Engage highly value before progressive data."
        icon={<i className="fas fa-chart-line"></i>}
      />
    </div>
  </div>
);

export default Services;
